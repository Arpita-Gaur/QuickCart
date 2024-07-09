import mongoose from "mongoose";


export const Connection = async(username,password)=>{

    // const URL = mongodb+srv://arpitagaur93:arpita@flipkart.4iqqmma.mongodb.net/?retryWrites=true&w=majority&appName=Flipkart;


    const URL = `mongodb+srv://${username}:${password}@flipkart.4iqqmma.mongodb.net/?retryWrites=true&w=majority&appName=Flipkart` ;

    try{
        await mongoose.connect(URL,{});

        console.log("Database connected successfully");

    }catch(error){
        console.log("Error while connecting to the database",error)
    }
}