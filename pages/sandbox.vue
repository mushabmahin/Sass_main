<template>
    <div class="flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-br from-[#f8f9fb] to-[#f3f4f8] rounded-2xl shadow-lg overflow-hidden">
      <!-- Top: Tab Buttons -->
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
        <!-- Left: Image/Mockup -->
        <div class="flex-1 flex items-center justify-center p-8">
          <div class="relative rounded-2xl bg-gradient-to-br from-[#edeaff] to-[#f6f7fb] shadow-xl border border-[#e0e3ea] w-full max-w-lg flex flex-col items-center">
            <!-- Browser Bar -->
            <div class="flex items-center space-x-2 h-8 px-4 bg-[#f5f6fa] rounded-t-2xl w-full border-b border-[#e0e3ea]">
              <span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            </div>
            <!-- SVG Illustration -->
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
        <!-- Right: Minimal Text -->
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
      title: 'Automations',
      heading: 'Automate your workflows',
      description: 'Create, manage, and run automations to streamline your business processes.',
      image: 'https://raw.githubusercontent.com/undraw/undraw/master/static/undraw_automation_qh5f.svg',
    },
    {
      title: 'Applications',
      heading: 'Build powerful applications',
      description: 'Design and deploy applications that empower your teams and users.',
      image: 'https://raw.githubusercontent.com/undraw/undraw/master/static/undraw_online_resume_re_ru7s.svg',
    },
    {
      title: 'Data',
      heading: 'Manage your data',
      description: 'Securely store, analyze, and visualize your business data.',
      image: 'https://raw.githubusercontent.com/undraw/undraw/master/static/undraw_data_trends_re_2cdy.svg',
    },
    {
      title: 'Agentic AI',
      heading: 'Leverage Agentic AI',
      description: 'Build, onboard and manage teams of Agents that can plan, act and orchestrate workflows.',
      image: 'https://raw.githubusercontent.com/undraw/undraw/master/static/undraw_artificial_intelligence_re_enpp.svg',
    },
  ]
   
  const activeTab = ref(0)
  </script>
   
  <style scoped>
  /* Add any custom styles if needed */
  </style>