<template>
  <div class="bg-gray-50">
    <div class="font-sans py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto">
          <h2
            class="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-2"
          >
            Ready to Create Your AI Future?
          </h2>
          <p class="mt-4 mb-10 text-lg text-gray-600">
            Choose the engagement model that best fits your immediate needs and
            long-term vision.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
        >
          <div
            class="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div class="flex justify-center mb-6">
              <div class="bg-indigo-100 rounded-full p-4">
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
                    :d="data.cards[0].iconPath"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ data.cards[0].title }}
            </h3>
            <p class="text-gray-600 mb-6 h-24">
              {{ data.cards[0].description }}
            </p>
            <button
              class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {{ data.cards[0].buttonText }}
            </button>
          </div>

          <div
            class="relative bg-white shadow-2xl p-8 text-center border-2 border-indigo-600 transform scale-105"
          >
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span
                class="bg-indigo-700 text-white text-xs font-bold px-4 py-1 uppercase"
                >{{ data.cards[1].popularLabel }}</span
              >
            </div>
            <div class="flex justify-center mb-6">
              <div class="bg-indigo-100 rounded-full p-4">
                <svg
                  class="w-8 h-8 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="data.cards[1].iconPath"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ data.cards[1].title }}
            </h3>
            <p class="text-gray-600 mb-6 h-24">
              {{ data.cards[1].description }}
            </p>
            <button
              class="w-full bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition-colors duration-300"
            >
              {{ data.cards[1].buttonText }}
            </button>
          </div>

          <div
            class="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div class="flex justify-center mb-6">
              <div class="bg-indigo-100 rounded-full p-4">
                <svg
                  class="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="data.cards[2].iconPath"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ data.cards[2].title }}
            </h3>
            <p class="text-gray-600 mb-6 h-24">
              {{ data.cards[2].description }}
            </p>
            <button
              class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {{ data.cards[2].buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStackSection",
  data() {
    return {
      data: {
        cards: [
          {
            title: "AI Discovery Workshop",
            description:
              "A 1-2 week analysis to identify high-impact savings and build a custom roadmap.",
            buttonText: "Schedule Workshop",
            iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
          },

          {
            title: "Targeted AI Replacement",
            description:
              "Focus on one high-cost SaaS tool and replace it with a custom AI agent in 4-6 weeks.",
            buttonText: "Start a Pilot",
            popularLabel: "Most Popular",
            iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          },
          {
            title: "Full Portfolio Rationalization",
            description:
              "A complete, 6-step rationalization of your entire portfolio.",
            buttonText: "Get Full Assessment",
            iconPath:
              "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.002 2.002L16 13l-4 4-4-4L11 8l4 4-4-4zm6 6l-2-2m-2-2l-2-2M13 17l4-4",
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
