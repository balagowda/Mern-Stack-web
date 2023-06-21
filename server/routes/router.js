const express = require("express");
const router = new express.Router();
const Products = require("../db/models/productSchema");
const User = require("../db/models/userSchema");

router.get("/getproducts", async (req, res) => {
  try {
    const productData = await Products.find();
    // console.log(productData);
    res.status(201).json(productData);
  } catch (error) {
    res.status(400).json(productData);
    console.log(error.message);
  }
});

//get individual product data

router.get("/getproducts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const individualData = await Products.findOne({ id: id });
    res.status(201).json(individualData);
  } catch (error) {
    res.status(422).json(individualData);
    console.log(error.message);
  }
});

// user register data
router.post("/register", async (req, res) => {
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "Fill all the feild" });
  }

  try {

    const preUser = await User.findOne({ email: email });

    if (preUser) {
      res.status(422).json({ error: "User already registerd" });
    } 
    else if (password !== cpassword) {
      res.status(422).json({ error: "Password doesn't matches" });
    } 
    else {
      const createUser = new User({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      const storedata = await createUser.save();
      res.status(201).json(storedata);
     
    }

  } catch (error) {
    console.log(error.message);
  }

});

module.exports = router;
