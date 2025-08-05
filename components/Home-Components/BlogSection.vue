<template>
  <div class="bg-white py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Insights</h2>
        <p class="mt-2 text-lg/8 text-gray-600">
          Insights on AI-native apps, SaaS rationalization, and the future of enterprise software.
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.id"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
        >
          <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 size-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
            <time :datetime="post.datetime" class="mr-4">{{ post.date }}</time>
            <span v-if="post.category" class="inline-block bg-gray-800 text-gray-200 px-2 py-0.5 rounded text-xs font-medium mr-8">{{ post.category }}</span>
            <div class="-ml-4 flex items-center gap-x-4">
              <div class="flex gap-x-2.5">
                {{ post.name }}
              </div>
            </div>
          </div>
          <h3 class="mt-3 text-lg/6 font-semibold text-white">
            <a :href="post.href">
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
          </h3>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'From SaaS to Smart Agents: Why Enterprises Are Making the Shift',
    href: '#',
    description:
      'Learn how forward-thinking CIOs are replacing bloated SaaS platforms with lightweight, AI-powered agents—and cutting software costs by up to 40%.',
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    date: 'May 10, 2025',
    datetime: '2025-05-10',
    category: 'AI & SaaS',
    author: {
      name: '',
      imageUrl:
        '',
    },
  },
  {
    id: 2,
    title: 'AI Pilots that Prove ROI in 2 Weeks: The Saasinator Approach',
    href: '#',
    description:
      'Don\'t wait 12 months to see value. Discover how our 2-week pilots show real automation outcomes—using your data, your workflows, and your team.',
    imageUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    date: 'Apr 28, 2025',
    datetime: '2025-04-28',
    category: 'Automation',
    author: {
      name: 'Sana Malik',
      imageUrl:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Breaking Digital Debt: Rebuilding Enterprise Workflows with AI',
    href: '#',
    description:
      'Legacy tools create complexity and lock-in. Learn how Saasinator helps organizations escape digital debt and move toward truly agile operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    date: 'Mar 14, 2025',
    datetime: '2025-03-14',
    category: 'Enterprise AI',
    author: {
      name: 'Dinesh K.',
      imageUrl:
        'https://images.unsplash.com/photo-1502767089025-6572583495b4?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
</script> 