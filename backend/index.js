require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { RolesModel } = require("./model/RolesModel");
const { PermissionsModel } = require("./model/PermissionsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.Mongo_Url;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addRoles", async(req,res) => {
//     let tempRoles =[
//         {
//             user_id: 1,
//             name: "User_1",
//             Email: "user_1@mailservice.org",
//             role: "QA Engineer"
//         },
//         {
//             user_id: 2,
//             name: "User_2",
//             Email: "user_2@example.com",
//             role: "Developer"
//         },
//         {
//             user_id: 3,
//             name: "User_3",
//             Email: "user_3@mailservice.org",
//             role: "Designer"
//         },
//         {
//             user_id: 4,
//             name: "User_4",
//             Email: "user_4@example.com",
//             role: "QA Engineer"
//         },
//         {
//             user_id: 5,
//             name: "User_5",
//             Email: "user_5@mailservice.org",
//             role: "Designer"
//         },
//         {
//             user_id: 6,
//             name: "User_6",
//             Email: "user_6@mailservice.org",
//             role: "QA Engineer"
//         },
//         {
//             user_id: 7,
//             name: "User_7",
//             Email: "user_7@techhub.io",
//             role: "Developer"
//         },
//         {
//             user_id: 8,
//             name: "User_8",
//             Email: "user_8@corporate.net",
//             role: "QA Engineer"
//         },
//         {
//             user_id: 10,
//             name: "User_10",
//             Email: "user_10@corporate.net",
//             role: "Admin"
//         },
//         {
//             user_id: 12,
//             name: "User_12",
//             Email: "user_12@corporate.net",
//             role: "QA Engineer"
//         },
//         {
//             user_id: 13,
//             name: "User_13",
//             Email: "user_13@example.com",
//             role: "QA Engineer"
//         },
//         {
//             user_id: 14,
//             name: "User_14",
//             Email: "user_14@corporate.net",
//             role: "QA Engineer"
//         },
//         {
//             user_id: 15,
//             name: "User_15",
//             Email: "user_15@techhub.io",
//             role: "Developer"
//         },
//         {
//             user_id: 16,
//             name: "User_16",
//             Email: "user_16@mailservice.org",
//             role: "Developer"
//         },
//         {
//             user_id: 17,
//             name: "User_17",
//             Email: "user_17@mailservice.org",
//             role: "Admin"
//         },
//         {
//             user_id: 18,
//             name: "User_18",
//             Email: "user_18@corporate.net",
//             role: "Admin"
//         }
//     ];

//     tempRoles.forEach((item)=> {
//         let newRole = new RolesModel({
//             user_id: item.user_id,
//             name: item.name,
//             Email: item.Email,
//             role: item.role,
//         });
//         newRole.save();
//     });

//     res.send("Done!");
// });

// app.get("/addPermissions", async (req, res) => {
//   let tempPermissions = [
//     { user_id: 1, permission_name: "View Dashboard", status: "Active" },
//     { user_id: 2, permission_name: "Edit Code", status: "Active" },
//     { user_id: 3, permission_name: "Approve Features", status: "Active" },
//     { user_id: 4, permission_name: "Manage Users", status: "Inactive" },
//     { user_id: 5, permission_name: "Edit Code", status: "Inactive" },
//     { user_id: 6, permission_name: "Approve Features", status: "Active" },
//     { user_id: 7, permission_name: "View Dashboard", status: "Inactive" },
//     { user_id: 8, permission_name: "Edit Code", status: "Active" },
//     { user_id: 10, permission_name: "Approve Features", status: "Inactive" },
//     { user_id: 12, permission_name: "Manage Users", status: "Active" },
//     { user_id: 13, permission_name: "Approve Features", status: "Inactive" },
//     { user_id: 14, permission_name: "Manage Users", status: "Inactive" },
//     { user_id: 15, permission_name: "Edit Code", status: "Inactive" },
//     { user_id: 16, permission_name: "Approve Features", status: "Active" },
//     { user_id: 17, permission_name: "Manage Users", status: "Active" },
//     { user_id: 18, permission_name: "Approve Features", status: "Inactive" },
//   ];
  

//   tempPermissions.forEach((item) => {
//     let newPermissions = new PermissionsModel({
//       user_id: item.user_id,
//       permission_name: item.permission_name,
//       status: item.status,
//     });

//     newPermissions.save();
//   });

//   res.send("Done!");
// });

//fetch route
app.get("/allRoles", async (req, res) => {
  let allRoles = await RolesModel.find({});
  res.json(allRoles);
});

app.get("/allPermissions", async (req, res) => {
    let allPermissions = await PermissionsModel.find({});
    res.json(allPermissions);
});

//Add route
app.post("/allRoles", async (req, res) => {
    try {
      const { user_id, name, Email, role } = req.body;
      
      // Create a new role document
      const newRole = new RolesModel({
        user_id,
        name,
        Email,
        role,
      });
  
      // Save the new role to the database
      await newRole.save();
  
      // Send response
      res.status(201).json({
        message: "Role successfully created",
        newRole,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  });
  
app.post("/allPermissions", async (req, res) => {
    try {
      const { user_id, permission_name, status } = req.body;
      
      // Create a new permission document
      const newPermission = new PermissionsModel({
        user_id,
        permission_name,
        status,
      });
  
      // Save the new permission to the database
      await newPermission.save();
  
      // Send response
      res.status(201).json({
        message: "Permission successfully created",
        newPermission,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  });
  

//fetch for edit
app.get('/allRoles/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const role = await RolesModel.findById(id); // Correct method
      if (role) {
          res.json(role);
      } else {
          res.status(404).send('Role not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
  }
});


app.get('/allPermissions/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const permission = await PermissionsModel.findById(id); // Correct method
      if (permission) {
          res.json(permission);
      } else {
          res.status(404).send('Permission not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
  }
});

app.put("/allRoles/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const updatedRole = await RolesModel.findByIdAndUpdate(
          id,
          req.body, // Use req.body for updated data
          { new: true }
      );
      if (updatedRole) {
          res.json(updatedRole);
      } else {
          res.status(404).send('Role not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
  }
});

app.put("/allPermissions/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const updatedPermission = await PermissionsModel.findByIdAndUpdate(
          id,
          req.body, // Use req.body for updated data
          { new: true }
      );
      if (updatedPermission) {
          res.json(updatedPermission);
      } else {
          res.status(404).send('Permission not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
  }
});


//delete route
app.delete("/allRoles/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRole = await RolesModel.findByIdAndDelete(id);
        if (deletedRole) {
            res.json({
                message: "Role successfully deleted",
                deletedRole,
            });
        } else {
            res.status(404).send("Role not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

app.delete("/allPermissions/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPermission = await PermissionsModel.findByIdAndDelete(id);
        if (deletedPermission) {
            res.json({
                message: "Permission successfully deleted",
                deletedPermission,
            });
        } else {
            res.status(404).send("Permission not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});



app.listen(PORT, () => {
  console.log("App started");
  mongoose.connect(uri);
  console.log("DB connected");
});
