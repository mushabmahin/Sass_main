<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div class="px-6 md:px-0 lg:pt-4 lg:pr-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-base sm:text-xl font-semibold text-indigo-600">Why Saasinator?</h2>
            <p class="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Outcomes, Not Bloat.</p>
            <p class="mt-6 text-sm sm:text-base text-gray-700">The Saasinator difference for enterprise AI transformation.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="sm:px-6 lg:px-0">
          <div class="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
            <div class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset" aria-hidden="true" />
            <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div class="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">ExampleResponse.json</div>
                    <div class="border-r border-gray-600/10 px-4 py-2">Agent.py</div>
                  </div>
                </div>
                <div class="px-6 pt-6 pb-14">
                  <!-- Code example placeholder -->
                  <pre class="text-sm text-gray-300"><code>// Your code example here</code></pre>
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import { CurrencyDollarIcon, RocketLaunchIcon, Cog6ToothIcon, KeyIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/vue/20/solid'
 
const features = [
  {
    name: '30-50% Lower IT Spend',
    description: 'Replace SaaS licenses with cost-effective AI apps.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Accelerated ROI',
    description: 'Deploy custom AI agents in weeks for rapid impact.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Tailored to Your Workflow',
    description: 'Get features tailored to your specific business value.',
    icon: Cog6ToothIcon,
  },
    {
    name: 'Own Your Innovation',
    description: 'No vendor lock-in. Full control and security.',
    icon: KeyIcon,
  },
    {
    name: 'Strategic Advisor + Implementer',
    description: 'We audit your stack and deliver high-ROI AI solutions.',
    icon: ShieldCheckIcon,
  },
    {
    name: 'Agile Alternative to Big SIs',
    description: 'A faster, outcome-driven alternative to big SIs.',
    icon: BoltIcon,
  },
]
</script>