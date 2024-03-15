// ROLLUP_NO_REPLACE 
 const _1_textRotator = "{\"parsed\":{\"_path\":\"/lab/text-rotator\",\"_dir\":\"lab\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Text Rotator\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"lab-card\",\"props\":{\":show-usage-tab\":\"false\",\"description\":\"Rotate text with tailwindcss.\",\"title\":\"Text Rotator\"},\"children\":[{\"type\":\"element\",\"tag\":\"template\",\"props\":{\"v-slot:preview\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"text-rotator\",\"props\":{},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"template\",\"props\":{\"v-slot:codebase\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code-view\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-html shiki shiki-themes github-dark\",\"code\":\"<template>\\n  <div\\n    class=\\\"p-4 bg-gray-100 rounded-md border flex flex-col justify-center items-center overflow-hidden\\\"\\n  >\\n    <div class=\\\"font-extrabold text-lg [text-wrap:balance] text-gray-700\\\">\\n      We design and develop the best\\n      <span\\n        class=\\\"inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden\\\"\\n      >\\n        <ul\\n          class=\\\"block text-left leading-tight [&_li]:block animate-text-slide\\\"\\n        >\\n          <li class=\\\"text-indigo-500\\\">Mobile apps</li>\\n          <li class=\\\"text-rose-500\\\">Websites</li>\\n          <li class=\\\"text-yellow-500\\\">Admin dashboards</li>\\n          <li class=\\\"text-teal-500\\\">Landing pages</li>\\n          <li class=\\\"text-pink-500\\\">Illustrations</li>\\n          <li class=\\\"text-sky-500\\\">Icons</li>\\n        </ul>\\n      </span>\\n    </div>\\n  </div>\\n</template>\\n\\n<style>\\n  .animate-text-slide {\\n    animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\\n  }\\n\\n  @keyframes text-slide {\\n    0%,\\n    16% {\\n      transform: translateY(0%);\\n    }\\n\\n    20%,\\n    36% {\\n      transform: translateY(-16.66%);\\n    }\\n\\n    40%,\\n    56% {\\n      transform: translateY(-33.33%);\\n    }\\n\\n    60%,\\n    76% {\\n      transform: translateY(-50%);\\n    }\\n\\n    80%,\\n    96% {\\n      transform: translateY(-66.66%);\\n    }\\n\\n    100% {\\n      transform: translateY(-83.33%);\\n    }\\n  }\\n</style>\\n\",\"language\":\"html\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"template\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"div\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"p-4 bg-gray-100 rounded-md border flex flex-col justify-center items-center overflow-hidden\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  >\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"div\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"font-extrabold text-lg [text-wrap:balance] text-gray-700\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"      We design and develop the best\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"      <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"span\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"        class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":9},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"      >\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":10},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"        <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"ul\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":11},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"          class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"block text-left leading-tight [&_li]:block animate-text-slide\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":12},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"        >\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":13},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"          <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"text-indigo-500\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">Mobile apps</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":14},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"          <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"text-rose-500\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">Websites</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":15},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"          <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"text-yellow-500\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">Admin dashboards</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":16},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"          <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"text-teal-500\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">Landing pages</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":17},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"          <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"text-pink-500\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">Illustrations</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":18},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"          <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" class\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"text-sky-500\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">Icons</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"li\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":19},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"        </\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"ul\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":20},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"      </\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"span\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":21},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    </\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"div\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":22},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  </\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"div\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":23},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"template\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":24},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":25},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"style\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":26},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"  .animate-text-slide\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":27},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"    animation\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\": text-slide \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"12.5\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"s\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" cubic-bezier\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"0.83\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\", \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"0\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\", \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"0.17\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\", \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"1\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"infinite\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\";\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":28},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":29},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":30},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"  @keyframes\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\" text-slide\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":31},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    0%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\",\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":32},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    16%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":33},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"      transform\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"translateY\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"0\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":34},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":35},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":36},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    20%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\",\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":37},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    36%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":38},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"      transform\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"translateY\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"-16.66\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":39},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":40},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":41},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    40%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\",\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":42},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    56%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":43},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"      transform\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"translateY\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"-33.33\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":44},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":45},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":46},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    60%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\",\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":47},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    76%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":48},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"      transform\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"translateY\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"-50\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":49},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":50},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":51},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    80%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\",\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":52},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    96%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":53},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"      transform\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"translateY\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"-66.66\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":54},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":55},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":56},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"    100%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":57},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"      transform\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"translateY\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"-83.33\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"%\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":58},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"    }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":59},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  }\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":60},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"</\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#85E89D\"},\"children\":[{\"type\":\"text\",\"value\":\"style\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:lab:1.text-rotator.md\",\"_source\":\"content\",\"_file\":\"lab/1.text-rotator.md\",\"_extension\":\"md\"},\"hash\":\"F6YtY3sRwq\"}";

export { _1_textRotator as default };
//# sourceMappingURL=1.text-rotator.mjs.map
