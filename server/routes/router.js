const express = require("express");
const router = new express.Router();
const Products = require("../db/models/productSchema");
const User = require("../db/models/userSchema");
const bcrypt = require("bcryptjs");
const Authenticate = require('../Auth/Authenticate');

//home page products
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
    } else if (password !== cpassword) {
      res.status(422).json({ error: "Password doesn't matches" });
    } else {
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

// Login User

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  if (!email || !password) {
    res.status(422).json({ error: "Fill all the feild" });
  }

  try {
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    if(userLogin){
      const isMatch = await bcrypt.compare(password,userLogin.password);

      if(!isMatch){
        res.status(422).json({error:"Invalid details"});
      }
      else{

        //token generate function
        const token = await userLogin.generateAuthToken();

        res.cookie("cloneProject", token, {
          expires: new Date(Date.now() + 2589000),
          httpOnly: true
      });

        res.status(201).json({message:"login Success"});
      }
    }
    else{
      res.status(422).json({error:"No user Found"});
    }
  } 
  catch (error) {
    console.log(error.message);
  }

});

//cart add function

router.post('/addcart/:id',Authenticate,async(req,res)=>{
  try {

    const {id} = req.params;
    const cart = await Products.findOne({id:id});

    const userContact = await User.findOne({_id:req.userID});

    if(userContact){
      const cartData = await userContact.addCartData(cart);
      await userContact.save();
      res.status(201).json(userContact);
    }
    else{
      res.status(401).json({error:"Please login before adding to cart"});
    }

  } catch (error) {
    console.log(error.message);
  }
});

//finding user and cart item function

router.get('/userdata',Authenticate,async(req,res)=>{
  try {

    const buyUser = await User.findOne({_id:req.userID});
    // console.log(buyUser);
    res.status(201).json(buyUser);
    
  } catch (error) {
    console.log(error.message);
  }
});

// deleting cart element

router.get('/delete/:id',Authenticate,(req,res)=>{
  try {
    const {id} = req.params;
    console.log(id);
    req.rootUser.carts = req.rootUser.carts.filter((cruval)=>{
      return cruval.cart.id !== id;
    });
    req.rootUser.save();
    // console.log(req.rootUser);
    res.status(201).json(req.rootUser);
  } catch (error) {
    console.log("Error inremoving the cart item");
    req.status(400).json({error:"Error in removing the cart item"});
  }
});

//Logout user

router.get('/logout',Authenticate,(req,res)=>{
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((cruval) => {
        return cruval.token !== req.token
    });

    res.clearCookie("cloneProject", { path: "/" });
    req.rootUser.save();
    res.status(201).json(req.rootUser.tokens);
    console.log("user logout");

} catch (error) {
    console.log(error + "error in user logout");
}
});

module.exports = router;
