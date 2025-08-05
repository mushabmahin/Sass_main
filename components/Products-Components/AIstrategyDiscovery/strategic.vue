 <template>
  <div class="container mx-auto px-4 py-12 font-inter max-w-6xl">
     <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto  ">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight mb-2">
           Strategic Business Outcomes
        </h2>
        <p class="mt-4 text-lg text-gray-600">
           We focus on delivering strategic capabilities that empower large enterprises to thrive in the AI era.
        </p>
      </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-white rounded-lg p-6 flex flex-col items-start text-left"
      >
        <div class="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mb-6">
          <!-- SVG Icon for 10+ Years of AI Expertise (Star) -->
          <svg v-if="feature.id === 'ai-expertise'" class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.25l-6.188 3.25L6.938 14l-4.75-4.625 6.563-.953L12 2.5l2.25 6.188 6.563.953-4.75 4.625 1.125 6.5L12 17.25z"></path>
          </svg>

          <!-- SVG Icon for The OpenAI Advantage (Swirl/Abstract) -->
          <svg v-else-if="feature.id === 'openai-advantage'" class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
           </svg>

          <!-- SVG Icon for Seamless Third-Party Integrations (Box with connections) -->
          <svg v-else-if="feature.id === 'integrations'" class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="3" x2="12" y2="21"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
          </svg>

          <!-- SVG Icon for Powerful Analytics (Line Chart) -->
          <svg v-else-if="feature.id === 'analytics'" class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-2">
          {{ feature.heading }}
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrategicOutcomes',
  props: {
    
    features: {
      type: Array,
      default: () => [
        {
          id: 'ai-expertise',  
          heading: 'From Cost Center to Capital Source',
          description: 'Transform excessive SaaS spend into a strategic capital fund for high-priority innovation and AI-driven growth projects.'
        },
        {
          id: 'openai-advantage',  
          heading: 'Data-Driven Governance & Visibility',
          description:'Gain a single, unified view of your entire technology stack, enabling informed, data-backed decisions on spending, risk, and strategy.'
        },
        {
          id: 'integrations',  
          heading: 'Increased Operational Agility',
          description: 'Break free from rigid vendor contracts and monolithic platforms. Build a flexible, composable enterprise that adapts quickly to market changes.'
        },
        {
          id: 'analytics',  
          heading: 'Mitigated Risk & Enhanced Security',
          description: 'Eliminate redundant applications and unmonitored shadow IT, drastically reducing your organizations security vulnerabilities and compliance risks.'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>