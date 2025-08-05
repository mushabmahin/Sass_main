<template>
  <div class="bg-white py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-7xl sm:text-center">
        <h2 class="text-base/7 font-semibold text-indigo-600">Key Benefits of Our AI Managed Services</h2>
        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">Accelerate AI adoption and innovation with our comprehensive solutions</p>
        </div>
    </div>
    <div class="relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
        </div>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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
</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Faster Deployment',
    description: 'Unlock new possibilities with rapid deployment of AI solutions',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Specialized Talent',
    description: 'Access to expert AI professionals through strategic sourcing',
    icon: LockClosedIcon,
  },
  {
    name: 'Optimized Maintenance',
    description: 'Continuous maintenance and support for complex AI solutions',
    icon: ArrowPathIcon,
  },
  {
    name: '24/7 Operations',
    description: 'Comprehensive support with round-the-clock monitoring',
    icon: FingerPrintIcon,
  },
  {
    name: 'Actionable Insights',
    description: 'AI-driven analytics for automated decision-making',
    icon: Cog6ToothIcon,
  },
  
]
</script>