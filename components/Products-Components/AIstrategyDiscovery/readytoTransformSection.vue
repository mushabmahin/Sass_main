<template>
  <div class="font-sans py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
          Ready to Transform Your Tech Stack?
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
      >
        <div
          class="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
        >
          <div class="flex justify-center mb-6">
            <div class="bg-teal-100 p-4">
              <svg
                class="w-8 h-8 text-teal-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Full Portfolio Rationalization
          </h3>
          <p class="text-gray-600 mb-6 h-24">
            A complete, 6-step rationalization of your entire portfolio.
          </p>
          <button
            class="w-full bg-teal-400 text-white font-bold py-3 px-6 hover:bg-teal-500 transition-colors duration-300"
          >
            Get Full Assessment
          </button>
        </div>

        <div
          class="relative bg-white shadow-2xl p-8 text-center border-2 border-teal-400 transform scale-105"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span
              class="bg-teal-400 text-white text-xs font-bold px-4 py-1 uppercase"
              >Most Popular</span
            >
          </div>
          <div class="flex justify-center mb-6">
            <div class="bg-blue-100 p-4">
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            AI Discovery Workshop
          </h3>
          <p class="text-gray-600 mb-6 h-24">
            A 1-2 week analysis to identify high-impact savings and build a
            custom roadmap.
          </p>
          <button
            class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Schedule Workshop
          </button>
        </div>

        <!-- Card 3: Targeted AI Replacement -->
        <div
          class="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
        >
          <div class="flex justify-center mb-6"></div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Targeted AI  dfdsvdReplacement
          </h3>
          <p class="text-gray-600 mb-6 h-24">
            Focus on one high-cost SaaS tool and replace it with a custom AI
            agent in 4-6 weeks.
          </p>
          <button
            class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Start a Pilot
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStackSection",
};
</script>

<style scoped></style>
