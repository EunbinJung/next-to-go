<script setup lang="ts">

</script>

<template>
    <article class="mt-5">
            <ul class="flex shadow-lg shadow-gray-100 px-10 py-3 rounded-2xl justify-between items-center border border-gray-100">
                <li>
                    <p class="font-semibold">Meeting Name</p>
                    <p class="text-sm">Venue name, State</p>
                </li>
                <li class="text-brand-primary">Race Number</li>
                <li>Timer</li>
                <li class="flex items-center">
                    <button class="cursor-pointer">
                        <img 
                            src="/public/expand_right.svg"
                            alt="Right side Icon"
                            width="25"
                        />
                    </button>
                </li>
            </ul>
        </article>
</template>