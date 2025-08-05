<template>
    <div class="relative py-12 lg:py-24" style="background: url('/images/background-one-white.jpg') center center / cover no-repeat;">
      <div class="absolute inset-0 bg-white opacity-75 pointer-events-none"></div>
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
        <div class="mt-12 lg:mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <!-- Card 1: AI Discovery Workshop -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <LightBulbIcon class="h-6 w-6" />
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
              <RouterLink to="/products/ai-strategy-discovery" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                Explore Services &rarr;
              </RouterLink>
              </div>
            </div>
          </div>
  
          <!-- Card 2: 2-Week AI Pilot -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <RocketLaunchIcon class="h-6 w-6" />
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
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <Cog6ToothIcon class="h-6 w-6" />
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
                  4-8 weeks
                </span>
              </div>
               <div class="mt-6">
              <RouterLink to="/products/custom-ai-app" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                Explore Services &rarr;
              </RouterLink>
              </div>
            </div>
          </div>
  
          <!-- Card 4: AI Portfolio Rationalization -->
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
              <MagnifyingGlassCircleIcon class="h-6 w-6" />
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
              <RouterLink to="/products/ai-portfolio-rationalization" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                Request Audit &rarr;
              </RouterLink>
              </div>
            </div>
            </div>
  
          <!-- Card 5: Managed AI Stack -->
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
              <SpeakerWaveIcon class="h-6 w-6" />
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
              <RouterLink to="/products/managed-ai-services" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                Explore Services &rarr;
              </RouterLink>
              </div>
            </div>
            </div>
  
          <!-- Card 6: AI Enablement Consulting -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                <PresentationChartBarIcon class="h-6 w-6" />
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
  import { LightBulbIcon, RocketLaunchIcon, Cog6ToothIcon, MagnifyingGlassCircleIcon, SpeakerWaveIcon, PresentationChartBarIcon } from '@heroicons/vue/24/outline'
  </script>
  
  <style scoped>
  /* Ensure overlay is below content */
  .relative > .absolute {
    z-index: 0;
  }
  .relative > *:not(.absolute) {
    position: relative;
    z-index: 1;
  }
  </style>
  