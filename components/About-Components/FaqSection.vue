<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
      <p class="mt-6 max-w-2xl text-base/7 text-gray-600">Have a different question and can’t find the answer you’re looking for? Reach out to our support team by <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">sending us an email</a> and we’ll get back to you as soon as we can.</p>
      <div class="mt-20">
        <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10">
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-base/7 font-semibold text-gray-900">{{ faq.question }}</dt>
            <dd class="mt-2 text-base/7 text-gray-600">{{ faq.answer }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs =  [
  {
    "id": 1,
    "question": "How secure is my data with Saasinator?",
    "answer": "We follow strict security protocols including encryption in transit and at rest. Your data stays within your environment whenever possible, and we adhere to industry-standard compliance frameworks."
  },
  {
    "id": 2,
    "question": "How long does it take to go live?",
    "answer": "Most implementations are completed within 4–8 weeks, depending on the complexity of your workflows and integrations. We work with your internal teams to ensure deadlines are met without surprises."
  },
  {
    "id": 3,
    "question": "Will this integrate with our existing tools?",
    "answer": "Yes. Saasinator is designed to connect with CRMs, ERPs, support desks, and most other enterprise systems via API or middleware. We tailor integrations based on your stack."
  },
  {
    "id": 4,
    "question": "Do we fully own the solution once deployed?",
    "answer": "Absolutely. Unlike traditional SaaS lock-ins, our framework ensures you maintain ownership over the deployed system and your data. We simply help you build and optimize it."
  },
  {
    "id": 5,
    "question": "How does this reduce our long-term costs?",
    "answer": "By automating repetitive processes, cutting licensing fees tied to unused modules, and consolidating your software footprint. Over time, many clients see TCO reductions of 30–50%."
  },
  {
    "id": 6,
    "question": "What kind of support is available after we go live?",
    "answer": "We offer tiered support packages that include technical assistance, proactive monitoring, and strategic guidance to ensure you continue to get the most value from your system."
  }
]
</script>