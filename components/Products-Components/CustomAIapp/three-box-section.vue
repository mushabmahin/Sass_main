 <template>
  <section class="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-1/4 left-1/2 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

    <div class="max-w-7xl mx-auto text-center relative z-10"> <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
        Escape the Rigidity of SaaS
      </h2>
      <p class="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
        Off-the-shelf software forces you into generic workflows. Custom AI applications give you the
        ultimate flexibility, control, and competitive advantage. Build what you need, nothing you don't.
      </p>

      <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="glass-card">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Total Control</h3>
          <p class="text-gray-600">
            No more waiting on a vendor's roadmap. You dictate the features, the UI, and the
            integrations. Your app evolves with your business, not a third-party's agenda.
          </p>
        </div>

        <div class="glass-card">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Unmatched Speed</h3>
          <p class="text-gray-600">
            Our agile 70-20-10 model allows us to deliver production-ready AI agents in 4-8
            weeks, a fraction of the time of traditional development or SaaS implementation.
          </p>
        </div>

        <div class="glass-card">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Human-Centric UI</h3>
          <p class="text-gray-600">
            We design simple, intuitive interfaces that your team will actually want to use,
            boosting adoption and eliminating the friction caused by bloated SaaS products.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SaaSControlGlassmorphismSection',
}
</script>

<style scoped>
/* Define keyframes for the blob animation */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Glassmorphism Base Styles */
.glass-card {
  /* Slightly more transparent for a clearer background blur */
  background-color: rgba(255, 255, 255, 0.2); /* Reduced opacity for more transparency */
  border-radius: 16px; /* Slightly more rounded */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15); /* Stronger, but still subtle shadow */
  backdrop-filter: blur(12px) saturate(180%); /* Increased blur and added saturation for more effect */
  -webkit-backdrop-filter: blur(25px) saturate(180%); /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Slightly more prominent light border */
  padding: 2rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, border 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  position: relative; /* Needed for z-index in case of overlapping background elements */
  z-index: 1; /* Ensure cards are above background shapes */
}

/* Hover Effects */
.glass-card:hover {
  transform: translateY(-10px) scale(1.03); /* More pronounced lift and scale */
  box-shadow: 0 12px 48px 0 rgba(0, 0, 0, 0.25); /* Stronger shadow on hover */
  background-color: rgba(255, 255, 255, 0.35); /* Slightly less transparent on hover */
  border: 1px solid rgba(255, 255, 255, 0.5); /* Border becomes slightly more defined */
}

/* Delay animations for background blobs */
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>