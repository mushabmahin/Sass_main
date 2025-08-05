<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <div class="text-blue-700 font-semibold mb-2 text-lg">FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Any Questions? Look Here</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="faq in faqs" :key="faq.question" class="flex items-start bg-white rounded-xl shadow-lg p-6">
          <div class="flex-shrink-0">
            <div class="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-lg mr-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 8a2 2 0 0 1 2 2c0 1-2 2-2 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ faq.question }}</h3>
            <p class="text-gray-500">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: "What is Saasinator?",
    answer:
      "Saasinator is an AI-native, services-led integrator on a mission to redefine enterprise IT. We replace bloated, expensive SaaS platforms with custom-built, lightweight AI applications perfectly tailored to your business workflows, delivering real ROI.",
  },
  {
    question: "What problem does Saasinator solve?",
    answer:
      "We address the common frustrations of CIOs and CFOs: high recurring SaaS costs, software bloat, lack of agility, and the struggle to effectively leverage GenAI. We offer a path to modernization and significant cost savings.",
  },
  {
    question: "How is Saasinator different from traditional SaaS vendors or system integrators?",
    answer:
      "We are not a SaaS vendor, nor just a dev shop. We are a services-led 'SI for AI,' combining deep business domain expertise with cutting-edge AI delivery. Our focus is on verifiable ROI, speed, and security, blending strategic advice with rapid implementation.",
  },
   
]
</script>