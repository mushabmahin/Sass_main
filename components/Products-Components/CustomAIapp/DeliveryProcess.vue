<template>
    <section
      id="features"
      aria-label="Features for running your books"
      class="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <NuxtImg
        class="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src="/images/background-features.jpg"
        alt=""
        width="2245"
        height="1636"
        unoptimized
      />
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            class="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Our 4-D Delivery Process
          </h2>
          <p class="mt-6 text-xl tracking-tight text-blue-100">
            From initial idea to enterprise-wide deployment, we follow a transparent, collaborative process designed for speed and impact.
          </p>
        </div>
        <TabGroup
          as="div"
          class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          :vertical="tabOrientation === 'vertical'"
          :default-index="0"
        >
          <div
            class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
          >
            <TabList
              class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
            >
              <Tab
                v-for="(feature, featureIndex) in features"
                :key="feature.title"
                v-slot="{ selected }"
                as="template"
              >
                <div
                  :class="[
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                    selected
                      ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                      : 'hover:bg-white/10 lg:hover:bg-white/5',
                        // Ensure no default browser outline or ring on focus
                      'focus:outline-none focus:ring-0',
                  ]"
                >
                  <h3>
                    <button
                      :class="[
                        'text-xl font-semibold',
                        'font-display',
                        selected
                          ? 'text-blue-600 lg:text-white'
                          : 'text-blue-100 hover:text-white lg:text-white',
                          // Ensure no default browser outline or ring on focus for the button
                        'focus:outline-none focus:ring-0',
                      ]"
                    >
                      <span
                        class="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"
                      />
                      {{ feature.title }}
                    </button>
                  </h3>
                  <p
                    :class="[
                      'mt-2 hidden text-base text-sm lg:block',
                      selected
                        ? 'text-white'
                        : 'text-blue-100 group-hover:text-white',
                    ]"
                  >
                    {{ feature.description }}
                  </p>
                </div>
              </Tab>
            </TabList>
          </div>
          <TabPanels class="lg:col-span-7">
            <TabPanel
              v-for="feature in features"
              :key="feature.title"
              class="focus:outline-none"
            >
              <div class="relative sm:px-6 lg:hidden">
                <div
                  class="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
                />
                <p
                  class="relative mx-auto max-w-2xl text-base text-white sm:text-center"
                >
                  {{ feature.description }}
                </p>
              </div>
              <div
                class="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
              >
                <img class="w-full" :src="feature.image" alt="" />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  } from "@headlessui/vue";
  
  const features = [
    {
      title: "Discover",
      description: "We start with an intensive workshop to define the scope, map your workflows, identify data sources, and calculate potential ROI to build a solid business case.",
      image: "/images/custom-ai-app-img/deliveryProcess/discover.png", // **Update this image path**
    },
    {
      title: "Design",
      description: "We create UI/UX wireframes and a clickable prototype. This allows your stakeholders to see and feel the application before a single line of code is written.",
      image: "/images/custom-ai-app-img/deliveryProcess/design.png", // **Update this image path**
    },
    {
      title: "Develop",
      description: "Using our 70-20-10 model, our team works in agile sprints to build, test, and integrate your custom AI agent, with regular demos to ensure alignment.",
      image: "/images/custom-ai-app-img/deliveryProcess/develop.png", // **Update this image path**
    },
    {
      title: "Deploy",
      description: "We handle the full deployment to your cloud environment and provide ongoing support, monitoring, and iterative improvements to maximize value.",
      image: "/images/custom-ai-app-img/deliveryProcess/deploy.png", // **Update this image path**
    },
  ];
  
  const tabOrientation = ref("horizontal");
  
  
  let lgMediaQuery;
  
  onMounted(() => {
    lgMediaQuery = window.matchMedia("(min-width: 1024px)");
    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);
  });
  
  onUnmounted(() => {
    lgMediaQuery.removeEventListener("change", onMediaQueryChange);
  });
  
  const onMediaQueryChange = ({ matches }) => {
    tabOrientation.value = matches ? "vertical" : "horizontal";
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>