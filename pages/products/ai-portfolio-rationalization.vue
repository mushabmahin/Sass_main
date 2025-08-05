<template>
  <div>
    <HeaderNav />
    <aprHeaderBlock />
    <NumberSection />
    <WhatIsProtfolio />
    <AIWays />
    <Innovation />
    <Outcome />
    <Roadmap />
    <ReadytoTransformSection />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderNav from '../../../components/Global-Components/HeaderNav.vue'
import FooterBlock from '@/components/Global-Components/FooterBlock.vue'
import aprHeaderBlock from '@/components/Products-Components/AIportfolio/aprHeaderBlock.vue'
import WhatIsProtfolio from '@/components/Products-Components/AIportfolio/what-is-AI-portfolio.vue'
import NumberSection from '@/components/Products-Components/AIportfolio/numberSection.vue'
import Outcome from '@/components/Products-Components/AIportfolio/outcomeSection.vue'
import Innovation from '~/components/Products-Components/AIportfolio/Innovation.vue'
import AIWays from '~/components/Products-Components/AIportfolio/ai-way.vue'
import Roadmap from '~/components/Products-Components/AIportfolio/Roadmap.vue'
import ReadytoTransformSection from '~/components/Products-Components/AIportfolio/readytoTransformSection.vue'

export default {
  name: 'UnderConstructionPage',
  components: {
    HeaderNav,
    FooterBlock,
    NumberSection,
    Innovation,
    AIWays,
    Roadmap,
    WhatIsProtfolio,
    ReadytoTransformSection,
    aprHeaderBlock,
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