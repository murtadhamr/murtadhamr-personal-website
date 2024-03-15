<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Academic courses"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="MS in Business Analytics, USC Marshall School of Business" />
        <AppUsesItem v-for="(item, id) in usc" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="BSc in Computer Science, IPB University" />
        <AppUsesItem v-for="(item, id) in ipb" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>

const description =
  "Academic courses I have completed during my academic journey";
useSeoMeta({
  title: "Academic courses | Muhammad Murtadha Ramadhan",
  description,
});

const { data: items } = await useAsyncData("academic", () =>
  queryContent("/academic").find()
);
const ipb = items.value.filter((item) => item.category === "ipb");
const usc = items.value.filter((item) => item.category === "usc");

// const ipbItems = items.value.filter((item) => item.category === "ipb");

// const ipb = ipbData;
// const usc = items.value.filter((item) => item.category === "usc");
// const ipb = items.value.filter((item) => item.category === "ipb");
// const desk = items.value.filter((item) => item.category === "desk");
// const other = items.value.filter((item) => item.category === "others");
</script>../content/academic/usc.vue../content/academic/usc.vue
