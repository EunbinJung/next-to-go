<script setup lang="ts">

    import CategoryFilter from './CategoryFilter.vue';
    import RaceList from './RaceList.vue';

</script>

<template>
    <main class="relative z-0 flex-1 flex-col m-10">

        <img 
            src="/backgroundImg.webp"
            alt="Background Image"
            class="pointer-events-none absolute -right-8 -top-14 w-76 opacity-80 -z-10"
            aria-hidden="true"
        />

        <h2 class="text-[3rem] font-semibold">Upcoming Races</h2>
        <CategoryFilter />
        <RaceList />

    </main>
</template>