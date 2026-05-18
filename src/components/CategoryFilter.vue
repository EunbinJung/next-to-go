<script setup lang="ts">
import { useRaceStore } from '../stores/raceStore';


    const raceStore = useRaceStore();

    const categories = [
        { 
            category_id: '',
            category_name: 'All'
        },
        {
            category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
            category_name: 'Greyhound'
        },
        {
            category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
            category_name: 'Harness'
        },
        {
            category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
            category_name: 'Horse'
        },
    ]

</script>

<template>
    <ul class="flex gap-3 mt-15" aria-label="Race category filter">
        <li v-for="category in categories" :key="category.category_id">
            <button 
                type="button"
                class="cursor-pointer rounded-3xl border px-4 py-2 text-base transition-colors duration-200 ease-out"
                :class="
                    raceStore.selectedCategoryId === category.category_id
                    ? 'border-transparent bg-brand-primary text-white'
                    : 'border-gray-300 text-gray-700 hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary'
                "
                @click="raceStore.setSelectedCategory(category.category_id)"
                :aria-pressed="raceStore.selectedCategoryId === category.category_id"
                >
                {{ category.category_name }}
            </button>
        </li>
    </ul>
</template>