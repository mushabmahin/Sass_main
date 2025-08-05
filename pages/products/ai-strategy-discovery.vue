<template>
  <div>
    <HeaderNav />
    <HeaderBlock />
    <Innovation />
    <WhySection/>
    <CallToActionBlock/>
    <AIWays/>
    <Roadmap />
    <Strategic />
    <ReadytoTransformSection />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderNav from '../../../components/Global-Components/HeaderNav.vue'
import HeaderBlock from '@/components/Products-Components/AIstrategyDiscovery/HeaderBlock.vue'
import AIWays from '@/components/Products-Components/AIstrategyDiscovery/ai-way.vue'
import Innovation from '@/components/Products-Components/AIstrategyDiscovery/Innovation.vue'
import WhySection from '~/components/Products-Components/AIstrategyDiscovery/Why.vue'
import Roadmap from '~/components/Products-Components/AIstrategyDiscovery/Roadmap.vue'
import WhatIsProtfolio from '@/components/Products-Components/AIportfolio/what-is-AI-portfolio.vue'
import Outcome from '@/components/Products-Components/AIportfolio/outcomeSection.vue'
import Strategic from '@/components/Products-Components/AIstrategyDiscovery/strategic.vue'
import ReadytoTransformSection from '~/components/Products-Components/AIportfolio/readytoTransformSection.vue'
import CallToActionBlock from '~/components/Home-Components/CallToActionBlock.vue'

import FooterBlock from '@/components/Global-Components/FooterBlock.vue'
 
export default {
  name: 'UnderConstructionPage',
  components: {
    HeaderNav,
    HeaderBlock,
    FooterBlock,
    AIWays,
    WhySection,
    Innovation,
    Strategic,
    Roadmap,
    WhatIsProtfolio,
    ReadytoTransformSection,
    CallToActionBlock,
     
    Outcome,
  }
}
</script>

<style scoped>
 
.crane-arm-group {
   transform-origin: 100px 75px;
  /* Apply the animation */
  animation: swing-crane 4s ease-in-out infinite;
}
@keyframes swing-crane {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
/* Ensure the font is loaded if not globally available */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>
  