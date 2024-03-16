<template>
  <div ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul
        class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <span
                v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
              ></span>
              <span>{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1"></li>
        <li>
          <AppThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</template>


<script setup>
import { useFixedHeader } from 'vue-use-fixed-header'
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

const items = [
  { name: "Home", path: "/", 
  // icon: "solar:home-smile-outline" 
  },
  {
    name: "Projects",
    path: "/projects",
    // icon: "solar:folder-with-files-outline",
  },
  {
    name: "Blog",
    path: "/articles",
    // icon: "solar:document-add-outline",
  },
  // { 
  //   name: "Lab", 
  //   path: "/lab", 
  //   // icon: "heroicons:beaker" 
  // },
  {
    name: "Academic",
    path: "/academic",
    // icon: "solar:backpack-outline",
  },
  // {
  //   name: "Bookmarks",
  //   path: "/bookmarks",
  //   // icon: "solar:bookmark-linear",
  // },
];
</script>
