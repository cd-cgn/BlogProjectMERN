# ReactUI
React User Interface for Blog Project

# Commands
- npx create-react-app folder-name : for creating a react app
- npx json-server --watch data/db.json --port 8000 : for running json server on port 8000
- yarn start : for starting react UI

# Overview
UI [Project: [ReactUI]]
- React

APIs/MicroServices [Project : [BlogsMS]]
- C#

DBs [Project: [DataModel]]
- SQL Server/MongoDB/CassendraDB

# Basics/Beginner 
- BlogSite

# Code Structure/Architecture
# Deleted 
- test file App.test.js & setupTests.js
- performance file reportWebVitals.js & its use in index.js

# Add proxy for bypassing CORS ex:
- Add [ "proxy": "https://localhost:44300/", ] at line no. 2 in package.json

# APIs Consumed / Endpoints list:

- Get : http://localhost:8000/blogs or http://localhost:8000/blogs?id= + id
- Get : http://localhost:8000/blogs/ + id
- Delete : http://localhost:8000/blogs/ + id
- Post : http://localhost:8000/blogs (blog)