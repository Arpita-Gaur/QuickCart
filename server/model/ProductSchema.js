import mongoose from 'mongoose';



const productshcema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    description: String,
    title: Object,
    quantity: Object,
    discount: String,
    tagline: String,
    price:Object
});


const Product = mongoose.model('product', productshcema);

export default Product;