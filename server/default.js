import  Product  from "./model/ProductSchema.js";
import { products } from "./constants/data.js";


const DefaultData = async () => {
    try {
    //   await Product.deleteMany({}); 
        await Product.insertMany(products);
        console.log("Default Data Inserted Successfully");
    } catch (error) {
        console.log("Error while inserting default data", error.message);
    }
};





export default DefaultData;