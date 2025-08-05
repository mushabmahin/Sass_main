<template>
  <div 
    class="bg-gray-900 py-24 sm:py-32 relative"
    style="background-image: url('/images/BannerImg/dark-picton-blue-background.jpg'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Real-World Efficiency Improvements</h2>
          <p class="mt-4 text-lg/8 text-gray-300">Unlock dramatic cost and time savings by replacing expensive SaaS with custom AI solutions.</p>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-white/10 p-8">
            <dt class="text-sm/6 font-semibold text-gray-300">{{ stat.name }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { id: 1, name: 'Cost Reduction', value: '90%' },
  { id: 2, name: 'Time Saved', value: '75%' },
  { id: 3, name: 'Manual Processing', value: '60%' },
]
</script>