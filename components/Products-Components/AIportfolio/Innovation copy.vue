<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
  
      <div class="max-w-7xl mx-auto mb-16 text-center">
        <h2 class="text-4xl font-bold text-gray-800 tracking-tight sm:text-5xl">
            Less Spend, More <span class="text-blue-600"> Innovation
        </span>
        </h2>
      </div>
  
      <div class="max-w-7xl mx-auto w-full overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-300 ease-in-out"
             :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }">
          <div v-for="card in cards" :key="card.id"
               class="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-4 box-border"
               :class="`w-full ${itemsPerPage === 1 ? '' : (itemsPerPage === 2 ? 'md:w-1/2' : 'lg:w-1/4')}`">
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
              <div :class="`bg-${card.bgColor} rounded-full p-4 mb-6`" v-html="getIcon(card.icon)">
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ card.title }}</h3>
              <p class="text-gray-600">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flex justify-center mt-16 space-x-4">
        <button @click="prevCard"
                class="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors duration-200">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>
        <button @click="nextCard"
                class="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors duration-200">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RoseTemplateComponent',
    data() {
      return {
        cards: [
          {
            id: 'Drastically Cut Costs',
            icon: 'video',
            title: 'Video Library',
            description: 'Discover our on-demand video library with webinars, event recordings, and more.',
            bgColor: 'red-100',
            textColor: 'red-500'
          },
          {
            id: 'insights',
            icon: 'insights',
            title: 'Insights',
            description: 'Get access to the latest research papers covering industry trends and innovative topics.',
            bgColor: 'blue-100',
            textColor: 'blue-500'
          },
          {
            id: 'events',
            icon: 'events',
            title: 'Events',
            description: 'Explore and join exclusive events with Reply experts and visionaries.',
            bgColor: 'yellow-100',
            textColor: 'yellow-500'
          },
          {
            id: 'area42',
            icon: 'area42',
            title: 'Area42 Labs',
            description: 'Book a virtual tour and explore Area42; get an overview of the area or a deep dive into specific research areas.',
            bgColor: 'green-100',
            textColor: 'green-500'
          },
          {
            id: 'costs',
            icon: 'costs',
            title: 'Drastically Cut Costs',
            description: 'Stop paying for redundant tools and overpriced subscriptions.',
            bgColor: 'blue-100',
            textColor: 'blue-500'
          },
          {
            id: 'complexity',
            icon: 'complexity',
            title: 'Eliminate Complexity',
            description: 'Go from hundreds of apps to an integrated, efficient system.',
            bgColor: 'blue-100',
            textColor: 'blue-500'
          },
          {
            id: 'innovation',
            icon: 'innovation',
            title: 'Unlock Innovation',
            description: 'Reinvest your savings into strategic projects that fuel growth.',
            bgColor: 'blue-100',
            textColor: 'blue-500'
          },
          {
            id: 'visibility',
            icon: 'visibility',
            title: 'Gain Total Visibility',
            description: 'Get a real-time, accurate view of your entire tech landscape.',
            bgColor: 'blue-100',
            textColor: 'blue-500'
          },
          {
            id: 'collaboration',
            icon: 'collaboration',
            title: 'Improve Collaboration',
            description: 'Align business and tech teams with data everyone trusts.',
            bgColor: 'blue-100',
            textColor: 'blue-500'
          },
          {
            id: 'training',
            icon: 'training',
            title: 'Reduce Training',
            description: 'Fewer apps mean less time and money spent on user training.',
            bgColor: 'blue-100',
            textColor: 'blue-500'
          }
        ],
        currentIndex: 0,
        itemsPerPage: 4 // Default for large screens
      };
    },
    methods: {
      getIcon(iconName) {
        // This method returns the SVG string for each icon based on its name
        switch (iconName) {
          case 'video':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.118l-3.397-2.132A1 1 0 0010 9.735v4.53c0 .804.924 1.255 1.626.786l3.397-2.132a1 1 0 000-1.572z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>`;
          case 'insights':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"></path>
                    </svg>`;
          case 'events':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>`;
          case 'area42':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>`;
          case 'costs':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V3m0 5v12m0-12c-1.11 0-2.08-.402-2.592-1M12 20v-5m0 0c-1.11 0-2.08.402-2.592 1M12 15c1.11 0 2.08-.402 2.592-1"></path>
                    </svg>`;
          case 'complexity':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.324 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.324-1.118L2.923 9.091c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"></path>
                    </svg>`;
          case 'innovation':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                    </svg>`;
          case 'visibility':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>`;
          case 'collaboration':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m3-3h.01M21 12h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 12H4m16 0a2 2 0 11-4 0 2 2 0 014 0zM12 6a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>`;
          case 'training':
            return `<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v5m-7 1h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zm0 0h.01"></path>
                    </svg>`;
          default:
            return '';
        }
      },
      nextCard() {
        if (this.currentIndex < this.cards.length - this.itemsPerPage) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0; // Loop back to the beginning
        }
      },
      prevCard() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.cards.length - this.itemsPerPage; // Loop to the end
        }
      },
      updateItemsPerPage() {
        if (window.innerWidth >= 1024) { // lg breakpoint
          this.itemsPerPage = 4;
        } else if (window.innerWidth >= 768) { // md breakpoint
          this.itemsPerPage = 2;
        } else { // sm and below
          this.itemsPerPage = 1;
        }
        // Ensure currentIndex doesn't go out of bounds after resize
        if (this.currentIndex + this.itemsPerPage > this.cards.length) {
          this.currentIndex = Math.max(0, this.cards.length - this.itemsPerPage);
        }
      }
    },
    mounted() {
      this.updateItemsPerPage(); // Set initial itemsPerPage
      window.addEventListener('resize', this.updateItemsPerPage); // Update on resize
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateItemsPerPage); // Clean up event listener
    }
  };
  </script>
  
  <style>
  /* You can add custom styles here if needed, but Tailwind CSS is preferred */
  /* Ensure Inter font is loaded if you want to match the original image's font */
  @import url('https://rsms.me/inter/inter.css');
  
  body {
    font-family: 'Inter', sans-serif;
  }
  
  /* Custom styling for the card container to enable horizontal scrolling effect */
  .grid-cols-1.md\:grid-cols-2.lg\:grid-cols-4 {
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping */
  }
  
  /* Adjust card width for sliding effect */
  .grid-cols-1.md\:grid-cols-2.lg\:grid-cols-4 > div {
    flex: 0 0 auto; /* Prevent shrinking/growing */
  }
  </style>