<template>
    <div class="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <!-- Chat Window -->
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="transform opacity-0 scale-95 translate-y-10"
        enter-to-class="transform opacity-100 scale-100 translate-y-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="transform opacity-100 scale-100 translate-y-0"
        leave-to-class="transform opacity-0 scale-95 translate-y-10"
      >
        <div v-if="isOpen" class="w-[calc(100vw-40px)] sm:w-96 h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-4">
          <!-- Header -->
          <div class="p-4 bg-blue-600 text-white flex justify-between items-center">
            <h3 class="text-lg font-semibold">Get a Quote</h3>
            <!-- The close button in the header is removed for a cleaner look -->
          </div>
  
          <!-- Messages Area -->
          <div ref="messageContainer" class="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <div v-for="message in messages" :key="message.id" class="mb-4">
              <div :class="message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'">
                <div
                  :class="{
                    'bg-blue-500 text-white': message.sender === 'user',
                    'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200': message.sender === 'bot',
                  }"
                  class="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl"
                >
                  <p class="text-sm whitespace-pre-wrap">{{ message.text }}</p>
                </div>
              </div>
            </div>
            <!-- Typing Indicator -->
            <div v-if="isBotTyping" class="flex justify-start">
                <div class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-2xl flex items-center space-x-1">
                    <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style="animation-delay: 0s;"></span>
                    <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></span>
                    <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></span>
                </div>
            </div>
          </div>
  
          <!-- Input Area -->
          <div class="p-4 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <form @submit.prevent="handleUserInput" class="flex items-center">
              <input
                v-model="newMessage"
                type="text"
                :placeholder="inputPlaceholder"
                class="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                :disabled="isChatFinished"
              />
              <button
                type="submit"
                class="ml-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                :disabled="isChatFinished || !newMessage.trim()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </transition>
  
      <!-- Unified Toggle Button -->
      <button @click="toggleChat" class="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform hover:scale-110 active:scale-95">
          <transition name="fade-icon" mode="out-in">
              <!-- Chat Icon (when closed) -->
              <svg v-if="!isOpen" :key="'chat-icon'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <!-- Close Icon (when open) -->
              <svg v-else :key="'close-icon'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </transition>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, nextTick, computed } from 'vue';
  
  // --- START: QUESTION CONFIGURATION ---
  const questions = ref([
    { key: 'intro', text: 'Hello! I can help you with a quote. First, what is your name?' },
    { key: 'name', text: 'Nice to meet you, {name}! What is your email address?' },
    { key: 'email', text: 'Great. Which of our services are you interested in?' },
    { key: 'service', text: 'Understood. Could you briefly describe your project requirements?' },
    { key: 'requirements', text: 'Thanks! What is your approximate budget for this project?' },
    { key: 'budget', text: 'Perfect. We have all the information we need. We will contact you at {email} shortly with a detailed quote. Thank you!' }
  ]);
  // --- END: QUESTION CONFIGURATION ---
  
  const isOpen = ref(false);
  const isBotTyping = ref(false);
  const newMessage = ref('');
  const messages = ref([]);
  const messageContainer = ref(null);
  const currentQuestionIndex = ref(0);
  const userData = ref({});
  const isChatFinished = ref(false);
  
  const inputPlaceholder = computed(() => {
      if(isChatFinished.value) return 'Chat has ended. Thank you!';
      return 'Type your answer here...';
  });
  
  const toggleChat = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value && messages.value.length === 0) {
      startChat();
    }
  };
  
  const startChat = () => {
      isChatFinished.value = false;
      currentQuestionIndex.value = 0;
      userData.value = {};
      messages.value = [{
          id: Date.now(),
          text: questions.value[0].text,
          sender: 'bot'
      }];
  };
  
  const scrollToBottom = () => {
    nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    });
  };
  
  watch(messages, scrollToBottom, { deep: true });
  
  const handleUserInput = async () => {
    const userAnswer = newMessage.value.trim();
    if (!userAnswer || isChatFinished.value) return;
  
    messages.value.push({
      id: Date.now(),
      text: userAnswer,
      sender: 'user',
    });
    
    const previousQuestionKey = questions.value[currentQuestionIndex.value].key;
    userData.value[previousQuestionKey] = userAnswer;
    
    newMessage.value = '';
    isBotTyping.value = true;
    currentQuestionIndex.value++;
  
    await new Promise(res => setTimeout(res, 800));
    isBotTyping.value = false;
  
    if (currentQuestionIndex.value < questions.value.length) {
      askNextQuestion();
    } else {
      isChatFinished.value = true;
      console.log("Final user data collected:", userData.value);
    }
  };
  
  const askNextQuestion = () => {
      let nextQuestionText = questions.value[currentQuestionIndex.value].text;
      
      Object.keys(userData.value).forEach(key => {
          nextQuestionText = nextQuestionText.replace(`{${key}}`, userData.value[key]);
      });
  
      messages.value.push({
          id: Date.now(),
          text: nextQuestionText,
          sender: 'bot'
      });
  
      if (currentQuestionIndex.value === questions.value.length - 1) {
          isChatFinished.value = true;
          console.log("Final user data collected:", userData.value);
      }
  };
  
  </script>
  
  <style scoped>
  /* Scoped styles for custom animations or scrollbars if needed */
  .overflow-y-auto::-webkit-scrollbar {
    width: 8px;
  }
  .overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
  }
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background-color: #a0aec0;
    border-radius: 20px;
    border: 3px solid transparent;
    background-clip: content-box;
  }
  .dark .overflow-y-auto::-webkit-scrollbar-thumb {
      background-color: #4a5568;
  }
  .whitespace-pre-wrap {
      white-space: pre-wrap;
  }
  
  /* Styles for the icon fade transition */
  .fade-icon-enter-active,
  .fade-icon-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-icon-enter-from,
  .fade-icon-leave-to {
    opacity: 0;
  }
  </style>
  