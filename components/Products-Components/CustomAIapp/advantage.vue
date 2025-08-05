<template>
    <section class="bg-gray-100 text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Section Title and Subtitle -->
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">The Saasinator Advantage</h2>
          <p class="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            We're not just developers; we're your strategic partners in AI transformation. We deliver outcomes, not just code.
          </p>
        </div>
  
        <!-- Grid for Advantage Items (no longer distinct cards) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Loop through advantages data to create items -->
          <div
            v-for="advantage in advantages"
            :key="advantage.id"
            class="flex flex-col items-start text-left p-4"
          >
            <div class="mb-4 text-blue-600">
              <!-- Icon for the advantage. For dynamic icons, you would map 'advantage.icon' to an SVG component or path. -->
              <!-- Current SVGs are placeholders. -->
              <svg v-if="advantage.id === 'ai-native'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 3.31 2.69 6 6 6v2zm-4.2-2.58C6.03 14.52 5 12.82 5 11h2c0 1.38.62 2.63 1.62 3.47L7.8 17.35zm10.4-2.58c.97-1.35 1.62-3.03 1.62-4.87h2c0 2.06-1.01 3.91-2.58 5.02L16.2 14.75zM12 4.07V2c3.95.49 7 3.85 7 7.93h-2c0-3.31-2.69-6-6-6z"/>
              </svg>
              <svg v-else-if="advantage.id === 'strategic-partnership'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5s-3 1.34-3 3 1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5s-3 1.34-3 3 1.34 3 3 3zM2 17c0 3.31 3.58 6 8 6s8-2.69 8-6h-2c0 2.21-2.91 4-6 4s-6-1.79-6-4H2z"/>
              </svg>
              <svg v-else-if="advantage.id === 'full-ip-ownership'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2-9V6c0-1.1.9-2 2-2s2 .9 2 2v2H10z"/>
              </svg>
              <svg v-else-if="advantage.id === 'enterprise-security'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.74-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <svg v-else-if="advantage.id === 'transparent-pricing'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-2-9H6v-2h12v2z"/>
              </svg>
              <svg v-else-if="advantage.id === 'measurable-roi'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.3L22 12V6z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ advantage.title }}</h3>
            <p class="text-gray-700">
              {{ advantage.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define the advantages data as a ref, mimicking a JSON structure
  const advantages = ref([
    {
      id: 'ai-native',
      title: 'AI-Native Focus',
      description: 'We live and breathe AI. We don\'t bolt on AI features; we build intelligent systems from the ground up for maximum impact.',
      // In a real application, you might have an 'icon' property here
      // that maps to a specific icon component or a path to an SVG file.
    },
    {
      id: 'strategic-partnership',
      title: 'Strategic Partnership',
      description: 'We work with you to build a long-term AI roadmap, ensuring every application we build aligns with your core business objectives.',
    },
    {
      id: 'full-ip-ownership',
      title: 'No Vendor Lock-In',
      description: 'Our solutions are built with open standards and complete transparency—so youre never locked into a platform or provider.',
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise-Grade Security',
      description: 'We build with a security-first mindset, ensuring your application and data are protected with industry best practices.',
    },
    {
      id: 'transparent-pricing',
      title: 'Transparent Pricing',
      description: 'Say goodbye to unpredictable SaaS bills. We provide clear, project-based pricing so you know your total cost of ownership upfront.',
    },
    {
      id: 'measurable-roi',
      title: 'Proven & Measurable ROI',
      description: 'Our process is laser-focused on solving your most expensive problems and delivering a return on investment you can measure.',
    },
  ]);
  </script>
  
  <style scoped>
  /* Scoped styles can be added here if needed, but Tailwind handles most styling. */
  </style>