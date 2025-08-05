<template>
  <section class="relative bg-gray-900 py-8 sm:py-12 overflow-hidden">
    <!-- Background Image with Blur Effect -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/background-one-white.jpg');">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    </div>
    
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-8 sm:mb-12">
        <!-- Title with decorative lines -->
        <div class="flex items-center justify-center mb-3">
          <div class="w-6 h-px bg-white"></div>
          <h2 class="text-base/7 font-semibold text-white uppercase tracking-wider mx-3">SAASINATOR FACTS</h2>
          <div class="w-6 h-px bg-white"></div>
        </div>
        
        <!-- Main Headline -->
        <h1 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl leading-tight">
          Shaping the Future with Every Achievement
        </h1>
      </div>

      <!-- Facts Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Fact 1: Successful Projects -->
        <div class="flex flex-col items-center text-center group">
          <div class="relative mb-4">
            <!-- Icon Circle -->
            <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-white mb-1">10,000+</div>
          <div class="text-lg leading-6 font-bold text-white/90">Successful Projects</div>
        </div>

        <!-- Fact 2: Years of Experience -->
        <div class="flex flex-col items-center text-center group">
          <div class="relative mb-4">
            <!-- Icon Circle -->
            <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-white mb-1">10+</div>
          <div class="text-lg leading-6 font-bold text-white/90">Years of Experience</div>
        </div>

        <!-- Fact 3: Happy Clients -->
        <div class="flex flex-col items-center text-center group">
          <div class="relative mb-4">
            <!-- Icon Circle -->
            <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-white mb-1">300+</div>
          <div class="text-lg leading-6 font-bold text-white/90">Happy Clients</div>
        </div>

        <!-- Fact 4: Global Offices -->
        <div class="flex flex-col items-center text-center group">
          <div class="relative mb-4">
            <!-- Icon Circle -->
            <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>
          <div class="text-5xl font-extrabold text-white mb-1">3</div>
          <div class="text-lg leading-6 font-bold text-white/90">Global Offices</div>
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
/* Additional custom styles if needed */
</style>
    