# 🌟 Problem 14: Serving Static Files with Express 🌟  

Welcome to the fourteenth challenge in the Node.js practical problem series! 🚀 This challenge will teach you how to serve static files using **Express.js**. Let’s make your application more interactive by hosting static content like HTML, CSS, and JavaScript! 💻  

---

## 📝 Problem Statement  

Create an **Express.js server** that:  

1. Serves static files from a directory named **`public`**.  
2. Responds with the appropriate files when accessed through specific routes.  

---

## 🎯 Learning Goals  

- Understand how to use the `express.static` middleware.  
- Learn to structure a project to serve static assets effectively.  
- Explore hosting multiple file types (HTML, CSS, JS, images) in an Express application.  

---

## 📂 Project Structure  

Your project folder should look like this:  

```bash  
14-serve-static-files-node-problem/  
├── public/  
│   ├── index.html         # Main HTML file  
│   ├── style.css          # CSS for styling           # JavaScript file  
│   └── script.js            # Folder for images or other assets  
├── server.js              # Express server script  
├── README.md              # Documentation for this problem  
└── package.json           # Project configuration file  
```

---

## 🌟 Features to Enhance

Once you've implemented the basic functionality, try adding:

- **Custom Routes**: Add a route that redirects users to the main HTML file.

- **404 Handling**: Serve a custom 404 page if a requested file is not found.

- **Cache Control**: Enable caching for static files to improve performance.
  
---

## 🧠 What You’ll Learn

- Using express.static middleware to serve static content.

- Structuring a Node.js application for static file hosting.

- Improving user experience by delivering static assets.
