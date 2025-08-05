<template>
    <div class="bg-white py-12 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our AI Solutions</p>
          <h2 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Structured Engagement Models for Enterprise AI
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Clear entry points to start your AI transformation journey
          </p>
        </div>
  
        <!-- Grid of Cards -->
        <div ref="scrollContainer" class="mt-12 lg:mt-20 flex flex-row overflow-x-auto space-x-6 pb-4 scrollbar-hide" style="scrollbar-width: none; -ms-overflow-style: none;">
          
          <!-- Card 1: AI Discovery Workshop -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[320px] w-80">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <!-- Heroicon: light-bulb -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div class="flex-1 pt-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900">AI Discovery Workshop</h3>
                <p class="mt-3 text-base text-gray-500">
                  Identify high-impact AI use cases, audit data readiness, and build a tailored roadmap with clear ROI projections.
                </p>
              </div>
              <div class="mt-6">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  1-2 weeks
                </span>
              </div>
              <div class="mt-6">
                <a href="#" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Schedule a Workshop &rarr;
                </a>
              </div>
            </div>
          </div>
  
          <!-- Card 2: 2-Week AI Pilot -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[320px] w-80">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <!-- Heroicon: rocket-launch -->
                 <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-2.56 5.84m-2.56-5.84a6 6 0 017.38-5.84m-7.38 5.84L5.63 21m9.96-14.37L18.37 5.63m-14.37 9.96L5.63 5.63m9.96 14.37L18.37 21m-9.96-5.63a6 6 0 00-5.84-7.38v4.82m5.84 2.56a6 6 0 007.38-5.84m-7.38 5.84a6 6 0 00-5.84 7.38m5.84-7.38L5.63 5.63" />
                </svg>
              </div>
            </div>
            <div class="flex-1 pt-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900">2-Week AI Pilot</h3>
                <p class="mt-3 text-base text-gray-500">
                  Rapidly prototype a custom AI agent on a chosen use case to demonstrate tangible ROI and user acceptance.
                </p>
              </div>
              <div class="mt-6">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  2 weeks
                </span>
              </div>
              <div class="mt-6">
                <a href="#" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Request a Pilot &rarr;
                </a>
              </div>
            </div>
          </div>
  
          <!-- Card 3: Custom AI App Delivery -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[320px] w-80">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <!-- Heroicon: cog -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div class="flex-1 pt-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900">Custom AI App Delivery</h3>
                <p class="mt-3 text-base text-gray-500">
                  Full lifecycle development of production-ready, bespoke AI agents to replace or augment legacy systems.
                </p>
              </div>
              <div class="mt-6">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  6-12 weeks
                </span>
              </div>
              <div class="mt-6">
                <a href="#" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          </div>
  
          <!-- Card 4: AI Portfolio Rationalization -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[320px] w-80">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <!-- Heroicon: search-circle -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
            </div>
            <div class="flex-1 pt-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900">AI Portfolio Rationalization</h3>
                <p class="mt-3 text-base text-gray-500">
                  Comprehensive audit of your existing SaaS stack to identify redundant tools and high-ROI replacement candidates.
                </p>
              </div>
              <div class="mt-6">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  2-4 weeks
                </span>
              </div>
              <div class="mt-6">
                <a href="#" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Request Audit &rarr;
                </a>
              </div>
            </div>
          </div>
  
          <!-- Card 5: Managed AI Stack -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[320px] w-80">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <!-- Heroicon: headphone -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-14 0m14 0a7 7 0 00-14 0m14 0h-1m-1 0a6 6 0 00-12 0m12 0v1a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1m0 0a3 3 0 013-3h1a3 3 0 013 3z" />
                </svg>
              </div>
            </div>
            <div class="flex-1 pt-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900">Managed AI Stack</h3>
                <p class="mt-3 text-base text-gray-500">
                  Ongoing support, optimization, architecture guidance, and strategic iteration for your deployed AI solutions.
                </p>
              </div>
              <div class="mt-6">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Ongoing
                </span>
              </div>
              <div class="mt-6">
                <a href="#" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Explore Services &rarr;
                </a>
              </div>
            </div>
          </div>
  
          <!-- Card 6: AI Enablement Consulting -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[320px] w-80">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <!-- Heroicon: presentation-chart-bar -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
            <div class="flex-1 pt-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900">AI Enablement Consulting</h3>
                <p class="mt-3 text-base text-gray-500">
                  Strategic advisory services to align AI adoption with business goals and build internal AI capabilities.
                </p>
              </div>
              <div class="mt-6">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Flexible
                </span>
              </div>
              <div class="mt-6">
                <a href="#" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Talk to an Expert &rarr;
                </a>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const scrollContainer = ref(null)
  let scrollInterval = null

  const startScroll = () => {
    if (scrollInterval) return
    scrollInterval = setInterval(() => {
      if (scrollContainer.value) {
        if (
          scrollContainer.value.scrollLeft + scrollContainer.value.clientWidth >=
          scrollContainer.value.scrollWidth
        ) {
          scrollContainer.value.scrollLeft = 0
        } else {
          scrollContainer.value.scrollLeft += 1
        }
      }
    }, 30)
  }

  const stopScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval)
      scrollInterval = null
    }
  }

  onMounted(() => {
    startScroll()
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('mouseenter', stopScroll)
      scrollContainer.value.addEventListener('mouseleave', startScroll)
    }
  })

  onBeforeUnmount(() => {
    stopScroll()
    if (scrollContainer.value) {
      scrollContainer.value.removeEventListener('mouseenter', stopScroll)
      scrollContainer.value.removeEventListener('mouseleave', startScroll)
    }
  })
  </script>
  
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
  