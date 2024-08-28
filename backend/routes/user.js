// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import userModel from '../models/user.js';
// const Userrouter = express.Router();

// // Register
// Userrouter.post('/register', async (req, res) => {
//   const { username, email, password, roles } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = new User({ username, email, password: hashedPassword, roles });
//   await user.save();
//   res.status(201).json(user);
// });

// // Login
// Userrouter.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       const userExist = await userModel.findOne({ email: email });
//       if (!userExist) {
//        return  res.status(400).send("user is already not register try to login");
//       }
  
//       if (!await bcrypt.compare(password,userExist.password)) {
//         return res.status(401).send("password is not correct ");
//       }
  
//       const token = jwt.sign(
//         { email: userExist.email, id: userExist._id },
//         "masai"
//       );
//       res.json({ token: token });
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
  
//   userRoute.post("/logout",async(req,res)=>{
//     if(req.headers.authorization===undefined){
//         return res.send("token reqired");
//     }
//       let token=req.headers.authorization.split(" ")[1];
//       console.log(token)
//     try{
//         req.session.destroy(async(err) => {
//             if (err) {
//               return res.status(500).send('Unable to log out');
//             }
//             const block=new BLOCK({blocklist:token})
//             await block.save();
//             res.send('User logged out');
//           });
//     }catch(err){
//       console.log(err);
//       res.json({message : error.message}) 
//     }
// })
//   export default Userrouter;
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.js';
import blockModel from '../models/block.js'; // Assuming you have a Block model for storing blocked tokens
import session from 'express-session';

const Userrouter = express.Router();

// Register
Userrouter.post('/register', async (req, res) => {
  const { username, email, password, roles } = req.body;

  // Check if all required fields are provided
  if (!username || !email || !password || !roles) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists. Please login.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ username, email, password: hashedPassword, roles });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
Userrouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const userExist = await userModel.findOne({ email: email });
    if (!userExist) {
      return res.status(400).send("User is not registered. Please register first.");
    }

    const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
    if (!isPasswordCorrect) {
      return res.status(401).send("Incorrect password.");
    }

    const token = jwt.sign(
      { email: userExist.email, id: userExist._id, roles: userExist.roles },
      process.env.JWT_SECRET || "masai"
    );
    res.json({ token: token, roles: userExist.roles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Logout
Userrouter.post("/logout", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(400).send("Token required.");
  }

  const token = req.headers.authorization.split(" ")[1];
  try {
    req.session.destroy(async (err) => {
      if (err) {
        return res.status(500).send("Unable to log out.");
      }
      const block = new blockModel({ token });
      await block.save();
      res.send("User logged out.");
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default Userrouter;
