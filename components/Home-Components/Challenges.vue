<template>
  <div 
    class="relative py-12 sm:py-16 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/images/whiteBackgroundPattern/.jpg');"
  >
    <div class="absolute inset-0 bg-white opacity-55 pointer-events-none"></div>
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-left md:text-center">
        <p class="text-base font-semibold leading-7 text-indigo-600">The Challenge</p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Are You Drowning in SaaS Bloat?
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Saasinator helps clients rebuild only what matters, cut waste, and boost automation via intelligent, ownable AI agents that address these critical pain points.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div class="space-y-10">
          <!-- High Recurring Costs -->
          <div class="flex items-start md:items-center">
            <div class="hidden bg-indigo-600 md:flex flex-shrink-0 items-center justify-center w-20 md:w-[12.23828125%] h-20 border-2 border-indigo-400 rounded-lg">
              <BanknotesIcon class="h-10 w-10 text-white" />
            </div>
            <div class="flex-1 md:ml-8">
              <div class="flex items-center">
                <BanknotesIcon class="h-6 w-6 text-indigo-600 mr-2 md:hidden" />
                <h3 class="text-2xl font-semibold text-gray-900">High Recurring Cost</h3>
              </div>
              <p class="mt-2 text-base text-gray-700">Eliminate expensive long-term lock-in</p>
              <hr class="mt-4 border-indigo-200 hidden md:block" />
            </div>
          </div>
          <!-- Siloed Tools -->
          <div class="flex items-start md:items-center">
            <div class="hidden bg-indigo-600 md:flex flex-shrink-0 items-center justify-center w-20 md:w-[21.09375%] h-20 border-2 border-indigo-400 rounded-lg">
              <CircleStackIcon class="h-10 w-10 text-white" />
            </div>
            <div class="flex-1 md:ml-8">
              <div class="flex items-center">
                <CircleStackIcon class="h-6 w-6 text-indigo-600 mr-2 md:hidden" />
                <h3 class="text-2xl font-semibold text-gray-900">Siloed Tools</h3>
              </div>
              <p class="mt-2 text-base text-gray-700">Connect disconnected systems</p>
              <hr class="mt-4 border-indigo-200 hidden md:block" />
            </div>
          </div>
          <!-- Poor UX -->
          <div class="flex items-start md:items-center">
            <div class="hidden bg-indigo-600 md:flex flex-shrink-0 items-center justify-center w-20 md:w-[28.125%] h-20 border-2 border-indigo-400 rounded-lg">
              <UserMinusIcon class="h-10 w-10 text-white" />
            </div>
            <div class="flex-1 md:ml-8">
              <div class="flex items-center">
                <UserMinusIcon class="h-6 w-6 text-indigo-600 mr-2 md:hidden" />
                <h3 class="text-2xl font-semibold text-gray-900">Poor UX</h3>
              </div>
              <p class="mt-2 text-base text-gray-700">Enhance employee engagement</p>
              <hr class="mt-4 border-indigo-200 hidden md:block" />
            </div>
          </div>
          <!-- Slow Feature Rollout -->
          <div class="flex items-start md:items-center">
            <div class="hidden bg-indigo-600 md:flex flex-shrink-0 items-center justify-center w-20 md:w-[37.5%] h-20 border-2 border-indigo-400 rounded-lg">
              <ClockIcon class="h-10 w-10 text-white" />
            </div>
            <div class="flex-1 md:ml-8">
              <div class="flex items-center">
                <ClockIcon class="h-6 w-6 text-indigo-600 mr-2 md:hidden" />
                <h3 class="text-2xl font-semibold text-gray-900">Slow Feature Rollout</h3>
              </div>
              <p class="mt-2 text-base text-gray-700">Accelerate implementation</p>
              <hr class="mt-4 border-indigo-200 hidden md:block" />
            </div>
          </div>
          <!-- Inability to Adapt -->
          <div class="flex items-start md:items-center">
            <div class="hidden bg-indigo-600 md:flex flex-shrink-0 items-center justify-center w-20 md:w-1/2 h-20 border-2 border-indigo-400 rounded-lg">
              <ArrowPathIcon class="h-10 w-10 text-white" />
            </div>
            <div class="flex-1 md:ml-8">
              <div class="flex items-center">
                <ArrowPathIcon class="h-6 w-6 text-indigo-600 mr-2 md:hidden" />
                <h3 class="text-2xl font-semibold text-gray-900">Inability to Adapt</h3>
              </div>
              <p class="mt-2 text-base text-gray-700">Quickly respond to changing needs</p>
              <hr class="mt-4 border-indigo-200 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import { BanknotesIcon, CircleStackIcon, FaceFrownIcon, ClockIcon, ArrowPathIcon, UserMinusIcon } from '@heroicons/vue/24/outline'

const challenges = [
  {
    icon: 'BanknotesIcon',
    title: 'High Recurring Cost',
    description: 'Eliminate expensive long-term lock-in',
    mdWidth: 'md:w-[12.23828125%]'
  },
  {
    icon: 'CircleStackIcon',
    title: 'Siloed Tools',
    description: 'Connect disconnected systems',
    mdWidth: 'md:w-[21.09375%]'
  },
  {
    icon: 'UserMinusIcon',
    title: 'Poor UX',
    description: 'Enhance employee engagement',
    mdWidth: 'md:w-[28.125%]'
  },
  {
    icon: 'ClockIcon',
    title: 'Slow Feature Rollout',
    description: 'Accelerate implementation',
    mdWidth: 'md:w-[37.5%]'
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Inability to Adapt',
    description: 'Quickly respond to changing needs',
    mdWidth: 'md:w-1/2'
  }
]
</script>