<template>
  <section class="relative bg-gray-50 py-8 sm:py-12 overflow-hidden">
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-8 sm:mb-12">
        <!-- Title with decorative lines -->
        <div class="flex items-center justify-center mb-3">
          <div class="w-6 h-px bg-gray-900 transition-all duration-300 group-hover:w-8"></div>
          <h2 class="text-base/7 font-semibold text-gray-900 uppercase tracking-wider mx-3 hover:text-blue-600 transition-colors duration-300">SAASINATOR FACTS</h2>
          <div class="w-6 h-px bg-gray-900 transition-all duration-300 group-hover:w-8"></div>
        </div>
        
        <!-- Main Headline -->
        <h1 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl leading-tight hover:text-blue-600 transition-colors duration-500">
          Shaping the Future with Every Achievement
        </h1>
      </div>

      <!-- Facts Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Fact 1: Successful Projects -->
        <div class="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
          <div class="relative mb-4">
            <!-- Icon Square -->
            <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">10,000+</div>
          <div class="text-lg leading-6 font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Successful Projects</div>
        </div>

        <!-- Fact 2: Years of Experience -->
        <div class="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
          <div class="relative mb-4">
            <!-- Icon Square -->
            <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">10+</div>
          <div class="text-lg leading-6 font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Years of Experience</div>
        </div>

        <!-- Fact 3: Happy Clients -->
        <div class="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
          <div class="relative mb-4">
            <!-- Icon Square -->
            <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">300+</div>
          <div class="text-lg leading-6 font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Happy Clients</div>
        </div>

        <!-- Fact 4: Global Offices -->
        <div class="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
          <div class="relative mb-4">
            <!-- Icon Square -->
            <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">3</div>
          <div class="text-lg leading-6 font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Global Offices</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Achievements'
}
</script>

<style scoped>
/* Additional custom styles for enhanced hover effects */
.group:hover {
  filter: drop-shadow(0 10px 25px rgba(59, 130, 246, 0.15));
}

/* Smooth animation for the entire section */
section {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced hover effects for individual items */
.group:hover .w-12 {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>
    