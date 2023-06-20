const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailsUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
});

const Products = new mongoose.model('product',productSchema);

module.exports=Products;