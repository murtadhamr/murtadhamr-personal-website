<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.png" alt="Fayaz Ahmed"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello there!
    </h1>
    <p class="text-gray-900 dark:text-gray-400" style="text-align: justify;">
      Muhammad Murtadha Ramadhan, usually called Ado, is a business analytics professional with solid experiences 
      in 2 largest Indonesia tech companies #1 Grab and #2 Tokopedia (GoTo Group) where he took part in composing 
      actionable insights through analytics and developing business strategy and operations. Ado is currently 
      a Master of Science in Business Analytics candidate in University of Southern California Marshall School of Business. 
      Prior to it, Ado graduated with a Bachelor's Degree in Computer Science from IPB University and was awarded 
      as one of the best students in Indonesia. 
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      My resume is accessible 
      <a href = "https://drive.google.com/file/d/1WMiAsEDsJmUcozfC1UFTJUk_GHxBsm8V/view?usp=sharing" 
      target="_blank" style="color:blue;">here</a>
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Muhammad Murtadha Ramadhan",
  description:
    "I'm Ado, your data guy",
});
</script>
