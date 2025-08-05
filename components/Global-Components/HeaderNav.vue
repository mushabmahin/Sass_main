<template>
  <header class="sticky top-0 isolate z-30 bg-white shadow">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">saasinator</span>
          <span
            class="font-bold text-3xl tracking-tight text-indigo-700 drop-shadow-sm select-none"
            >saasinator</span
          >
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover>
          <PopoverButton
            class="flex items-center gap-x-1 text-lg/4 font-semibold text-gray-900"
          >
            Industries
            <ChevronDownIcon class="size-5" aria-hidden="true" />
          </PopoverButton>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <PopoverPanel
              class="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5"
            >
              <div
                class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:px-8"
              >
                <div class="grid grid-cols-4 gap-x-6 sm:gap-x-8">
                  <div>
                    <div class="mt-6 flow-root">
                      <div class="-my-2">
                        <NuxtLink
                          v-for="item in industries"
                          :key="item.name"
                          :to="item.href"
                          class="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                          active-class="!text-primary-600 !font-bold"
                        >
                          <component
                            :is="item.icon"
                            class="size-6 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="mt-6 flow-root">
                      <div class="-my-2">
                        <NuxtLink
                          v-for="item in eduction"
                          :key="item.name"
                          :to="item.href"
                          class="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                        >
                          <component
                            :is="item.icon"
                            class="size-6 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="mt-6 flow-root">
                      <div class="-my-2">
                        <NuxtLink
                          v-for="item in manufacturing"
                          :key="item.name"
                          :to="item.href"
                          class="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                        >
                          <component
                            :is="item.icon"
                            class="size-6 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="mt-6 flow-root">
                      <div class="-my-2">
                        <NuxtLink
                          v-for="item in restaurants"
                          :key="item.name"
                          :to="item.href"
                          class="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                        >
                          <component
                            :is="item.icon"
                            class="size-6 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <Popover>
          <PopoverButton
            class="flex items-center gap-x-1 text-lg/4 font-semibold text-gray-900"
          >
            Solutions
            <ChevronDownIcon class="size-5" aria-hidden="true" />
          </PopoverButton>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <PopoverPanel
              class="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5"
            >
              <div
                class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:px-8"
              >
                <div class="grid grid-cols-3 gap-x-6 sm:gap-x-8">
                  <div>
                    <h3 class="text-lg/2 font-medium text-gray-800">
                      Functional Area
                    </h3>
                    <div class="mt-6 flow-root">
                      <div class="-my-2">
                        <NuxtLink
                          v-for="item in functionalarea"
                          :key="item.name"
                          :to="item.href"
                          class="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                        >
                          <component
                            :is="item.icon"
                            class="size-6 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg/2 font-medium text-gray-800">
                      Vendor Platforms
                    </h3>
                    <div class="mt-6 flow-root">
                      <div class="-my-2">
                        <NuxtLink
                          v-for="item in platforms"
                          :key="item.name"
                          :to="item.href"
                          class="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900"
                        >
                          <component
                            :is="item.icon"
                            class="size-6 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                  <h3 class="sr-only">Recent posts</h3>
                  <article
                    v-for="post in recentPosts"
                    :key="post.id"
                    class="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                  >
                    <div class="relative flex-none">
                      <img
                        class="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-video sm:h-32 lg:h-auto"
                        :src="post.imageUrl"
                        alt=""
                      />
                      <div
                        class="absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset"
                      />
                    </div>
                    <div>
                      <div class="flex items-center gap-x-4">
                        <time
                          :datetime="post.datetime"
                          class="text-sm/6 text-gray-600"
                          >{{ post.date }}</time
                        >
                        <NuxtLink
                          :to="post.category.href"
                          class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                          >{{ post.category.title }}</NuxtLink
                        >
                      </div>
                      <h4 class="mt-2 text-sm/6 font-semibold text-gray-900">
                        <NuxtLink :to="post.href">
                          <span class="absolute inset-0" />
                          {{ post.title }}
                        </NuxtLink>
                      </h4>
                      <p class="mt-2 text-sm/6 text-gray-600">
                        {{ post.description }}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <Popover>
          <PopoverButton
            class="flex items-center gap-x-1 text-lg/4 font-semibold text-gray-900"
          >
            Products

            <ChevronDownIcon
              class="size-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <PopoverPanel
              class="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5"
            >
              <div
                class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8"
              >
                <NuxtLink
                  v-for="item in products"
                  :key="item.name"
                  :to="item.href"
                  class="group relative rounded-lg p-6 text-sm/6 leading-relaxed hover:bg-gray-50"
                  active-class="!text-primary-600 !font-bold"
                >
                  <div
                    class="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="size-6 text-gray-600 group-hover:text-indigo-600 leading-relaxed"
                      aria-hidden="true"
                    />
                  </div>
                  <span class="mt-6 block font-semibold text-gray-900">
                    {{ item.name }}
                    <span class="absolute inset-0" />
                  </span>
                  <p class="mt-1 text-gray-600">{{ item.description }}</p>
                </NuxtLink>
              </div>
              <div class="bg-gray-50">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                    class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5"
                  >
                    <NuxtLink
                      v-for="item in callsToAction"
                      :key="item.name"
                      :to="item.href"
                      class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      <component
                        :is="item.icon"
                        class="size-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <NuxtLink to="/about" class="text-lg/6 font-semibold text-gray-900" active-class="!text-primary-600 !font-bold">
          About Us</NuxtLink
        >

        <NuxtLink to="/contact" class="text-lg/6 font-semibold text-gray-900"
          >Insights
        </NuxtLink>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-4 py-2 text-lg/6 font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Contact Us <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  How we Serv
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'size-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products, ...callsToAction]"
                    :key="item.name"
                    as="template"
                    :href="item.href"
                  >
                    <NuxtLink
                      :to="item.href"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >{{ item.name }}</NuxtLink
                    >
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Solutions
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'size-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...functionalarea, ...platforms]"
                    :key="item.name"
                    as="template"
                    :href="item.href"
                  >
                    <NuxtLink
                      :to="item.href"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      active-class="!text-primary-600 !font-bold"
                      >{{ item.name }}</NuxtLink
                    >
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Marketplace</NuxtLink
              >
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Company</NuxtLink
              >
            </div>
            <div class="py-6">
              <NuxtLink
                to="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Log in</NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/vue/20/solid";
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/vue/24/outline";

