import Product from '../model/ProductSchema.js';


export const getProducts = async (request,response) => {
    try{
        const products=await Product.find({});
        response.status(200).json(products);
        }catch (error){
            request.status(404).json({message:error.message});

        }

} 

export const getProductById=async(request,response)=>{
    try{
        const id=request.params.id;
        const product=await Product.findOne({'id':id})

        response.status(200).json(product);
    }
    catch(error){
        response.status(500).json({message:error.message})

    }
}