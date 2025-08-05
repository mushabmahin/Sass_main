<template>
  <section class="py-20 px-4 flex flex-col items-center justify-center font-sans">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Old Way vs New Way</h2>

    <div class="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="grid grid-cols-[1.5fr_2.5fr_2.5fr] py-4 px-5 bg-blue-600 text-white font-bold text-lg rounded-t-xl">
        <div class="col-span-1">Aspect</div>
        <div class="col-span-1">Traditional SaaS Approach</div>
        <div class="col-span-1">AI-Native Strategy</div>
      </div>

      <div v-for="(item, index) in comparisonData" :key="index"
           class="grid grid-cols-[1.5fr_2.5fr_2.5fr] py-4 px-5 border-b border-gray-200 last:border-b-0 items-center text-left">
        <div class="font-semibold text-gray-700">{{ item.aspect }}</div>
        <div :class="item.traditionalClass" class="font-medium">{{ item.traditional }}</div>
        <div :class="item.aiNativeClass" class="font-medium">{{ item.aiNative }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OldWayNewWayTailwind',
  data() {
    return {
      comparisonData: [
        {
          aspect: 'Cost Structure',
          traditional: '$18M wasted annually on unused licenses',
          traditionalClass: 'text-amber-500',
          aiNative: '30-50% lower IT spend with custom AI',
          aiNativeClass: 'text-green-600'
        },
        {
          aspect: 'Implementation Speed',
          traditional: 'Months to years for deployment',
          traditionalClass: 'text-amber-500',
          aiNative: 'Weeks to demonstrate ROI',
          aiNativeClass: 'text-green-600'
        },
        {
          aspect: 'Customization',
          traditional: '$700-900K per $100K platform spend',
          traditionalClass: 'text-amber-500',
          aiNative: 'Build-to-fit solutions from day one',
          aiNativeClass: 'text-green-600'
        },
        {
          aspect: 'Data Integration',
          traditional: 'Siloed, fragmented workflows',
          traditionalClass: 'text-amber-500',
          aiNative: 'Unified, intelligent system',
          aiNativeClass: 'text-green-600'
        },
        {
          aspect: 'Strategy Clarity',
          traditional: 'Reactive, periodic audits',
          traditionalClass: 'text-amber-500',
          aiNative: 'Proactive, continuous optimization',
          aiNativeClass: 'text-green-600'
        },
        {
          aspect: 'Innovation Focus',
          traditional: 'Managing complex SaaS stack',
          traditionalClass: 'text-amber-500',
          aiNative: 'Strategic AI-driven initiatives',
          aiNativeClass: 'text-green-600'
        }
      ]
    };
  }
};
</script>

<style scoped>
/*
 

/* Basic responsiveness for smaller screens (optional, but good practice) */
@media (max-width: 768px) {
  .grid-cols-\[1\.5fr_2\.5fr_2\.5fr\] {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
  }

  /* Hide header on small screens if desired */
  .table-header-mobile-hidden {
    display: none;
  }
}
</style>