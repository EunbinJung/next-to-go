<script setup lang="ts">

    import { type Race } from '../types/race';
    import { formatTime } from '../utils/formatTime';

    const props = defineProps<{
        race: Race
        currentTime: number
    }>()

    function getRemainingSeconds(startSeconds: number) {
        return startSeconds - props.currentTime
    }

</script>

<template>
    <article 
        class="mt-5"
        :aria-label="`${race.meeting_name}, Race ${race.race_number}`"    
    >
            <div 
                class="grid grid-cols-[1fr_1fr_1fr_80px] items-center rounded-2xl min-w-120 border border-gray-100 px-10 py-4 shadow-lg shadow-gray-100"
            >
                <div>
                    <h3 class="font-semibold">{{ race.meeting_name }}</h3>
                    <p class="text-sm text-gray-400">{{ race.venue_state }}, {{ race.venue_country }}</p>
                </div>

                <div class="text-center">
                    <p class="text-xs font-medium uppercase tracking-wide text-gray-400">Race</p>
                    <p class="text-lg font-bold text-brand-primary">
                        {{ race.race_number }}
                    </p>
                </div>
                <div class="bg-brand-mint/10 text-center rounded-lg py-2 w-35 mx-auto" aria-live="polite">
                    <p 
                        :class="
                            getRemainingSeconds(race.advertised_start.seconds) <= 0
                            ? 'text-red-400 text-sm font-semibold animate-pulse'
                            : 'text-brand-mint'
                        "
                    >{{ formatTime(getRemainingSeconds( race.advertised_start.seconds )) }}</p>
                </div>
                <div class="flex items-center">
                    <button class="cursor-pointer" :aria-label="`View details for ${race.meeting_name} Race ${race.race_number}`">
                        <img 
                            src="/public/expand_right.svg"
                            alt="Right side Icon"
                            width="25"
                        />
                    </button>
                </div>
            </div>
        </article>
</template>