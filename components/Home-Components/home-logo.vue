 <template>
  <div class="mx-auto max-w-7xl bg-blue/20 mt-10 pb-10">
    <p class="font-display text-base text-center text-slate-900">
        Trusted by leading companies
    </p>
    <ul
      role="list"
      class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
    >
      <li v-for="(group, groupIndex) in companyGroups" :key="groupIndex">
        <ul
          role="list"
          class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
        >
          <li v-for="company in group" :key="company.name" class="flex">
            <div class="bg-slate-100 p-4 rounded-lg">
              <img :src="company.logo" :alt="company.name" class="h-10" />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>
const companyGroups = [
  [
    { name: 'Transistor', logo: '/images/logos/Client/al-futtaim.svg' },
    { name: 'Tuple', logo: '/images/logos/Client/alshaya-group.svg' },
    { name: 'StaticKit', logo: '/images/logos/Client/landmark.svg' },
  ],
  [
    { name: 'Mirage', logo: '/images/logos/Client/majid-al-futtaim.svg' },
    { name: 'Laravel', logo: '/images/logos/Client/panda.svg' },
    { name: 'Statamic', logo: '/images/logos/Client/statamic.svg' },
  ],
]
</script>