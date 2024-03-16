<template>
  <NuxtLink
    class="flex items-center gap-4 group p-2 -m-2 rounded-lg"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="max-w-m">
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ project.name }}
      </h3>
      <p class="text-gray-400 text-sm">{{ project.description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-50 dark:border-gray-50 group-hover:border-gray-50"
    ></div>
    <UAvatar
      :src="project.thumbnail"
      :ui="{ rounded: 'rounded z-10 relative' }"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
  <!-- Badges -->
  <div class="flex gap-2 items-center">
      <p class="text-gray-600 dark:text-gray-400 text-sm">Techs/skills:</p>
      <span class="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs">{{ project.tech1 }}</span>
      <span class="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs">{{ project.tech2 }}</span>
      <span class="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs">{{ project.tech3 }}</span>
    </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
