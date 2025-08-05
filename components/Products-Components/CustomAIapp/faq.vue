 <template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="border border-gray-200 rounded-lg bg-gray-50 px-6 py-4 shadow-sm" v-slot="{ open }">
          <dt>
            <DisclosureButton class="flex w-full items-center justify-between text-left text-gray-900">
              <span class="text-lg font-medium leading-7">{{ faq.question }}</span>
              <span class="ml-6 flex h-7 items-center">
                <ChevronDownIcon :class="[open ? 'rotate-180 transform' : '', 'size-6 text-gray-400']" aria-hidden="true" />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" class="mt-2 pr-12">
            <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const faqs = [
  {
    question: "How much does a custom AI app cost?",
    answer: "Costs vary based on complexity, but a typical 2-week pilot project starts around $15,000. Full application development projects are scoped individually, but often provide a positive ROI within 6-12 months compared to the SaaS licenses they replace.",
  },
  {
    question: 'How long does it take to build?',
    answer: "Our agile approach is built for speed. We deliver a functional pilot in just 2 weeks to prove value. A full, production-ready V1 application is typically delivered in 4-8 weeks, depending on the complexity and number of integrations required.",
  },
  {
    question: 'Who owns the intellectual property (IP)?',
    answer: " You do. 100%. All custom code and workflows we develop for your project are the exclusive intellectual property of your company. We believe in empowerment, not entrapment.",
  },
  {
    question: 'What kind of support do you offer after launch?',
    answer: "We offer flexible Managed AI Stack retainers that include ongoing monitoring, performance optimization, security updates, and a bank of hours for developing new features or making iterative improvements.",
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: "Yes, we specialize in integrating custom AI solutions with your current infrastructure, including CRMs, ERPs, databases, and third-party APIs. Our goal is to ensure seamless data flow and functionality within your existing ecosystem.",
  },
  {
    question: 'Do you provide maintenance after deployment?',
    answer: "Absolutely. Post-deployment maintenance is crucial for the long-term success of any AI application. We offer various maintenance plans that cover bug fixes, performance monitoring, security updates, and general system health checks.",
  },
  {
    question: 'What is your development process?',
    answer: "Our development process typically involves several phases: discovery and requirements gathering, detailed planning, design and prototyping, agile development sprints, rigorous testing, deployment, and ongoing support. We maintain transparent communication throughout each stage.",
  },
  {
    question: 'How do you ensure data security and privacy?',
    answer: "Data security and privacy are paramount. We adhere to industry best practices and compliance standards (e.g., GDPR, HIPAA if applicable) throughout the development lifecycle. This includes data encryption, access controls, secure coding practices, and regular security audits.",
  },
]
</script>

<style scoped>
/* No specific custom CSS needed if Tailwind is configured properly */
</style>