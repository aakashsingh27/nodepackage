#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// User ke project root directory me file banayenge
const folderPath = path.join(process.cwd(), '../../src');
fs.mkdirSync(folderPath);
const filePath = path.join(process.cwd(), '../../src/app.js');

const content = `require('dotenv').config();
require('../config/db');
const cors = require('cors');
const express = require('express');

const app = express();
app.set('view engine', 'hbs');
app.set('views', __dirname + '../../resources/views');
app.use(express.urlencoded({ extended: true }));
const routes = require('../App/routes/routes');
app.use(cors());
app.use('', routes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(\`Server is running on port \${PORT}\`);
});`;
const envfilepath = path.join(process.cwd(), '../../.env');
const envcontent  = `PORT=7000
DATABASE_URL=
SECRET_KEY=

DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=my_db
DB_HOST=localhost
DB_DIALECT=mysql
JWT_SECRET=mysecretkey`;

fs.writeFile(envfilepath, envcontent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('env File successfully created at:', filePath);
    }
});

// File create karte hain aur content likhte hain
fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('File successfully created at:', filePath);
    }
});





const packagePath = path.join(process.cwd(), '../../package1.json');

const packageContent = `{
    "name": "node",
    "version": "1.0.0",
    "description": "",
    "main": "src/app.js",
    "scripts": {
      "start": "nodemon src/app.js",
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "cors": "^2.8.5",
      "dotenv": "^16.4.5",
      "express": "^4.21.1",
      "hbs": "^4.2.0",
      "jsonwebtoken": "^9.0.2",
      "multer": "^1.4.5-lts.1",
      "mysql2": "^3.11.5",
      "pg": "^8.13.1",
      "pg-hstore": "^2.3.4",
      "sequelize": "^6.37.5"
    },
    "devDependencies": {
      "nodemon": "^3.1.7"
    }
  }`;
  

fs.writeFile(packagePath, packageContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('package File successfully created at:', filePath);
    }
});


