<template>
    <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
        <div class="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
             style="clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)" />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="text-base/7 font-semibold text-indigo-600">About Saasinator</p>
          <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Reimagining how SaaS is built</h1>
          <p class="mt-6 text-xl/8 text-gray-700">Saasinator is on a mission to help enterprises transform faster. We rebuild only what matters, break silos, and empower teams through intelligent, ownable AI agents. Our platform slashes recurring costs, accelerates rollouts, and ensures your systems adapt at the speed of change.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <!-- Founder quote -->
          <div class="relative lg:order-last lg:col-span-5">
            <svg class="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10" aria-hidden="true">
              <defs>
                <pattern id="e87443c8-56e4-4c20-9111-55b82fa704e3" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
            </svg>
            <figure class="border-l border-indigo-600 pl-8">
              <blockquote class="text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>“We're not just helping companies save costs — we're giving them the superpower to adapt, outpace disruption, and build truly intelligent operations. This is how the next decade of SaaS will be written.”</p>
              </blockquote>
              <figcaption class="mt-8 flex gap-x-4">
                <img src="https://ui-avatars.com/api/?name=Sumeet+Goenka&background=4f46e5&color=fff" alt="Sumeet Goenka avatar"
                     class="mt-1 size-10 flex-none rounded-full bg-gray-50" />
                <div class="text-sm/6">
                  <div class="font-semibold text-gray-900">Sumeet Goenka</div>
                  <div class="text-gray-600">Founder & CEO, Saasinator</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <!-- Company narrative -->
          <div class="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
            <p>Saasinator started with a simple observation: most enterprise software is bloated, rigid, and fails to evolve with the business. We decided to flip that script — by creating a platform that focuses on flexibility, ownership, and automation.</p>
            <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <CloudArrowUpIcon class="mt-1 size-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Deploy smarter.</strong> Launch features rapidly without long dev cycles. Move from concept to live rollout in days, not months.</span>
              </li>
              <li class="flex gap-x-3">
                <LockClosedIcon class="mt-1 size-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Your data, your control.</strong> Our AI agents integrate without locking you in — so you stay in charge of your stack and your future.</span>
              </li>
              <li class="flex gap-x-3">
                <ServerIcon class="mt-1 size-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Scale without the bloat.</strong> Focus on automating what truly matters to reduce costs, complexity, and technical debt.</span>
              </li>
            </ul>
            <p class="mt-8">Today, global enterprises trust Saasinator to rethink their software backbone. Whether it's connecting siloed tools or launching AI-driven workflows, we're building the future of enterprise agility — together.</p>
            <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Join us on this journey.</h2>
            <p class="mt-6">We believe the next generation of market leaders will be those who learn to adapt fastest. Saasinator is here to make sure you're one of them.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
   
  <script setup>
  import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
  </script>