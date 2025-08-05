<template>
    <div>
      <HeaderNav />
      <HeaderBlock />
      <NumberSection />
      <Transform />
      <Benefits/>
      <CTABox/>
      <Approach />
      <Achievements />
      <Subscribe />
       
       
       
     
  
       
       
      <FooterBlock />
    </div>
  </template>
  
  <script>
  import HeaderNav from '../../../components/Global-Components/HeaderNav.vue'
  import HeaderBlock from '@/components/Products-Components/ManagedAIServices/HeaderBlock.vue'
  import NumberSection from '@/components/Products-Components/ManagedAIServices/numberSection.vue'
  import CTABox from '@/components/Products-Components/ManagedAIServices/cta-box.vue'
  import Approach from '@/components/Products-Components/ManagedAIServices/approach.vue'
  import Benefits from '@/components/Products-Components/ManagedAIServices/Benefits.vue'
  import Transform from '@/components/Products-Components/ManagedAIServices/transform.vue'
  import Achievements from  '@/components/Solution-Components/saf/achievements.vue'
  import Subscribe from  '@/components/Solution-Components/saf/subscribe.vue'
  
   
  
  import FooterBlock from '@/components/Global-Components/FooterBlock.vue'
   
  export default {
    name: 'UnderConstructionPage',
    components: {
      HeaderNav,
      HeaderBlock,
      FooterBlock,
      NumberSection,
      CTABox,
      Approach,
      Benefits,
      Transform,
      Achievements,
      Subscribe,
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
    