// Nav items for header
const products = [
  {
    name: "AI Strategy & Advisory",
    description:
      " Strategic advisory, roadmap & workshops to drive AI-native change.",
    href: "/products/ai-strategy-discovery",
    icon: FingerPrintIcon,
  },
  {
    name: "AI Portfolio Rationalization",
    description:
      "Audit SaaS, cut waste, build lean AI alternatives, boost ROI...",
    href: "/products/ai-portfolio-rationalization",
    icon: ChartPieIcon,
  },
  {
    name: " Custom AI App",
    description:
      "Bespoke AI agents replace SaaS for tailored, cost-effective workflows...",
    href: "/products/custom-ai-app",
    icon: CursorArrowRaysIcon,
  },

  {
    name: "Managed AI Services",
    description:
      "Support, maintenance & architecture advisory for custom AI solutions...",
    href: "/products/managed-ai-services",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

const industries = [
  { name: "Retail", href: "#", icon: UsersIcon },
  { name: "Automotive", href: "#", icon: BriefcaseIcon },
  { name: "Communications", href: "#", icon: VideoCameraIcon },
  { name: "Construction and Engineering", href: "#", icon: BriefcaseIcon },
  { name: "Consumer Packaged Goods", href: "#", icon: UsersIcon },
  { name: "Defense and Intelligence", href: "#", icon: ShieldCheckIcon },
];
const restaurants = [
  { name: "Restaurants", href: "#", icon: UsersIcon },
  { name: "Travel and Logistics", href: "#", icon: GlobeAltIcon },
  { name: "Utilities", href: "#", icon: InformationCircleIcon },
  { name: "Wholesale Distribution", href: "#", icon: BriefcaseIcon },
];
const eduction = [
  { name: "Education", href: "#", icon: BookOpenIcon },
  { name: "Financial Services", href: "#", icon: ChartPieIcon },
  { name: "Government", href: "#", icon: GlobeAltIcon },
  { name: "Healthcare", href: "#", icon: ShieldCheckIcon },
  { name: "High Technology", href: "#", icon: InformationCircleIcon },
  { name: "Hospitality", href: "#", icon: UsersIcon },
];

const manufacturing = [
  { name: "Life Sciences", href: "#", icon: ShieldCheckIcon },
  { name: "Media and Entertainment", href: "#", icon: VideoCameraIcon },
  { name: "Oil and Gas", href: "#", icon: BriefcaseIcon },
  { name: "Professional Services", href: "#", icon: UserGroupIcon },
  { name: "Public Safety", href: "#", icon: ShieldCheckIcon },
];

const functionalarea = [
  { name: "HR & Workforce", href: "#", icon: UserGroupIcon },
  { name: "Finance & Accounting", href: "#", icon: GlobeAltIcon },
  { name: "Logistics & Supply Chain", href: "#", icon: BookOpenIcon },
  { name: "Customer Management (CRM)", href: "#", icon: VideoCameraIcon },
  { name: "Data & Analytics", href: "#", icon: VideoCameraIcon },
  { name: "IT Infrastructure & Security", href: "#", icon: VideoCameraIcon },
];

const platforms = [
  { name: "SAP", href: "#", icon: UserGroupIcon },
  { name: "Oracle", href: " #", icon: GlobeAltIcon },
  { name: "Microsoft", href: "#", icon: BookOpenIcon },
  { name: "Salesforce", href: "#", icon: BookOpenIcon },
  { name: "Snowflake", href: "#", icon: GlobeAltIcon },
  { name: "Databricks", href: "#", icon: VideoCameraIcon },
];
const recentPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Marketing", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    description:
      "Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.",
  },
];

const mobileMenuOpen = ref(false);
</script>
