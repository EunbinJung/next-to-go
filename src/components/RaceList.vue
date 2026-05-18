<script setup lang="ts">
    import RaceCard from './RaceCard.vue';

    import { useRaceStore} from '../stores/raceStore';
    import { useCurrentTime } from '../composable/useCurrentTime';
    import { useFilteredRaces } from '../composable/useFilteredRaces';
    import { onMounted } from 'vue';

    const raceStore = useRaceStore();
    const { currentTime } = useCurrentTime();
    const { filteredRaces } = useFilteredRaces( currentTime )

    onMounted(() => {
        raceStore.fetchRaces()
    })


</script>

<template>
    <section class="w-full mt-6 pt-6 border-t border-gray-300" aria-labelledby="upcoming-races-heading">
        <div class="flex justify-between items-center">
            <div class="flex gap-2 text-sm font-semibold">
                <h2 id="upcoming-races-heading">Upcoming</h2>
                <p 
                    class="bg-brand-primary/40 px-2 rounded-md"
                    aria-label="Number of upcoming races"
                >{{ filteredRaces.length }}</p>
            </div>
            <div class="text-sm flex items-center gap-1">
                <img 
                    src="/public/sort_up.svg"
                    alt="Ascending Icon"
                    width="25"
                    aria-hidden="true"
                />
                <p class="text-brand-primary font-semibold">Next UP</p>
            </div>
        </div>
        <TransitionGroup
            tag="div"
            class="mt-5 space-y-4"
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
            move-class="transition-transform duration-300 ease-out"
            aria-live="polite"
        >
            <RaceCard
                v-for="race in filteredRaces"
                :key="race.race_id"
                :race="race"
                :current-time="currentTime"
            />
        </TransitionGroup>
    </section>
</template>