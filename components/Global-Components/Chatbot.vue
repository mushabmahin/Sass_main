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
        <div v-if="isOpen" class="w-[calc(100vw-40px)] sm:w-96 h-[70vh] max-h-[700px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-4">
          <div class="p-4 bg-blue-600 text-white flex justify-between items-center flex-shrink-0">
            <h3 class="text-lg font-semibold">AI Assistant</h3>
          </div>
  
          <div ref="messageContainer" class="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <div v-for="message in messages" :key="message.id" class="mb-2">
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
              <div v-if="message.sender === 'bot' && message.options && message.options.length" class="mt-3 flex flex-wrap gap-2 justify-start">
                  <button 
                      v-for="option in message.options" 
                      :key="option.text"
                      @click="handleOptionClick(option)"
                      class="px-3 py-1.5 text-sm border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                  >
                      {{ option.text }}
                  </button>
              </div>
            </div>
            <div v-if="isBotTyping" class="flex justify-start mt-2">
                <div class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-2xl flex items-center space-x-1">
                    <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style="animation-delay: 0s;"></span>
                    <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></span>
                    <span class="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></span>
                </div>
            </div>
          </div>
  
          <div class="p-4 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex-shrink-0">
            <form @submit.prevent="handleUserInput" class="flex items-center">
              <input
                v-model="newMessage"
                type="text"
                :placeholder="inputPlaceholder"
                class="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                :disabled="isChatFinished || isInputDisabled"
              />
              <button
                type="submit"
                class="ml-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                :disabled="isChatFinished || !newMessage.trim() || isInputDisabled"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </transition>
  
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
  
  // --- START: KNOWLEDGE BASE CONFIGURATION ---
  const questions = ref([
      // Main Entry Point
      { id: 0, keywords: ['hi', 'hello', 'start', 'menu'], answer: 'Hello! I am the Saasinator AI Assistant. How can I help you today?', options: [{ text: 'Our AI Services', nextId: 1 }, { text: 'Book a Consultation', nextId: 300 }] },
      
      // Services Branch
      { id: 1, keywords: ['services', 'solutions', 'products'], answer: 'We offer several AI-powered services to boost your business. Which area are you interested in?', options: [{ text: 'AI Portfolio Rationalization', nextId: 10 }, { text: 'Custom AI App', nextId: 11 }, { text: 'AI Strategy', nextId: 12 }, { text: 'Managed AI Services', nextId: 13 }, { text: 'Back to menu', nextId: 0 }] },
      { id: 10, keywords: ['rationalization', 'audit', 'waste'], answer: 'With AI Portfolio Rationalization, we audit your existing SaaS subscriptions, identify waste, and build lean, cost-effective AI alternatives to boost your ROI.', options: [{ text: 'How does it work?', nextId: 100 }, { text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
      { id: 11, keywords: ['custom', 'bespoke', 'agent'], answer: 'We build Custom AI Apps and bespoke agents that are tailored to your specific workflows, replacing expensive, generic SaaS products.', options: [{ text: 'What can you build?', nextId: 110 }, { text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
      { id: 12, keywords: ['strategy', 'discovery', 'roadmap'], answer: 'Our AI Strategy & Discovery service provides strategic advisory, a clear implementation roadmap, and workshops to help you become an AI-native business.', options: [{ text: 'Who is this for?', nextId: 120 }, { text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
      { id: 13, keywords: ['managed', 'support', 'maintenance'], answer: 'With our Managed AI Services, we provide ongoing support, maintenance, and architecture advisory for your custom AI solutions, ensuring they run smoothly.', options: [{ text: 'What\'s included?', nextId: 130 }, { text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
  
      // Deeper Service Questions
      { id: 100, keywords: ['how rationalization works'], answer: 'Our process involves three steps: 1) We analyze your SaaS spending. 2) We identify redundant tools. 3) We propose and build a custom AI solution to consolidate those tasks.', options: [{ text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
      { id: 110, keywords: ['what you build'], answer: 'We can build anything from internal data analysis agents and customer support bots to complex workflow automation tools that integrate with your existing systems.', options: [{ text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
      { id: 120, keywords: ['who strategy for'], answer: 'Our strategy service is ideal for leadership teams (CEOs, CTOs) who want to understand how to leverage AI for a competitive advantage but aren\'t sure where to start.', options: [{ text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
      { id: 130, keywords: ['whats included managed'], answer: 'Our managed services include performance monitoring, regular updates, security patches, and access to our AI architects for strategic advice.', options: [{ text: 'Book a consultation', nextId: 300 }, { text: 'Back to services', nextId: 1 }] },
  
      // Consultation/Quote Process Trigger
      { id: 300, keywords: ['quote', 'consultation', 'contact'], answer: 'Great! Let\'s schedule a consultation. First, what is your full name?', options: [] },
  ]);
  
  // Fallback / Consultation flow questions
  const consultationQuestions = [
      { key: 'name', text: 'To get started, what is your full name?' },
      { key: 'email', text: 'Thanks, {name}. What is your business email address?' },
      { key: 'interest', text: 'And which of our services are you most interested in discussing?' },
      { key: 'end', text: 'Perfect! Thank you, {name}. We have your information and our team will contact you at {email} within 24 hours to schedule your AI consultation.' }
  ];
  // --- END: KNOWLEDGE BASE CONFIGURATION ---
  
  const isOpen = ref(false);
  const isBotTyping = ref(false);
  const newMessage = ref('');
  const messages = ref([]);
  const messageContainer = ref(null);
  const isChatFinished = ref(false);
  const isInputDisabled = ref(false);
  
  const isConsultationActive = ref(false);
  const consultationStep = ref(0);
  const consultationData = ref({});
  
  const inputPlaceholder = computed(() => {
      if (isChatFinished.value) return 'Chat has ended. Thank you!';
      if (isConsultationActive.value || isInputDisabled.value) return 'Please use the options or type your answer...';
      return 'Type your message or use the options...';
  });
  
  const toggleChat = () => {
      isOpen.value = !isOpen.value;
      if (isOpen.value && messages.value.length === 0) {
          startChat();
      }
  };
  
  const startChat = () => {
      isChatFinished.value = false;
      isConsultationActive.value = false;
      isInputDisabled.value = false;
      consultationStep.value = 0;
      consultationData.value = {};
      messages.value = [];
      askQuestionById(0);
  };
  
  const scrollToBottom = () => {
      nextTick(() => {
          if (messageContainer.value) {
              messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
          }
      });
  };
  
  watch(messages, scrollToBottom, { deep: true });
  
  const showTypingIndicator = async () => {
      isBotTyping.value = true;
      await new Promise(res => setTimeout(res, 800));
      isBotTyping.value = false;
  };
  
  const handleUserInput = async () => {
      const userAnswer = newMessage.value.trim();
      if (!userAnswer || isChatFinished.value || isInputDisabled.value) return;
  
      addMessageToChat(userAnswer, 'user');
      const userInput = newMessage.value;
      newMessage.value = '';
      await showTypingIndicator();
  
      if (isConsultationActive.value) {
          handleConsultationInput(userInput);
      } else {
          const lowerCaseAnswer = userInput.toLowerCase();
          const foundQuestion = questions.value.find(q => q.keywords.some(kw => lowerCaseAnswer.includes(kw)));
  
          if (foundQuestion) {
              askQuestionById(foundQuestion.id);
          } else {
              // If no keyword match, start the consultation flow as a fallback
              isConsultationActive.value = true;
              consultationQuestions[0].text = `I'm sorry, I couldn't find an answer for that. I can connect you with an expert for a consultation. What is your name?`;
              askConsultationQuestion();
          }
      }
  };
  
  const handleOptionClick = async (option) => {
      addMessageToChat(option.text, 'user');
      await showTypingIndicator();
      
      if (option.nextId === 300) {
          isConsultationActive.value = true;
          askConsultationQuestion();
      } else {
          askQuestionById(option.nextId);
      }
  };
  
  const askQuestionById = (id) => {
      const question = questions.value.find(q => q.id === id);
      if (question) {
          isInputDisabled.value = question.options && question.options.length > 0;
          addMessageToChat(question.answer, 'bot', question.options || []);
      }
  };
  
  const addMessageToChat = (text, sender, options = []) => {
      messages.value.push({
          id: Date.now() + Math.random(),
          text,
          sender,
          options
      });
  };
  
  // --- Consultation Flow Logic ---
  const askConsultationQuestion = () => {
      let questionText = consultationQuestions[consultationStep.value].text;
      
      Object.keys(consultationData.value).forEach(key => {
          questionText = questionText.replace(`{${key}}`, consultationData.value[key]);
      });
  
      isInputDisabled.value = false;
      addMessageToChat(questionText, 'bot');
  
      if (consultationStep.value === consultationQuestions.length - 1) {
          isChatFinished.value = true;
          isInputDisabled.value = true;
          console.log("Consultation data collected:", consultationData.value);
      }
  };
  
  const handleConsultationInput = (userAnswer) => {
      const currentStep = consultationQuestions[consultationStep.value];
      consultationData.value[currentStep.key] = userAnswer;
      
      consultationStep.value++;
      
      if (consultationStep.value < consultationQuestions.length) {
          askConsultationQuestion();
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
  