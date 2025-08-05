<template>
    <section class=" text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Section Title and Subtitle -->
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">From Bloatware to Bespoke AI</h2>
          <p class="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Imagine replacing your clunky, expensive SaaS tools with streamlined, intelligent agents. Here are just a few examples of what we can build for you.
          </p>
        </div>
  
        <!-- Grid for Advantage Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Loop through solutions data to create cards -->
          <div
            v-for="solution in solutions"
            :key="solution.id"
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left
                   transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <!-- No explicit icon in the provided image, so keeping it simple.
                 If icons were needed, they would go here. -->
            <h3 class="text-xl font-semibold mb-2">{{ solution.title }}</h3>
            <p class="text-gray-700">
              {{ solution.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define the solutions data as a ref, mimicking a JSON structure
  const solutions = ref([
    {
      id: 'ai-helpdesk',
      title: 'AI-Powered Internal Helpdesk',
      description: 'Replace Zendesk or Jira Service Desk. An AI agent that instantly answers employee questions, resolves IT tickets, and escalates to humans only when necessary.',
    },
    {
      id: 'financial-reporting',
      title: 'Automated Financial Reporting',
      description: 'Replace manual Excel work and expensive BI tools. An agent that connects to your data sources, generates reports, and provides natural language insights on demand.',
    },
    {
      id: 'crm-augmentation',
      title: 'Intelligent CRM Augmentation',
      description: 'Instead of replacing Salesforce, supercharge it. An AI agent that auto-summarizes sales calls, drafts follow-up emails, and updates opportunities, saving hours per day.',
    },
    {
      id: 'hr-onboarding',
      title: 'Custom HR Onboarding Agent',
      description: 'Replace a suite of HR tools. A single interface that guides new hires through paperwork, answers policy questions, and schedules introductory meetings.',
    },
    {
      id: 'inventory-management',
      title: 'Dynamic Inventory Management',
      description: 'Replace rigid ERP modules. An AI that predicts demand, suggests reorder points, and identifies supply chain risks in real-time based on live data.',
    },
    {
      id: 'contract-analysis',
      title: 'Contract Analysis Bot',
      description: 'Replace expensive legal tech seats. An agent that ingests contracts, extracts key clauses, identifies risks, and compares terms against company standards.',
    },
  ]);
  </script>
  
  <style scoped>
  /* Scoped styles can be added here if needed, but Tailwind handles most styling. */
  </style> 