<template>
  <div class="relative">
    <!-- Floating Contact Us Button -->
    <div class="fixed bottom-8 right-8 z-50">
      <button 
        @click="showContactModal = true"
        class="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center gap-3 border border-blue-400/20 overflow-hidden"
      >
        <!-- Chat icon -->
        <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <span class="font-semibold group-hover:scale-105 transition-transform duration-300">Contact us</span>
        
        <!-- Shimmer effect -->
        <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <!-- Pulse animation -->
        <div class="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
      </button>
    </div>

    <!-- Side Contact Panel -->
    <div 
      v-if="showContactModal" 
      class="fixed top-0 right-0 h-full z-50 transform transition-transform duration-500 ease-in-out"
      :class="showContactModal ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Contact Panel Content -->
      <div class="h-full w-96 bg-white shadow-2xl border-l border-gray-200 overflow-hidden">
        <!-- Top Blue Section -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 relative">
          <!-- Close button -->
          <button 
            @click="showContactModal = false"
            class="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          >
            <svg class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-2 hover:scale-105 transition-transform duration-300">Call us at</h3>
            <p class="text-blue-100 mb-4 hover:text-white transition-colors duration-300">India</p>
            <div class="space-y-2">
              <p class="text-xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <span class="group-hover:text-blue-200 transition-colors duration-300">+91-80-66655771</span>
              </p>
              <p class="text-xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <span class="group-hover:text-blue-200 transition-colors duration-300">1-800-266-2208</span>
              </p>
            </div>
            <p class="text-sm text-blue-200 mt-4 hover:text-white transition-colors duration-300">
              Or see our complete list of 
              <a href="#" class="underline hover:text-white transition-colors duration-300 hover:scale-105 inline-block">local country numbers</a>
            </p>
          </div>
        </div>

        <!-- Bottom White Section with Scroll -->
        <div class="h-full overflow-y-auto bg-gray-50">
          <div class="p-6 space-y-4">
            <!-- Call me now -->
            <div class="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 transform hover:scale-[1.02] hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-base mb-1">
                    <a href="#" class="underline group-hover:no-underline">Call me now</a>
                  </h4>
                  <p class="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    SAP can call you to discuss any questions you have.
                  </p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Chat now -->
            <div class="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200 transform hover:scale-[1.02] hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 text-base mb-1">
                    <a href="#" class="underline group-hover:no-underline">Chat now</a>
                  </h4>
                  <p class="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    Get live help and chat with an SAP representative.
                  </p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Contact us -->
            <div class="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200 transform hover:scale-[1.02] hover:-translate-y-1">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 text-base mb-1">
                    <a href="#" class="underline group-hover:no-underline">Contact us</a>
                  </h4>
                  <p class="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    Send us your comments, questions, or feedback.
                  </p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Additional Support Options -->
            <div class="space-y-3 mt-8">
              <!-- Email Support -->
              <div class="group bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h5 class="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm">Email Support</h5>
                    <p class="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">support@sap.com</p>
                  </div>
                </div>
              </div>

              <!-- Documentation -->
              <div class="group bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h5 class="font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300 text-sm">Documentation</h5>
                    <p class="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Help & tutorials</p>
                  </div>
                </div>
              </div>

              <!-- Community -->
              <div class="group bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h5 class="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300 text-sm">Community</h5>
                    <p class="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Connect with users</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Support Info -->
            <div class="mt-6 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse mt-2 flex-shrink-0"></div>
                <div>
                  <h5 class="font-semibold text-blue-900 text-sm mb-1">Quick Support</h5>
                  <p class="text-xs text-blue-700 leading-relaxed">
                    Our team is available 24/7 to assist you with any questions or concerns. Get instant support through multiple channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
  data() {
    return {
      showContactModal: false
    }
  }
}
</script>

<style scoped>
/* Enhanced animations */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Smooth transitions */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Side panel slide animation */
.transform {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.group:hover {
  transform: translateY(-1px);
}

/* Professional card hover effects */
.group:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Smooth icon animations */
.group:hover svg {
  transform: scale(1.1);
}

/* Pulse animation for status indicator */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Custom scrollbar for the contact panel */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
  transition: background 0.3s ease;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Enhanced card animations */
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover {
  transform: translateY(-2px) scale(1.01);
}

/* Gradient text effects */
.group:hover h4 {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Smooth border transitions */
.border {
  transition: border-color 0.3s ease;
}

/* Enhanced shadow effects */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
  