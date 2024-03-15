// ROLLUP_NO_REPLACE 
 const _2_hackerButton = "{\"parsed\":{\"_path\":\"/lab/hacker-button\",\"_dir\":\"lab\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Hacker Button\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"lab-card\",\"props\":{\"description\":\"Randomize text on click with vue\",\"title\":\"Hacker button\"},\"children\":[{\"type\":\"element\",\"tag\":\"template\",\"props\":{\"v-slot:preview\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"hacker-button\",\"props\":{\"label\":\"Submit Form\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"template\",\"props\":{\"v-slot:codebase\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-view\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-vue shiki shiki-themes github-dark\",\"code\":\"<template>\\n  <button\\n    type=\\\"button\\\"\\n    class=\\\"rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950 relative font-mono\\\"\\n    @click=\\\"startScrambling\\\"\\n  >\\n    {{ displayText }}\\n  </button>\\n</template>\\n\\n<script setup>\\nconst props = defineProps({\\n  label: String,\\n});\\n\\nconst displayText = ref(props.label);\\nconst charset = \\\"abcdefghijklmnopqrstuvwxyz\\\";\\n\\nfunction randomChars(length) {\\n  return Array.from(\\n    { length },\\n    () => charset[Math.floor(Math.random() * charset.length)]\\n  ).join(\\\"\\\");\\n}\\n\\nasync function scramble(input) {\\n  let prefix = \\\"\\\";\\n  for (let index = 0; index < input.length; index++) {\\n    await new Promise((resolve) => setTimeout(resolve, 50));\\n    prefix += input.charAt(index);\\n    displayText.value = prefix + randomChars(input.length - prefix.length);\\n  }\\n}\\n\\nconst startScrambling = () => {\\n  scramble(props.label);\\n  setTimeout(() => console.log(\\\"Submitted\\\"), props.label.length * 50);\\n};\\n\\nwatch(\\n  () => props.label,\\n  (newValue) => {\\n    displayText.value = newValue;\\n  }\\n);\\n</script>\\n\",\"language\":\"vue\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"template\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"button\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    type\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"button\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950 relative font-mono\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    @\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"click\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"startScrambling\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  >\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    {{ displayText }}\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  </\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"button\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":9},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"template\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":10},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":11},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"script\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" setup\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":12},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" props\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" defineProps\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"({\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":13},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  label: String,\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":14},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"});\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":15},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":16},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" displayText\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" ref\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(props.label);\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":17},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" charset\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" \\\"abcdefghijklmnopqrstuvwxyz\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\";\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":18},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":19},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"function\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" randomChars\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"length\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":20},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"  return\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" Array.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"from\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":21},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    { length },\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":22},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    () \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" charset[Math.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"floor\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(Math.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"random\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"() \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"*\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" charset.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"length\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\")]\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":23},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  ).\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"join\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":24},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"}\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":25},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":26},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"async\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" function\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" scramble\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"input\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":27},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"  let\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" prefix \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" \\\"\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\";\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":28},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"  for\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" (\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"let\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" index \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" 0\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"; index \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" input.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"length\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"; index\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"++\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":29},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"    await\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" new\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" Promise\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"((\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"resolve\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" setTimeout\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(resolve, \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"50\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"));\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":30},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    prefix \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"+=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" input.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"charAt\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(index);\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":31},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    displayText.value \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" prefix \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"+\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" randomChars\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(input.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"length\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" -\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" prefix.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"length\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":32},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":33},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"}\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":34},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":35},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" startScrambling\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" () \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":36},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"  scramble\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(props.label);\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":37},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"  setTimeout\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(() \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" console.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"log\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"Submitted\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"), props.label.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"length\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" *\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" 50\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":38},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"};\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":39},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":40},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"watch\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":41},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  () \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" props.label,\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":42},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  (\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"newValue\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":43},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    displayText.value \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" newValue;\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":44},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":45},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":46},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"script\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"template\",\"props\":{\"v-slot:usage\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-view\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-vue shiki shiki-themes github-dark\",\"code\":\"<HackerButton label=\\\"Submit Form' />\\n\",\"language\":\"vue\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"HackerButton\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" label\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"Submit Form' />\\n\"}]}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:lab:2.hacker-button.md\",\"_source\":\"content\",\"_file\":\"lab/2.hacker-button.md\",\"_extension\":\"md\"},\"hash\":\"F440BnRdDz\"}";

export { _2_hackerButton as default };
//# sourceMappingURL=2.hacker-button.mjs.map
