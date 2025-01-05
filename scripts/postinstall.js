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


const gitignorePath =  path.join(process.cwd(),`../../.gitignore`);
const gitignoreContent = `/node_modules`;

const Edituserfilepath = path.join(process.cwd(),`../../resources/views/edit_user.hbs`);
const Editusercontent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Form and Table</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <div class="container mt-5">
        <!-- Form for Registering User -->
        <div class="row justify-content-center mb-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Update Account</h4>
                    </div>
                    <div class="card-body">
                        <form action="/update_user" method="POST">
                            <!-- Name Field -->
                            <div class="mb-3">
                                <input type="hidden" value="{{user.id}}" name="id">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" value="{{user.name}}" name="name" class="form-control" id="name"
                                    placeholder="Enter your full name" required>
                            </div>

                            <!-- Email Field -->
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" value="{{user.email}}" name="email" class="form-control" id="email"
                                    placeholder="Enter your email" required>
                            </div>

                            <!-- Password Field -->
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" value="{{user.password}}" name="password" class="form-control"
                                    id="password" placeholder="Enter your password" required>
                            </div>

                            <!-- Mobile Field -->
                            <div class="mb-3">
                                <label for="mobile" class="form-label">Mobile</label>
                                <input type="number" value="{{user.mobile}}" name="mobile" class="form-control"
                                    id="mobile" placeholder="Enter your mobile" required>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Table to Display User Information -->


    </div>

    <!-- Bootstrap 5 JS and dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
</body>

</html>`;

const indexviewFilepath = path.join(process.cwd(),`../../resources/views/index.hbs`);
const indexfileContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node js Crud and JWT TOKEN</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <div class="container mt-5">
        <!-- Form for Registering User -->
        <div class="row justify-content-center mb-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Create Account</h4>
                    </div>
                    <div class="card-body">
                        <form action="/register_user" method="POST">
                            <!-- Name Field -->
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" autocomplete="off" name="name" class="form-control" id="name"
                                    placeholder="Enter your full name" required>
                            </div>

                            <!-- Email Field -->
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" name="email" class="form-control" id="email"
                                    placeholder="Enter your email" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">role id</label>
                                <input type="number" name="roleId" class="form-control" id="email"
                                    placeholder="Enter your email" required>
                            </div>

                            <!-- Password Field -->
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name="password" class="form-control" id="password"
                                    placeholder="Enter your password" required>
                            </div>

                            <!-- Mobile Field -->
                            <div class="mb-3">
                                <label for="mobile" class="form-label">Mobile</label>
                                <input type="number" name="mobile" class="form-control" id="mobile"
                                    placeholder="Enter your mobile" required>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Table to Display User Information -->
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>User Details</h4>
                    </div>
                    <div class="card-body">
                        <!-- Table for displaying user info -->
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Password</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Example Data Row (you will dynamically render this data) -->

                                {{#each users}}
                                <tr>
                                    <td>{{@index}}</td> <!-- Display the index of the user in the loop -->
                                    <td>{{this.name}}</td>
                                    <td>{{this.email}}</td>
                                    <td>{{this.mobile}}</td>
                                    <td>{{this.password}}</td>
                                    <td>{{this.roleName}}</td> <!-- Direct access to the flattened roleName -->
                                    <td>
                                        <!-- Action buttons for Edit/Delete -->
                                        <a href="edit_user/{{this.id}}" class="btn btn-warning btn-sm">Edit</a>
                                        <a href="delete_user/{{this.id}}" class="btn btn-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                                {{/each}}
                                <!-- More rows will be added dynamically -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Bootstrap 5 JS and dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
</body>

</html>`;

const RoutesPath = path.join(process.cwd(),`../../App/routes/routes.js`);
const RoutesContent = `const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const authMiddleware = require('../Http/middleware/authMiddleware');
const UserController = require('../Http/Controllers/UserController');

router.get('/users', UserController.index);
router.post('/register_user',upload.none(), UserController.registerUser);
router.get('/edit_user/:id', UserController.edit_user);
router.post('/update_user', UserController.update_user);
router.post('/delete_user', authMiddleware, UserController.delete_user);
router.get('/delete_user/:id', UserController.delete_user);
router.post('/login', UserController.login);

module.exports = router;
`;

const UsermodelPath = path.join(process.cwd(),`../../App/Models/Usermdl.js`);
const UsermodelContent = `const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');  // Import the Sequelize instance
const Role = require('./roles');  // Import the Role model

// Define the User model
const User = sequelize.define('another_users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id',
        },
        onDelete: 'CASCADE',
    }
});


User.belongsTo(Role, {
    foreignKey: 'roleId',
    as: 'role',
});

Role.hasMany(User, {
    foreignKey: 'roleId',
    as: 'users',
});

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

module.exports = User;
`;

