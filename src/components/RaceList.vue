<script setup lang="ts">
import RaceCard from './RaceCard.vue';

</script>

<template>
    <section class="w-full mt-6 pt-6 border-t border-gray-300">
        <div class="flex justify-between items-center">
            <div class="flex gap-2 text-sm font-semibold">
                <p>Upcoming</p>
                <p class="bg-brand-primary/40 px-2 rounded-md">5</p>
            </div>
            <div class="text-sm flex items-center gap-1">
                <img 
                    src="/public/sort_up.svg"
                    alt="Ascending Icon"
                    width="25"
                />
                <p class="text-brand-primary font-semibold">Next UP</p>
            </div>
        </div>
        <RaceCard />
    </section>
</template>