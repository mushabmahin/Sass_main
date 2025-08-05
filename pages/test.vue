 <template>
    <section class="bg-gray-100 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Section Title and Subtitle -->
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">Designed for Enterprise Leaders</h2>
          <p class="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
           We partner with leaders who are ready to move beyond tactical fixes and build a truly strategic, AI-powered technology stack.
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
              <svg v-if="advantage.id === 'ai-native'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21h6v-1.5H9V21zm3-19C7.03 2 3 6.03 3 11c0 3.07 1.64 5.64 4.5 6.93V19a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.07C19.36 16.64 21 14.07 21 11c0-4.97-4.03-9-9-9zm3.5 15.5V18h-7v-1.5C6.16 15.09 5 13.21 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.21-1.16 4.09-3.5 5.5z"/>
              </svg>
              <svg v-else-if="advantage.id === 'strategic-partnership'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.48-1.51-5.96-4.34-.09-.52.36-.99.89-.99.44 0 .81.32.89.75.34 1.81 2.01 3.08 3.93 2.73 1.81-.34 3.08-2.01 2.73-3.93-.34-1.81-2.01-3.08-3.93-2.73-.52.09-.99-.36-.99-.89 0-.44.32-.81.75-.89 2.83-.48 5.48 1.51 5.96 4.34.48 2.83-1.51 5.48-4.34 5.96z"/>
                <path d="M11 6h2v6h-2z"/>
              </svg>
              <svg v-else-if="advantage.id === 'full-ip-ownership'" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2-9V6c0-1.1.9-2 2-2s2 .9 2 2v2H10z"/>
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
   
  const advantages = ref([
    {
      id: 'ai-native',
      title: 'The CIO Innovator',
      description: 'You have a mandate to innovate and drive efficiency. We provide the path to consolidate your tech stack and reinvest savings into high-impact AI.',
       
    },
    {
      id: 'strategic-partnership',
      title: 'The CFO Fighting Sprawl',
      description: 'You see the millions wasted on redundant SaaS. We deliver a clear ROI by replacing those costs with a fixed-price, high-value asset.',
    },
    {
      id: 'full-ip-ownership',
      title: 'The Ops Leader Hitting a Wall',
      description: 'Your teams productivity is capped by rigid tools. We build custom agents that automate your specific workflows and unlock new levels of efficiency.',
    },
    
  ]);
  </script>
  
  <style scoped>
  /* Scoped styles can be added here if needed, but Tailwind handles most styling. */
  </style>