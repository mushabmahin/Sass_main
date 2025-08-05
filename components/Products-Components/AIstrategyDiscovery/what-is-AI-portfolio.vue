<template>
  <div class="bg-white font-sans py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto  ">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight mb-2">
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
              <!-- Cloud Icon for 'Before' state (chaos/disorder) - now using primary color shade -->
              <svg class="w-20 h-20 text-primary-custom" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.38 3.377 2.792 3.377H19.08a2.25 2.25 0 002.19-2.913l-2.2-7.5C18.498 8.68 16.904 7.5 15.18 7.5H8.82c-1.725 0-3.32 1.18-3.896 2.813L2.607 16.502zM12 15.75h.007v.008H12v-.008z" />
              </svg>
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
              <!-- Gears Icon for 'After' state (efficiency/optimization) - now using primary color -->
              <svg class="w-20 h-20 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995s-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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