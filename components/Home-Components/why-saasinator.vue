<template>
    <div class="relative bg-cover bg-center bg-no-repeat py-10 sm:py-32">
      <div class="absolute inset-0 bg-white opacity-30 pointer-events-none"></div>
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div class="col-span-2">
              <p class="text-base font-semibold text-indigo-600">Why Saasinator?</p>
              <h2 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Outcomes, Not Bloat.</h2>
              <p class="mt-4 text-lg/8 text-gray-600">The Saasinator difference for enterprise AI transformation.</p>
              <img src="/images/why-Saasinator.jpg" alt="Why Saasinator" class="mt-8 rounded-xl shadow-lg">
          </div>
          <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            <div v-for="feature in features" :key="feature.name">
              <dt class="text-base/7 font-semibold text-gray-900">
                <div class="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  <component :is="feature.icon" class="size-6 text-white" aria-hidden="true" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-1 text-base/7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
   
  <script setup>
  import { BanknotesIcon, RocketLaunchIcon, Cog6ToothIcon, KeyIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/vue/24/outline'
   
  const features = [
    {
      name: '30-50% Lower IT Spend',
      description: 'Replace expensive SaaS licenses with bespoke AI apps at a fraction of the cost.',
      icon: BanknotesIcon,
    },
    {
      name: 'Accelerated ROI',
      description: 'Deploy custom AI agents in weeks, not months, delivering measurable impact fast.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Tailored to Your Workflow',
      description: 'No generic features – only what drives your specific business value.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Own Your Innovation',
      description: 'No vendor lock-in, full control over your secure, compliant AI solutions.',
      icon: KeyIcon,
    },
      {
      name: 'Strategic Advisor + Implementer',
      description: 'We audit your stack, identify high-ROI replacements, and deliver the AI alternative.',
      icon: ShieldCheckIcon,
    },
      {
      name: 'Agile Alternative to Big SIs',
      description: 'Faster, more experimental, and outcome-driven than traditional system integrators.',
      icon: BoltIcon,
    },
  ]
  </script>