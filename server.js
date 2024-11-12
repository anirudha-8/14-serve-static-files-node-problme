const express = require("express");

// to get 'public' folder path
const path = require("path");

const app = express();

// joining current directory with 'public' folder
const pathToPublicDir = path.join(__dirname, "public");
console.log(pathToPublicDir);

// serving / using static files from 'public' directory
app.use(express.static(pathToPublicDir));

const port = 8080;

app.listen(port, () => {
	console.log(`App is running at: http://localhost:${port}`);
});
