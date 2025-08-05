<template>
  <div class="bg-gray-50 font-sans py-20 sm:py-24" ref="statsSection">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Stats Grid -->
      <div class=" grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8">

        <!-- Stat 1: Cost Reduction -->
        <div class="text-center">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto mb-4">
            <!-- SVG Icon: Bill/Money -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2V7a2 2 0 012-2h4z" />
            </svg>
          </div>
          <p class="text-5xl font-extrabold text-gray-900">85-90%</p>
          <h3 class="mt-2 text-lg leading-6 font-bold text-gray-900">Reduction in software costs</h3>
        </div>

        <!-- Stat 2: Applications -->
        <div class="text-center">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto mb-4">
            <!-- SVG Icon: Layers/Stack -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 9h16" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 12h16" />
            </svg>
          </div>
          <p class="text-5xl font-extrabold text-gray-900"> 30-50%</p>
          <h3 class="mt-2 text-lg leading-6 font-bold text-gray-900">Applications</h3>
        </div>


        <!-- Stat 3: Lack Visibility -->
        <div class="text-center">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3l7 4v5c0 5.25-3.5 9.75-7 11-3.5-1.25-7-5.75-7-11V7l7-4z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <p class="text-5xl font-extrabold text-gray-900">10x</p>
          <h3 class="mt-2 text-lg leading-6 font-bold text-gray-900">Faster deployment</h3>
        </div>

        <!-- Stat 4: Lack Visibility -->
        <div class="text-center">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto mb-4">
            <!-- SVG Icon: Shield/Check for Uptime Guarantee -->
             <!-- SVG Icon: Eye with slash -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m-2.176-2.176a3 3 0 00-4.243-4.243" />
            </svg>
            
          </div>
          <p class="text-5xl font-extrabold text-gray-900">70%</p>
          <h3 class="mt-2 text-lg leading-6 font-bold text-gray-900">Lack Visibility</h3>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechStackStatsSection',
};
</script>

<style scoped>

</style>