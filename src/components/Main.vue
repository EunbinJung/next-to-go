<script setup lang="ts">

    import { onMounted } from 'vue';
    import { fetchRaceData } from '../services/raceApi';
import CategoryFilter from './CategoryFilter.vue';
import RaceList from './RaceList.vue';

    onMounted(() => {
        fetchRaceData();
    })
</script>

<template>
    <main class="relative z-0 flex flex-col h-screen m-10">

        <img 
            src="/backgroundImg.webp"
            alt="Background Image"
            class="pointer-event-none absolute -right-8 -top-14 w-76 opacity-80 -z-10"
        />

        <h2 class="text-[3rem] font-semibold">Upcoming Races</h2>
        <CategoryFilter />
        <RaceList />

    </main>
</template>