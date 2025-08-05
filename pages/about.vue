<template>
  <AboutHeaderBlock />
  <AboutSecondSection />
  <VisionSection />
  <MissionSection />
   

  <CallToActionBlock />

  <FaqSection />

  <FooterBlock class="mt-16" />
</template>

<script setup>
import AboutHeaderBlock from "~/components/About-Components/AboutHeaderBlock.vue";
import AboutSecondSection from "~/components/About-Components/AboutSecondSection.vue";

 
import CallToActionBlock from "~/components/Home-Components/CallToActionBlock.vue";

import FaqSection from "~/components/About-Components/FaqSection.vue";

import FooterBlock from "~/components/Global-Components/FooterBlock.vue";
import VisionSection from "~/components/About-Components/VisionSection.vue";  
import MissionSection from "~/components/About-Components/MissionSection.vue";
 

// Blog component will be imported here after creation
</script>
