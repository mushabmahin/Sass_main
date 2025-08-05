<template>
  <div class="flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-br from-[#f8f9fb] to-[#f3f4f8] rounded-2xl shadow-lg overflow-hidden">
    <div class="text-center mt-12 mb-8 px-4">
      <h1 class="text-4xl font-bold text-[#181c2a] mb-4">The Ultimate Outcome: A Future-Proof Technology Vision</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">The process doesn't just cut costs; it transforms your entire technology landscape into a strategic asset.</p>
    </div>

    <div class="flex space-x-4 mt-8 mb-6">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab.title"
        @click="activeTab = idx"
        :class="[
          'px-6 py-2 rounded-full font-medium transition',
          activeTab === idx
            ? 'bg-[#5b3ee4] text-white shadow'
            : 'bg-white text-[#5b3ee4] border border-[#e0e3ea] hover:bg-[#ecebfa]'
        ]"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="flex w-full flex-1 items-center justify-center">
      <div class="flex-1 flex items-center justify-center p-8">
        <div class="relative rounded-2xl bg-gradient-to-br from-[#edeaff] to-[#f6f7fb] shadow-xl border border-[#e0e3ea] w-full max-w-lg flex flex-col items-center">
          <div class="flex items-center space-x-2 h-8 px-4 bg-[#f5f6fa] rounded-t-2xl w-full border-b border-[#e0e3ea]">
            <span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          </div>
          <div class="flex-1 flex items-center justify-center w-full p-4">
            <img
              :src="tabs[activeTab].image"
              :alt="tabs[activeTab].title + ' Illustration'"
              class="rounded-lg shadow-md border border-[#e0e3ea] max-h-72 object-contain bg-white"
              style="background: linear-gradient(135deg, #f8f9fb 60%, #ecebfa 100%);"
            />
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-start justify-center p-12">
        <h2 class="text-3xl font-semibold text-[#5b3ee4] mb-4">{{ tabs[activeTab].heading }}</h2>
        <p class="text-lg text-gray-500 mb-8 max-w-md">{{ tabs[activeTab].description }}</p>
        <button class="px-6 py-3 bg-[#181c2a] text-white rounded-lg font-medium shadow hover:bg-[#23263a] transition">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = [
  {
    title: 'Optimized Stack',
    heading: 'Optimized Stack',
    description: 'We design a lean, modern tech stack that balances power and simplicity—reducing complexity, cutting costs, and enabling rapid scaling, so your systems stay fast, reliable, and ready for future growth.',
    image: '/images/apr-outcome/Stack.png',
  },
  {
    title: 'Stakeholder Alignment',
    heading: 'Stakeholder Alignment',
    description: 'We bridge the gap between IT and business leaders with clear, data-driven communication, ensuring that every decision aligns with shared goals and keeps all stakeholders informed, engaged, and empowered.',
    image: '/images/apr-outcome/alignment.png',
  },
  {
    title: 'Measurable ROI',
    heading: 'Measurable ROI',
    description: 'Every tech investment we recommend is tied to tangible, trackable results. We focus on outcomes that matter—like lower costs, higher productivity, and real business value you can see, measure, and report on.',
    image: '/images/apr-outcome/roi.png',
  },
  {
    title: 'Innovation Capital',
    heading: 'Innovation Capital',
    description: 'By optimizing spend and streamlining legacy tech, we unlock budget room for innovation—freeing resources to fund strategic growth, emerging tech, and AI initiatives that drive lasting competitive advantage.',
    image: '/images/apr-outcome/capital.png', // Reuse or replace with another if available
  },
]

const activeTab = ref(0)
</script>

<style scoped>
/* Add any custom styles if needed */
</style>