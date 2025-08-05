<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
                <h2 class="text-base/7 font-semibold text-indigo-600">Challenges</h2>
                <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Overcoming
                    AI Implementation Challenges</p>
                <p class="mt-6 text-lg/8 text-gray-700"> We address the most common obstacles organizations face in AI
                    adoption and scaling.</p>
            </div>
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pt-4 lg:pr-8">
                    <div class="lg:max-w-lg">
                        <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                            <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-indigo-600"
                                        aria-hidden="true" />
                                    {{ feature.name }}
                                </dt>
                                {{ ' ' }}
                                <dd class="inline">{{ feature.description }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <img src="/images/Manage-ai-services-challenges.png" alt="Product screenshot"
                    class=" rounded-xl mt-20 shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" width="2432"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const features = [
    {
        name: 'Lack of In-House Expertise',
        description:
            'Bridge the talent gap with our skilled AI professionals and comprehensive managed services.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Scalability Issues',
        description: 'Flexible solutions that adapt to growing organizational needs and data volumes.',
        icon: LockClosedIcon,
    },
    {
        name: 'High Implementation Costs',
        description: 'Reduce upfront costs with our proven methodologies and shared infrastructure.',
        icon: ServerIcon,
    },
    {
        name: 'Data Quality Challenges',
        description: 'Comprehensive governance frameworks and data management practices.',
        icon: ServerIcon,
    },
    {
        name: 'Operational Complexity',
        description: 'Continuous operational excellence with 24/7 monitoring and support.',
        icon: ServerIcon,
    },
    {
        name: 'Compliance Challenges',
        description: 'Navigate regulatory requirements with our specialized knowledge and frameworks.',
        icon: ServerIcon,
    },
    {
        name: 'Time Constraints',
        description: 'Faster deployment and quicker realization of ROI with our ready-to-deploy solutions.',
        icon: ServerIcon,
    },
    {
        name: 'Change Management',
        description: ' Structured assistance for seamless integration and adoption across your organization.',
        icon: ServerIcon,
    },
]
</script>