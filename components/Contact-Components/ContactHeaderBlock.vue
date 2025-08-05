<template>
    <div class="relative bg-white overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/images/BannerImg/Background-blue-wave.jpg');">
      <div class="absolute inset-0 -z-10">
        <div class="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-purple-200 via-pink-100 to-white opacity-80 blur-2xl animate-gradient-move"></div>
      </div>
      <HeaderNav/>
      <HeaderHero />
    </div>
  </template>
  
  <script setup>
  import HeaderNav from '../Global-Components/HeaderNav.vue'
  import HeaderHero from './ContactHero.vue'
  </script>
  
  <style scoped>
  @keyframes gradient-move {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  .animate-gradient-move {
    background-size: 200% 200%;
    animation: gradient-move 12s ease-in-out infinite;
  }
  </style>
  