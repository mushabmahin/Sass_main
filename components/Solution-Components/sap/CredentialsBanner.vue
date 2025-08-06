<template>
  <div class="relative bg-white py-20 px-6 sm:px-8 lg:px-12">
    <!-- Background city silhouette effect -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute right-0 top-0 h-full w-1/3 opacity-5">
        <div class="h-full w-full bg-gradient-to-l from-gray-100 to-transparent"></div>
        <!-- City silhouette effect using CSS -->
        <div class="absolute bottom-0 right-0 h-32 w-32 opacity-10">
          <div class="h-full w-full bg-gray-300 rounded-t-full"></div>
        </div>
        <div class="absolute bottom-0 right-8 h-24 w-16 opacity-10">
          <div class="h-full w-full bg-gray-300 rounded-t-lg"></div>
        </div>
        <div class="absolute bottom-0 right-16 h-20 w-12 opacity-10">
          <div class="h-full w-full bg-gray-300 rounded-t-md"></div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative mx-auto max-w-7xl">
      <!-- Headline and tagline -->
      <div class="text-left mb-16 max-w-4xl mx-auto">
        <!-- Main headline -->
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Accelerate innovation and operational excellence with 
          <span class="italic text-blue-600">saasinator 's expertise</span> in <span class="italic text-blue-600">SAP solutions</span> and tech talent
        </h2>
        
        <!-- Body paragraph -->
        <p class="text-base md:text-lg text-gray-600 leading-relaxed">
          Let's start the journey towards success and enhance revenue for your business. Take your company to the next level.
        </p>
      </div>

      <!-- Company logos section -->
      <div class="mt-20">
        <p class="text-center text-gray-500 text-lg mb-10 font-medium">
          Trusted by industry leaders
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <!-- TCS -->
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center min-w-[140px] h-20 hover:shadow-md transition-all duration-300">
            <img src="/images/logos/credentials/tcs.png" alt="TCS - Tata Consultancy Services" class="h-12 w-auto max-w-full object-contain" />
          </div>

          <!-- Oracle -->
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center min-w-[140px] h-20 hover:shadow-md transition-all duration-300">
            <img src="/images/logos/credentials/oracle.jpg" alt="Oracle" class="h-12 w-auto max-w-full object-contain" />
          </div>

          <!-- SAP -->
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center min-w-[140px] h-20 hover:shadow-md transition-all duration-300">
            <img src="/images/logos/credentials/sap.jpg" alt="SAP" class="h-12 w-auto max-w-full object-contain" />
          </div>

          <!-- Sephora -->
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center min-w-[140px] h-20 hover:shadow-md transition-all duration-300">
            <img src="/images/logos/credentials/sephora.png" alt="Sephora" class="h-12 w-auto max-w-full object-contain" />
          </div>

          <!-- Salesforce -->
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center min-w-[140px] h-20 hover:shadow-md transition-all duration-300">
            <img src="/images/logos/credentials/salesforce.jpg" alt="Salesforce" class="h-12 w-auto max-w-full object-contain" />
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
/* Custom animations for hover effects */
.bg-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

/* Smooth transitions */
.bg-white {
  transition: all 0.3s ease;
}
</style> 