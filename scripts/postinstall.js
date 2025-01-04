#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const folderPath = path.join(process.cwd(), '../../src');
const Controller_folder = path.join(process.cwd(), '../../App');
const public_folder = path.join(process.cwd(), '../../public');
const config_folder = path.join(process.cwd(), '../../config');
const resources_folder = path.join(process.cwd(), '../../resources');
const views_folder = path.join(process.cwd(), '../../resources/views');
const Models_folder = path.join(process.cwd(), '../../App/Models');
const routes_folder = path.join(process.cwd(), '../../App/routes');
const Http_folder = path.join(process.cwd(), '../../App/Http');
const Cntrlr_folder = path.join(process.cwd(), '../../App/Http/Controllers');
const middleware_folder = path.join(process.cwd(), '../../App/Http/middleware');

fs.mkdirSync(folderPath);
fs.mkdirSync(Controller_folder);
fs.mkdirSync(Models_folder);
fs.mkdirSync(Http_folder);
fs.mkdirSync(Cntrlr_folder);
fs.mkdirSync(middleware_folder);
fs.mkdirSync(routes_folder);
fs.mkdirSync(public_folder);
fs.mkdirSync(resources_folder);
fs.mkdirSync(views_folder);
fs.mkdirSync(config_folder);

const filePath = path.join(process.cwd(), '../../src/app.js');
const dbfile = path.join(process.cwd(), '../../config/db.js');
const dbfileCOntent = `const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    dialectOptions: {
        ssl: false
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to the SQL database!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = sequelize;`;

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

fs.writeFile(dbfile, dbfileCOntent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('DB File successfully created at:', filePath);
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


