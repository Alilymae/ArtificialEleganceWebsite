const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//database connection w/ mongodb
//mongodb+srv://aliahmae:<db_password>@cluster0.arwnyxh.mongodb.net/

mongoose.connect(
  "mongodb+srv://aliahmae:July20@cluster0.arwnyxh.mongodb.net/arificialelegance"
);

//API

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

//multer img
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

//creating upload
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//schema
const Products = mongoose.model("Products", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  newprice: { type: Number, required: true },
  oldprice: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
  available: { type: Boolean, default: true },
});

app.post("/addproduct", async (req, res) => {
  let products = await Products.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Products({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    newprice: req.body.newprice,
    oldprice: req.body.oldprice,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({ success: true, name: req.body.name });
});

//api for deletion
app.post("/removeproduct", async (req, res) => {
  await Products.findOneAndDelete({ id: req.body.id });
  console.log("Deleted");
  res.json({ success: true, name: req.body.name });
});

//getting all products
app.get("/allproducts", async (req, res) => {
  let products = await Products.find({});
  console.log("Porducts fethced");
  res.send(products);
});

//scheme for user model
const Users = mongoose.model("Users", {
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now() },
});

//endpoint for user regis
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, error: "Email already exists" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user._id,
    },
  };

  const token = jwt.sign(data, "secret");
  res.json({ success: true, token: token });
});

//endpoint for user login\
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user._id,
        },
      };

      const token = jwt.sign(data, "secret");
      res.json({ success: true, token});
  }
  else {
    res.json({ success: false, error: "Password wrong" });
  }
  }
  else {
    res.json({ success: false, error: "Wrong email id" });
  }
});

//middleware to fetch user
const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  else {
    try{
      const data = jwt.verify(token, "secret");
    req.user = data.user;
    next();
    }
    catch(error){
      res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    
  }  
};


//cartdata saving
app.post("/addtocart",fetchuser, async (req, res) => {
  console.log("added", req.body.itemId);
  let userData = await Users.findOne({_id: req.user.id});
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Added");
});

//removing from cart data
app.post("/removefromcart",fetchuser, async (req, res) => {
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({_id: req.user.id});
  if(userData.cartData[req.body.itemId]>0)
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Removed");
});

//retrieving from login
app.post("/getcartdata",fetchuser, async (req, res) => {
  console.log("retrieved");
  let userData = await Users.findOne({_id: req.user.id});
  res.json(userData.cartData);
});


app.listen(port, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully running and App is listening on port " + port
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
