<template>
  <!-- Footer -->
  <footer id="contact" class="bg-[#181C2A] text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="mb-8 md:mb-0">
          <h3 class="text-2xl font-bold mb-4"><NuxtLink to="/">Saasinator</NuxtLink></h3>
          <p class="text-gray-400 mb-4">Unshackling the enterprise from SaaS bloat.</p>
          <p class="text-sm text-gray-500">Saasinator is a Yallo Group initiative.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#benefits" class="text-gray-400 hover:text-white">Benefits</a></li>
            <li><a href="#approach" class="text-gray-400 hover:text-white">Our Approach</a></li>
            <li><a href="#cases" class="text-gray-400 hover:text-white">Use Cases</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-white">Services</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="space-y-2">
            <li class="flex items-center">
              <!-- Envelope Icon -->
              <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v16H4V4zm0 0l8 8 8-8"/></svg>
              <a href="mailto:hello@saasinator.ai" class="text-gray-400 hover:text-white">hello@saasinator.ai</a>
            </li>
            <li class="flex items-center">
              <!-- Phone Icon -->
              <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 0v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2z"/></svg>
              <a href="tel:+18005550123" class="text-gray-400 hover:text-white">+1-800-555-0123</a>
            </li>
            <li class="flex items-start">
              <!-- Map Marker Icon -->
              <svg class="w-5 h-5 mr-2 mt-1 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1116 0c0 4.97-3.582 9-8 9zm0-11a2 2 0 100 4 2 2 0 000-4z"/></svg>
              <span class="text-gray-400">Dubai | Bangalore | London</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Request Analysis</h4>
          <form>
            <div class="mb-4">
              <input type="email" placeholder="Your Email" class="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md w-full">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
        <p>© 2024 Saasinator. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script> 