<script setup lang="ts">

    const categories = [
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
    <ul class="flex gap-3 mt-15">
        <li v-for="category in categories" :key="category.category_id">
            <button 
                type="button" 
                class="border border-gray-400 cursor-pointer px-4 py-2 rounded-3xl text-md hover:bg-brand-primary/30 hover:border-transparent hover:text-white transition-colors duration-200 ease-in-out"
                @click=""
                >
                {{ category.category_name }}
            </button>
        </li>
    </ul>
</template>