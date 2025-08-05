 <template>
  <section class=" bg-gray-50 text-gray-800 py-16 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
          Our 6-Step AI Rationalization Process
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          A proven methodology that transforms complex technology landscapes into strategic AI-native systems.
        </p>
      </div>

      <div class="relative">


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 items-stretch">
          <div v-for="(milestone, index) in milestones.slice(0, 3)" :key="index"
            class="milestone-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-start border border-gray-200">
            <div class="text-indigo-600 rounded-full flex text-2xl font-bold pb-1">{{ milestone.year }}</div>
            <h3 class="text-2xl font-semibold mb-3 text-gray-900">{{ milestone.title }}</h3>
            <p class="text-gray-700 flex-grow">{{ milestone.description }}</p>
          </div>
          <div class="hidden lg:block"></div>

          <div class="hidden lg:block"></div>
          <div v-for="(milestone, index) in milestones.slice(3)" :key="index + 3"
            class="milestone-card bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-start border border-gray-200">
            <div class="text-indigo-600 rounded-full flex text-2xl font-bold pb-1">{{ milestone.year }}</div>
            <h3 class="text-2xl font-semibold mb-3 text-gray-900">{{ milestone.title }}</h3>
            <p class="text-gray-700 flex-grow">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const milestones = ref([
  {
    year: '1',
    title: 'AI-Driven Scope',
    description: ' Identify business areas with highest ROI potential for AI transformation',
  },
  {
    year: '2',
    title: 'Intelligent Inventory',
    description: ' Auto-discover and catalog every application, including shadow IT',
  },
  {
    year: '3',
    title: 'AI-Powered Assessment',
    description: 'ML analysis of cost, usage, and business value for precise decisions',
  },
  {
    year: '4',
    title: 'Define Target State',
    description: 'Collaborate to envision an optimized, future-ready technology landscape.',
  },
  {
    year: '5',
    title: 'Implementation Plan',
    description: 'AI-optimized roadmap prioritized by impact and execution ease',
  },
  {
    year: '6',
    title: 'Continuous Monitoring',
    description: 'Ongoing AI-driven optimization for sustained portfolio health',
  },
  
]);

// Function to calculate the position of the timeline dots dynamically
const calculateDotPosition = (index) => {
  // Adjust total number of effective milestones for timeline dot calculation
  // We have 3 in the first row and the rest in the second, with blank spaces.
  // The dots should correspond to the actual milestones, not the grid cells.
  const actualMilestonesCount = milestones.value.length;
  if (actualMilestonesCount === 1) return '50%';
  let effectiveIndex = index;
  if (index >= 3) {
    effectiveIndex = 1 + (index - 3);

  }

  // To distribute dots evenly based on the *actual* number of milestones along the line
  // and consider the visual start/end of the timeline.
  // A simpler approach for dot positioning is to just use the actual index relative to the total number of milestones
  // as the line itself is continuous.
  return `calc(${index / (actualMilestonesCount - 1) * 100}% - 8px)`;
};
</script>

<style scoped>
.milestone-card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.milestone-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Remove the specific margin-top for even cards to ensure same height */
@media (min-width: 768px) {
  .milestone-card:nth-child(even) {
    margin-top: 0;
  }
}
</style>