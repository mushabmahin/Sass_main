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
            <h3 class="text-lg font-semibold">Chat with us</h3>
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
                :disabled="isChatFinished || isBotTyping"
              />
              <button
                type="submit"
                class="ml-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                :disabled="isChatFinished || isBotTyping || !newMessage.trim()"
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
              <svg v-if="!isOpen" :key="'chat-icon'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <svg v-else :key="'close-icon'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </transition>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, nextTick, computed } from 'vue';
  
  // --- START: BOT CONFIGURATION ---
  const botConfig = {
    // Provide context about your website/business for the AI to use.
    // Be descriptive! Include services, products, target audience, etc.
    systemContext: `
      You are a helpful and friendly assistant for a company that sells premium, handcrafted coffee beans.
      Our popular products are 'Morning Bliss Roast', 'Midnight Velvet (Decaf)', and 'Andean Explorer Single-Origin'.
      We offer free shipping on orders over $50.
      Your goal is to answer user questions about our products and company.
      If the user wants to talk to a human, make a large order, or asks about partnerships,
      transition to booking a call with them.
    `,
    // Questions for the lead capture/booking flow.
    bookingQuestions: [
      { key: 'start_booking', text: 'I can help with that. To book a call, I just need a few details. First, what is your name?' },
      { key: 'name', text: 'Thanks, {name}! What is your email address?' },
      { key: 'email', text: 'Great. What is the main topic you\'d like to discuss on the call?' },
      { key: 'topic', text: 'Perfect. We will email you at {email} shortly to schedule your call. Thanks for reaching out!' }
    ],
    // Keywords that trigger the booking flow.
    bookingKeywords: ['book a call', 'schedule', 'talk to someone', 'contact sales', 'human'],
    // Number of user messages before suggesting to book a call.
    maxAiMessages: 5
  };
  // --- END: BOT CONFIGURATION ---
  
  const isOpen = ref(false);
  const isBotTyping = ref(false);
  const newMessage = ref('');
  const messages = ref([]);
  const messageContainer = ref(null);
  const userData = ref({});
  const isChatFinished = ref(false);
  const chatMode = ref('ai'); // 'ai' or 'booking'
  const aiMessageCount = ref(0);
  const currentBookingQuestionIndex = ref(0);
  
  const inputPlaceholder = computed(() => {
      if (isChatFinished.value) return 'Chat has ended. Thank you!';
      if (chatMode.value === 'booking') return 'Type your answer here...';
      return 'Ask me anything...';
  });
  
  const toggleChat = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value && messages.value.length === 0) {
      startChat();
    }
  };
  
  const startChat = () => {
    messages.value.push({
      id: Date.now(),
      text: "Hello! I'm a virtual assistant. Feel free to ask me about our products and services.",
      sender: 'bot'
    });
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
    const userMessageText = newMessage.value.trim();
    if (!userMessageText || isChatFinished.value || isBotTyping.value) return;
  
    addMessage(userMessageText, 'user');
    newMessage.value = '';
    isBotTyping.value = true;
  
    if (chatMode.value === 'ai') {
      // --- AI Mode ---
      aiMessageCount.value++;
      const userWantsToBook = botConfig.bookingKeywords.some(keyword => userMessageText.toLowerCase().includes(keyword));
      
      if (userWantsToBook || aiMessageCount.value >= botConfig.maxAiMessages) {
        // Transition to booking mode
        chatMode.value = 'booking';
        await new Promise(res => setTimeout(res, 500));
        isBotTyping.value = false;
        askBookingQuestion();
      } else {
        // Continue with AI conversation
        getAiResponse(userMessageText);
      }
    } else {
      // --- Booking Mode ---
      const currentQuestion = botConfig.bookingQuestions[currentBookingQuestionIndex.value];
      userData.value[currentQuestion.key] = userMessageText;
      currentBookingQuestionIndex.value++;
      
      await new Promise(res => setTimeout(res, 500));
      isBotTyping.value = false;
      askBookingQuestion();
    }
  };
  
  const getAiResponse = async (prompt) => {
    try {
      const apiKey = ""; // The environment will provide this.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  
      const payload = {
        contents: [
          ...messages.value.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          })),
          { role: "user", parts: [{ text: prompt }] }
        ],
        systemInstruction: {
          parts: [{ text: botConfig.systemContext }]
        }
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      const result = await response.json();
      
      let botResponse = "Sorry, I couldn't process that. Please try again.";
      if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
        botResponse = result.candidates[0].content.parts[0].text;
      }
      addMessage(botResponse, 'bot');
  
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      addMessage("There was an error connecting to the assistant. Please try again later.", 'bot');
    } finally {
      isBotTyping.value = false;
    }
  };
  
  const askBookingQuestion = () => {
      if (currentBookingQuestionIndex.value >= botConfig.bookingQuestions.length) {
          isChatFinished.value = true;
          console.log("Final user data collected:", userData.value);
          // Here you would typically send the data to your backend/CRM.
          return;
      }
  
      let nextQuestionText = botConfig.bookingQuestions[currentBookingQuestionIndex.value].text;
      
      // Personalize the question
      Object.keys(userData.value).forEach(key => {
          nextQuestionText = nextQuestionText.replace(`{${key}}`, userData.value[key]);
      });
  
      addMessage(nextQuestionText, 'bot');
  
      if (currentBookingQuestionIndex.value === botConfig.bookingQuestions.length - 1) {
          isChatFinished.value = true;
          console.log("Final user data collected:", userData.value);
      }
  };
  
  const addMessage = (text, sender) => {
    messages.value.push({
      id: Date.now() + Math.random(),
      text: text,
      sender: sender,
    });
  };
  
  </script>
  
  <style scoped>
  .overflow-y-auto::-webkit-scrollbar { width: 8px; }
  .overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background-color: #a0aec0;
    border-radius: 20px;
    border: 3px solid transparent;
    background-clip: content-box;
  }
  .dark .overflow-y-auto::-webkit-scrollbar-thumb { background-color: #4a5568; }
  .whitespace-pre-wrap { white-space: pre-wrap; }
  
  /* Styles for the icon fade transition */
  .fade-icon-enter-active,
  .fade-icon-leave-active { transition: opacity 0.2s ease; }
  .fade-icon-enter-from, .fade-icon-leave-to { opacity: 0; }
  </style>
  