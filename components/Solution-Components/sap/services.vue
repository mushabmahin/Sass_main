<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div>
        <h2 class="text-base/7 font-semibold text-indigo-600">Our Services</h2>
        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          SAP Solutions & Services
        </p>
        <p class="mt-6 text-lg/8 text-gray-700">
          Comprehensive SAP services to drive your business transformation and digital innovation.
        </p>
      </div>
      
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-16">
        <!-- Card 1: TS/EA as a Service -->
        <div class="card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
          <span class="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 9V15" />
              <path d="M9 12H15" />
            </svg>
          </span>
          <h4>TS/EA as a Service</h4>
          <p>
            Empowering Business Transformation with Expert Technology Strategy
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>
              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>
              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>

        <!-- Card 2: Talent in a Box -->
        <div class="card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
          <span class="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </span>
          <h4>Talent in a Box</h4>
          <p>
            Scaling Innovation with World-Class Talent
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>
              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>
              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>

        <!-- Card 3: Managed IT CoE -->
        <div class="card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
          <span class="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 9V15" />
              <path d="M9 12H15" />
              <path d="M18 3L21 6L18 9" />
              <path d="M6 3L3 6L6 9" />
            </svg>
          </span>
          <h4>Managed IT CoE</h4>
          <p>
            Delivering Seamless IT Operations at Scale
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>
              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>
              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Function to handle mouse movement on the card
const handleMouseMove = (event) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const xc = rect.width / 2;
  const yc = rect.height / 2;

  const dx = x - xc;
  const dy = y - yc;

  const rx = dy / yc;
  const ry = dx / xc;

  card.style.setProperty('--x', ry);
  card.style.setProperty('--y', rx);
  card.style.setProperty('--xp', (x / rect.width) * 100);
  card.style.setProperty('--yp', (y / rect.height) * 100);
  card.style.setProperty('--active', 1);
};

// Function to handle mouse leaving the card
const handleMouseLeave = (event) => {
  const card = event.currentTarget;
  card.style.setProperty('--active', 0);
  card.style.setProperty('--x', 0);
  card.style.setProperty('--y', 0);
  card.style.setProperty('--xp', 50);
  card.style.setProperty('--yp', 50);
};
</script>

<style>
/* Animation variables */
:root {
  --_r: 0;
  --_g: 0;
  --_b: 0;
  --active: 0;
  --x: 0;
  --y: 0;
  --xp: 50;
  --yp: 50;
  --r: var(--_r);
  --g: var(--_g);
  --b: var(--_b);
}

/* Define custom properties for animation */
@property --r {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}
@property --g {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}
@property --b {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}
@property --active {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}
@property --x {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}
@property --y {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}
@property --xp {
  syntax: '<number>';
  initial-value: 50;
  inherits: true;
}
@property --yp {
  syntax: '<number>';
  initial-value: 50;
  inherits: true;
}

/* Card styles with original styling but added animations */
.card {
  --r: 59; /* Blue color for cards */
  --g: 130;
  --b: 246;

  position: relative;
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform-style: preserve-3d;
  perspective: 800px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: rotateX(calc(var(--y) * 15deg)) rotateY(calc(var(--x) * -15deg)) scale(1);
  will-change: transform;

  border: 1px solid;
  border-image-slice: 1;
  border-image-source: radial-gradient(
    circle at calc(var(--xp) * 1%) calc(var(--yp) * 1%),
    rgb(var(--r) var(--g) var(--b) / calc(var(--active) * 0.5)),
    transparent 50%
  );
}

.card:hover {
  transform: rotateX(calc(var(--y) * 10deg)) rotateY(calc(var(--x) * -10deg)) scale(1.03);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card .icon {
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  background: rgb(var(--r) var(--g) var(--b) / 0.1);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  color: rgb(var(--r) var(--g) var(--b));
}

.card:hover .icon {
  transform: translateY(calc(var(--active) * -5px));
}

.card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0;
  color: #111827; /* Dark gray heading */
}

.card p {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #6b7280; /* Medium gray text */
}

.card .shine {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at calc(var(--xp) * 1%) calc(var(--yp) * 1%),
    rgb(var(--r) var(--g) var(--b) / calc(var(--active) * 0.5)),
    transparent 50%
  );
  opacity: calc(var(--active) * 1);
  transition: opacity 0.3s ease;
  z-index: 1;
}

.card .background {
  position: absolute;
  inset: 0;
  z-index: 0;
  transform: rotateX(calc(var(--y) * 45deg)) rotateY(calc(var(--x) * -45deg)) translateZ(-100px) scale(2);
  transition: transform 0.3s ease;
  opacity: calc(var(--active) * 1);
}

.card .tiles {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.25rem;
  opacity: 0.1;
}

.card .tile {
  background: rgb(var(--r) var(--g) var(--b));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .tile {
  opacity: 1;
}

.card .line {
  position: absolute;
  background: rgb(var(--r) var(--g) var(--b) / 0.2);
  transition: transform 0.3s ease;
}

.card .line-1 {
  width: 100%;
  height: 0.25rem;
  top: 33.33%;
  transform: translateY(-50%) scaleX(calc(1 - var(--active)));
}
.card .line-2 {
  width: 100%;
  height: 0.25rem;
  top: 66.66%;
  transform: translateY(-50%) scaleX(calc(1 - var(--active)));
}
.card .line-3 {
  height: 100%;
  width: 0.25rem;
  left: 50%;
  transform: translateX(-50%) scaleY(calc(1 - var(--active)));
}
</style>