const rolemodelPath = path.join(process.cwd(),`../../App/Models/roles.js`);
const roleModelContent = `// models/role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Import the Sequelize instance from your db configuration

// Define the Role model
const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure the role name is unique
    },
});

// Sync the model with the database (this will create the table if it doesn't exist)
Role.sync()
    .then(() => {
        console.log('Role table created!');
    })
    .catch((err) => {
        console.error('Error syncing Role table:', err);
    });

// Export the Role model
module.exports = Role;
`;

const middlewarepath = path.join(process.cwd(),`../../App/Http/middleware/authMiddleware.js`);
const MiddwareContent = `// authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['token'];
    console.log("passs");

    if (!token) {
        res.status(403).json({ message: 'No token provided' });  // First response
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Failed to authenticate token' });  // Second response
            return;  
        }
        req.user = decoded.user; // Attach user data
        next();  
        
    });
};
`;

const UserControllerFile_path = path.join(process.cwd(), `../../App/Http/Controllers/UserController.js`);
const UserControllerContent = `const User = require('../../Models/Usermdl');  // Import the User model
const jwt = require('jsonwebtoken');

const Role = require('../../Models/roles');
const index = async (req, res) => {
    try {
        const ussers = await User.findAll();
        const usersWithRoles = await User.findAll({
            include: [{
                model: Role,
                as: 'role',
            }],
            raw: true,
        });

        // Flatten the 'role' object into its individual properties
        const formattedUsers = usersWithRoles.map(user => ({
            ...user,
            roleId: user['role.id'],
            roleName: user['role.name'],
            roleCreatedAt: user['role.createdAt'],
            roleUpdatedAt: user['role.updatedAt'],
        }));

        console.log(formattedUsers);

      //  res.render('index', { users: formattedUsers });
         res.json({ 'response': formattedUsers });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};


const registerUser = async (req, res) => {
    try {
        const { name, email, password, mobile, roleId } = req.body;
        console.log('Request Body:', req.body);
        const newUser = await User.create({
            name,
            email,
            password,
            mobile,
            roleId

        });
        res.status(201).json({
            success:true,
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        res.status(500).json({success:false, message: error });
        console.log(error);
    }
};

// Get user details for editing
const edit_user = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: { id: id }
        });
        res.render('edit_user', { user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
        console.log(error);
    }
};


const update_user = async (req, res) => {
    try {
        const { name, email, mobile, password, id } = req.body;
        const update = await User.update(
            { name, email, password, mobile },
            { where: { id: id } }
        );
        res.status(201).json({
            message: 'User Updated successfully',
            user: update,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
        console.log(error);
    }
};
const delete_user = async (req, res) => {
    try {
        const id = req.body.id || req.params.id;
        const deletedUser = await User.destroy({
            where: { id: id }
        });

        if (deletedUser) {
            if (req.body.id) {
                res.json({ message: 'User deleted successfully' });
            }
            else {
                res.redirect('/users');
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        where: { email: email, password: password }
    });

    if (!user) {
        return res.status(200).json({ message: 'Wrong credentials' });
    }

    else {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ 'token': token, 'message': 'User logged in successfully' });
    }
    // Generate a JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
};


module.exports = {
    index,
    registerUser,
    edit_user,
    update_user,
    delete_user,
    login,
};
`;

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



// fs.writeFile(Edituserfil)


fs.writeFile(gitignorePath, gitignoreContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('Gitignore File successfully ', filePath);
    }
});

fs.writeFile(Edituserfilepath, Editusercontent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('Editview File successfully ', filePath);
    }
});


fs.writeFile(indexviewFilepath, indexfileContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('Indexview File successfully ', filePath);
    }
});

fs.writeFile(RoutesPath, RoutesContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('Routes model File successfully ', filePath);
    }
});

fs.writeFile(UsermodelPath, UsermodelContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('User model File successfully ', filePath);
    }
});

fs.writeFile(rolemodelPath, roleModelContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('Role model File successfully ', filePath);
    }
});

fs.writeFile(middlewarepath, MiddwareContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('Middlware File successfully created at:', filePath);
    }
});



fs.writeFile(UserControllerFile_path, UserControllerContent, (err) => {
    if (err) {
        console.log('Error creating file:', err);
    } else {
        console.log('User controller File successfully created at:', filePath);
    }
});

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


