<template>
  <HeaderNav />
  <HeaderBlock />
  <StatsBar />
  <Challenges />
 <cta-two />

  <div class="hidden md:block">
    <whySaasinator />
  </div>

  <div class="block md:hidden">
    <why-saasinator-mobile />
    <SolutionMobile />
  </div>

  <RealWorldNumber />

  <div class="hidden md:block">
    <solutions />
  </div>
  <OurApproach />
  <WhatSection />
  <CallToActionBlock />
  <home-logo />
  <AiChemistry />
  <BlogSection />
  <Chatbot />
  <FooterBlock class="mt-16" />
</template>

<script setup>

import HeaderBlock from '~/components/Home-Components/HeaderBlock.vue'
import StatsBar from '~/components/Home-Components/StatsBar'
import Challenges from '~/components/Home-Components/Challenges'
import HeaderNav from '../../../components/Global-Components/HeaderNav.vue'
import CtaTwo from '~/components/Home-Components/cta-two'
import WhySaasinator from '~/components/Home-Components/why-saasinator.vue'
import RealWorldNumber from '~/components/Home-Components/real-world-number.vue'
import CallToActionBlock from '~/components/Home-Components/CallToActionBlock.vue'
import HomeLogo from '~/components/Home-Components/home-logo.vue'

import BlogSection from '~/components/Home-Components/BlogSection.vue'
import OurApproach from '~/components/Home-Components/Our-Approach.vue'
import Solutions from '~/components/Home-Components/solutions.vue'
import WhySaasinatorMobile from '~/components/Home-Components/why-saasinator-mobile.vue'
import SolutionMobile from '~/components/Home-Components/solution-mobile.vue'
import FooterBlock from '~/components/Global-Components/FooterBlock.vue'
import AiChemistry from '~/components/Home-Components/AiChemistry.vue'
import WhatSection from '~/components/Home-Components/WhatSection.vue'
import Chatbot from '~/components/Global-Components/Chatbot.vue'

// Blog component will be imported here after creation
</script>