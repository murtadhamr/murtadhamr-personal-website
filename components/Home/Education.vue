<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      EDUCATION
    </h2>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in educations"
        :key="id"
        :project="project"
      />
    </div>
    <!-- <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const { data: educations } = await useAsyncData("education-home", () =>
  queryContent("/education").find()
);
</script>
