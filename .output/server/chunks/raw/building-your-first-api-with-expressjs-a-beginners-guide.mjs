// ROLLUP_NO_REPLACE 
 const buildingYourFirstApiWithExpressjsABeginnersGuide = "{\"parsed\":{\"_path\":\"/articles/building-your-first-api-with-expressjs-a-beginners-guide\",\"_dir\":\"articles\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Building Your First API with Express.js: A Beginner's Guide\",\"description\":\"A beginner-friendly guide to building your first API with Express.js\",\"published\":\"2023/11/2\",\"slug\":\"building-your-first-api-with-expressjs-a-beginners-guide\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"blockquote\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This article was created using ChatGPT and meant as a placeholder\"}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"what-is-expressjs\"},\"children\":[{\"type\":\"text\",\"value\":\"What is Express.js?\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node-based web applications and is widely used to build APIs due to its simplicity and performance.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"step-1-setting-up-your-environment\"},\"children\":[{\"type\":\"text\",\"value\":\"Step 1: Setting Up Your Environment\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Before you start, ensure that you have Node.js installed on your system. You can download it from Node.js official website.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Once Node.js is installed, you can initiate your project:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-bash shiki shiki-themes github-dark\",\"code\":\"mkdir my-express-api\\ncd my-express-api\\nnpm init -y\\n\",\"language\":\"bash\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"mkdir\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" my-express-api\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\"cd\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" my-express-api\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"npm\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" init\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" -y\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This creates a new directory for your project and initializes a new Node.js project.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"step-2-installing-expressjs\"},\"children\":[{\"type\":\"text\",\"value\":\"Step 2: Installing Express.js\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Install Express.js using npm (Node Package Manager):\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-bash shiki shiki-themes github-dark\",\"code\":\"Copy code\\nnpm install express --save\\nThis command installs Express.js and adds it to your project's dependencies.\\n\",\"language\":\"bash\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"Copy\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" code\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"npm\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" install\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" express\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" --save\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"This\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" command\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" installs\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" Express.js\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" and\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" adds\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" it\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" to\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" your\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" project's dependencies.\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"step-3-creating-your-first-express-server\"},\"children\":[{\"type\":\"text\",\"value\":\"Step 3: Creating Your First Express Server\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Create a file named app.js in your project directory. This file will be the entry point of your API. Add the following code to app.js:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-js shiki shiki-themes github-dark\",\"code\":\"Copy code\\nconst express = require('express');\\nconst app = express();\\nconst port = 3000;\\n\\napp.get('/', (req, res) => {\\n  res.send('Hello World!');\\n});\\n\\napp.listen(port, () => {\\n  console.log(`Example app listening at http://localhost:${port}`);\\n});\\n\",\"language\":\"js\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"Copy code\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" express\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" require\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"'express'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" app\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\" express\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"();\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" port\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#79B8FF\"},\"children\":[{\"type\":\"text\",\"value\":\" 3000\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\";\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"app.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"'/'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\", (\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"req\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\", \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"res\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  res.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"send\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"'Hello World!'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"});\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":9},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":10},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"app.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"listen\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(port, () \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":11},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  console.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"log\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"`Example app listening at http://localhost:${\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"port\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"}`\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\");\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":12},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"});\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This code creates a basic Express server that listens on port 3000 and responds with \\\"Hello World!\\\" to HTTP GET requests to the root URL (/).\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"step-4-running-your-express-server\"},\"children\":[{\"type\":\"text\",\"value\":\"Step 4: Running Your Express Server\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Run your server using Node.js:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-bash shiki shiki-themes github-dark\",\"code\":\"Copy code\\nnode app.js\\nVisit http://localhost:3000 in your browser. You should see the message \\\"Hello World!\\\".\\n\",\"language\":\"bash\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"Copy\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" code\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"node\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" app.js\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"Visit\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" http://localhost:3000\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" in\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" your\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" browser.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" You\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" should\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" see\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" the\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" message\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\" \\\"Hello World!\\\".\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"step-5-building-a-simple-api\"},\"children\":[{\"type\":\"text\",\"value\":\"Step 5: Building a Simple API\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Now, let's expand our server to act as a simple API. For example, let's create an endpoint that returns a list of users.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Add the following code to your app.js:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-javascript shiki shiki-themes github-dark\",\"code\":\"Copy code\\nlet users = [{ name: \\\"Alice\\\" }, { name: \\\"Bob\\\" }];\\n\\napp.get('/users', (req, res) => {\\n  res.json(users);\\n});\\n\",\"language\":\"javascript\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"Copy code\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"let\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" users \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" [{ name: \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"Alice\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" }, { name: \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"Bob\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" }];\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"app.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#9ECBFF\"},\"children\":[{\"type\":\"text\",\"value\":\"'/users'\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\", (\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"req\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\", \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFAB70\"},\"children\":[{\"type\":\"text\",\"value\":\"res\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\") \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F97583\"},\"children\":[{\"type\":\"text\",\"value\":\"=>\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"  res.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#B392F0\"},\"children\":[{\"type\":\"text\",\"value\":\"json\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"(users);\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E1E4E8\"},\"children\":[{\"type\":\"text\",\"value\":\"});\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Now, if you visit \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"http://localhost:3000/users\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"http://localhost:3000/users\"}]},{\"type\":\"text\",\"value\":\", you will see the JSON representation of the users array.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"step-6-testing-your-api\"},\"children\":[{\"type\":\"text\",\"value\":\"Step 6: Testing Your API\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"It’s important to test your API. You can use tools like Postman or curl to test your endpoints.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"step-7-next-steps\"},\"children\":[{\"type\":\"text\",\"value\":\"Step 7: Next Steps\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"From here, you can start building more complex APIs. Consider the following:\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Implementing CRUD (Create, Read, Update, Delete) operations.\\nConnecting your API to a database.\\nAdding authentication and authorization.\\nOrganizing your code with routers and controllers.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"conclusion\"},\"children\":[{\"type\":\"text\",\"value\":\"Conclusion\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Express.js simplifies the process of building APIs in Node.js. It's a great starting point for developers looking to delve into backend development. With its minimalist approach, you have the freedom to structure your applications as you see fit, making Express.js an invaluable tool in your development toolkit.\"}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"what-is-expressjs\",\"depth\":2,\"text\":\"What is Express.js?\"},{\"id\":\"step-1-setting-up-your-environment\",\"depth\":2,\"text\":\"Step 1: Setting Up Your Environment\"},{\"id\":\"step-2-installing-expressjs\",\"depth\":2,\"text\":\"Step 2: Installing Express.js\"},{\"id\":\"step-3-creating-your-first-express-server\",\"depth\":2,\"text\":\"Step 3: Creating Your First Express Server\"},{\"id\":\"step-4-running-your-express-server\",\"depth\":2,\"text\":\"Step 4: Running Your Express Server\"},{\"id\":\"step-5-building-a-simple-api\",\"depth\":2,\"text\":\"Step 5: Building a Simple API\"},{\"id\":\"step-6-testing-your-api\",\"depth\":2,\"text\":\"Step 6: Testing Your API\"},{\"id\":\"step-7-next-steps\",\"depth\":2,\"text\":\"Step 7: Next Steps\"},{\"id\":\"conclusion\",\"depth\":2,\"text\":\"Conclusion\"}]}},\"_type\":\"markdown\",\"_id\":\"content:articles:building-your-first-api-with-expressjs-a-beginners-guide.md\",\"_source\":\"content\",\"_file\":\"articles/building-your-first-api-with-expressjs-a-beginners-guide.md\",\"_extension\":\"md\"},\"hash\":\"lkSlC2FMoZ\"}";

export { buildingYourFirstApiWithExpressjsABeginnersGuide as default };
//# sourceMappingURL=building-your-first-api-with-expressjs-a-beginners-guide.mjs.map