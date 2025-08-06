<template>
  <div class="relative bg-white py-16 px-6 sm:px-8 lg:px-12">
    <!-- Main content -->
    <div class="relative mx-auto max-w-7xl">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Insights
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore a range of expert-driven articles and resources designed to inform, inspire, and support your journey in achieving your goals. Stay ahead with actionable insights tailored to address industry challenges and opportunities.
        </p>
      </div>

      <!-- Content Cards Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Left Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <div class="relative h-64">
            <img src="/images/insight1.jpg" alt="SAP Leonardo: IoT and Advanced Technologies" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-gray-500">May 10, 2025</span>
              <span class="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">IoT & Tech</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 leading-tight">
              SAP Leonardo: Innovating with IoT and Advanced Technologies
            </h3>
          </div>
        </div>

        <!-- Middle Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <div class="relative h-64">
            <img src="/images/insight2.jpg" alt="Digital Commerce Solutions with SAP Commerce Cloud" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-gray-500">Apr 28, 2025</span>
              <span class="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">Commerce</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 leading-tight">
              Digital Commerce Solutions with SAP Commerce Cloud
            </h3>
          </div>
        </div>

        <!-- Right Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <div class="relative h-64">
            <img src="/images/insight3.jpg" alt="SAP Fiori: Simplifying User Experiences" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-gray-500">Mar 14, 2025</span>
              <span class="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">UX Design</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 leading-tight">
              SAP Fiori: Simplifying User Experiences in Enterprise Applications
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this presentational component
</script>

<style scoped>
/* Custom hover effects for cards */
.hover\:shadow-lg:hover {
  transform: translateY(-2px);
}
</style>
