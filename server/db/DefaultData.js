const Products = require('./models/productSchema');
const productsData = require('./Const/productsData');

const DefaultData = async()=>{
    try{
        await Products.deleteMany({});
        const storeData = await Products.insertMany(productsData);
        // console.log(storeData);
    }catch(err){
        console.log(err.message);
    }
};

module.exports = DefaultData;