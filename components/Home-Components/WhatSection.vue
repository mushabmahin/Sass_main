<template>
  <section
    id="features"
    aria-label="Features for running your books"
    class="relative overflow-hidden bg-blue-600 pt-10 pb-28 sm:py-32"
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
          Your Books, Powered by SaaSinator
        </h2>
        <p class="mt-6 text-xl tracking-tight text-blue-100">
          Everything you need to run your books, all handled by SaaSinator in real time.
Simple, smart, <br>and live—so you can see exactly how your business stays on track without sweating the tiny details
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
                @click="removeBorder"
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
    title: "Payroll",
    description:
      "Everything you need to run payroll in one place. Keep track of salaries and who's been paid, all inside SaaSinator. Direct deposit? Not quite yet—but who needs it when you're this organized.",
    image: "/images/screenshots/payroll.png",
  },
  {
    title: "Claim expenses",
    description:
      "All your receipts together at last. Upload them into SaaSinator and stay on top of your spend, as long as you don't mind typing in a few details yourself.",
    image: "/images/screenshots/expenses.png",
  },
  {
    title: "VAT handling",
    description:
      "We designed SaaSinator for businesses that like keeping VAT simple—meaning if you don't deal with it, we handle everything you'll ever need. Technically flawless.",
    image: "/images/screenshots/vat-returns.png",
  },
  {
    title: "Reporting",
    description:
      "Export your data to Excel and do whatever you want with it. SaaSinator keeps your books neat so your spreadsheets stay powerful (or at least mostly under control).",
    image: "/images/screenshots/reporting.png",
  },
];

const tabOrientation = ref("horizontal");

const showBorder = ref(false);

const onMediaQueryChange = ({ matches }) => {
  tabOrientation.value = matches ? "vertical" : "horizontal";
};

let lgMediaQuery;

onMounted(() => {
  lgMediaQuery = window.matchMedia("(min-width: 1024px)");
  onMediaQueryChange(lgMediaQuery);
  lgMediaQuery.addEventListener("change", onMediaQueryChange);
});

onUnmounted(() => {
  lgMediaQuery.removeEventListener("change", onMediaQueryChange);
});

 
</script>