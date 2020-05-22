<template>
  <div id="app" class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">

    <SiteHeader class="xl:flex-shrink-0" />
 
    <div class="xl:flex xl:flex-1 xl:overflow-y-hidden">

      <SearchFilter />

      <main class="py-6 xl:flex-1 xl:overflow-x-hidden">
        <div class="px-4 ">
          <h3 class="text-gray-900 text-xl">Los Angles</h3>
          <p class="text-gray-600">Live like the stars in these luxurian Southerm California estates.</p>
        </div>

        <div class="mt-6 sm:overflow-x-auto xl:overflow-y-auto">
          <div class="px-4 sm:inline-flex sm:pb-8">
            <div v-for="(property, i) in properties" :key="i" :class="{ 'mt-10': i > 1 }" class="sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2">
              <PropertyCard :property="property" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';
import SearchFilter from '@/components/SearchFilter';
import PropertyCard from '@/components/PropertyCard';

export default {
  name: 'App',
  data() {
    return {
        properties: [
          {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            beds: 5,
            baths: 2,
            title: 'Modern home in city center',
            price: 13000,
            reviewCount: 12,
            rating: 5,
          },
          {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            beds: 12,
            baths: 45,
            title: 'Modern home in city center',
            price: 14000,
            reviewCount: 34,
            rating: 9,
          },
          {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            beds: 6,
            baths: 2,
            title: 'Modern home in city center',
            price: 77000,
            reviewCount: 34,
            rating: 6,
          },
          {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            beds: 1,
            baths: 5,
            title: 'Modern home in city center',
            price: 12000,
            reviewCount: 12,
            rating: 2,
          }
        ]
      };
  },
  components: {
    SiteHeader,
    SearchFilter,
    PropertyCard
  }
}
</script>

<style src="./assets/css/tailwind.css"></style>
