<template>
  <div class="bg-white font-sans py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
          What is AI Portfolio Rationalization?
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          It's a smarter way to manage your technology. Our AI analyzes your entire software portfolio to give you a clear, data-driven action plan.
        </p>
      </div>

      <!-- Stepped Comparison -->
      <div class="mt-16 relative flex flex-col items-center justify-center">
         

        <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8 md:gap-0">
          <!-- Before Card -->
          <div class="relative w-full max-w-sm text-center bg-gray-50 border border-gray-200 rounded-lg shadow-md p-8 z-10">
            <h4 class="text-sm font-bold tracking-widest text-gray-500 uppercase">Before AI Rationalization</h4>
            <div class="my-6 flex justify-center">
               <img src="/svg/rationalization-before.svg" alt="Rationalization After"  width="220" height="110" />
             </div>
            <p class="text-gray-700 font-medium">
              A sprawling, unmanaged software landscape with high costs and redundancy.
            </p>
          </div>

          <!-- Arrow Icon - now using primary color -->
          <div class="flex-shrink-0 text-primary-500 my-4 md:my-0 md:mx-8 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          <!-- After Card -->
          <div class="relative w-full max-w-sm text-center bg-white border border-primary-400 rounded-lg shadow-xl p-8 z-10">
            <h4 class="text-sm font-bold tracking-widest text-primary-600 uppercase">After AI Rationalization</h4>
            <div class="my-6 flex justify-center">
               <img src="/svg/rationalization-after.svg" alt="Rationalization After"  width="220" height="110" />
            </div>
            <p class="text-gray-700 font-medium">
              A strategically optimized and efficient technology stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AIRationalizationSteppedSection'
}
</script>

<style scoped>
/* No specific scoped styles needed for this Tailwind CSS implementation */
</style>
