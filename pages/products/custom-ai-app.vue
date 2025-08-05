<template>
  <div>
    <HeaderNav />
    <HeaderBlock />
    <ThreeBoxSection />
    <Leaders />
    <OurApproach/>
    <DeliveryProcess />
    <Bloatware />
    <Advantage/>
    <FAQ/>  
    <ctaBox />

     
     
    <FooterBlock />
  </div>
</template>

<script>
import HeaderNav from '../../../components/Global-Components/HeaderNav.vue'
import HeaderBlock from '@/components/Products-Components/CustomAIapp/HeaderBlock.vue'
import Advantage from '@/components/Products-Components/CustomAIapp/advantage.vue'
import Leaders from '@/components/Products-Components/CustomAIapp/leaders.vue'
import OurApproach from '~/components/Home-Components/Our-Approach.vue'
import Bloatware from '@/components/Products-Components/CustomAIapp/Bloatware.vue'
import DeliveryProcess from '@/components/Products-Components/CustomAIapp/DeliveryProcess.vue'
import FAQ from'@/components/Products-Components/CustomAIapp/faq.vue'
import ctaBox from'@/components/Products-Components/CustomAIapp/cta-box.vue'
import ThreeBoxSection from'@/components/Products-Components/CustomAIapp/three-box-section.vue'

 

import FooterBlock from '@/components/Global-Components/FooterBlock.vue'
 
export default {
  name: 'UnderConstructionPage',
  components: {
    HeaderNav,
    HeaderBlock,
    FooterBlock,
    DeliveryProcess,
    Bloatware,
    Advantage,
    OurApproach,
    FAQ,
    ctaBox,
    ThreeBoxSection,
    Leaders,
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
  