import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title: {type: string , required: true},
    subTitle : {type: String}, 
    title: {type: String, required: true  },
    discription : {type: string , required: true},
    category: {type: String , required : true},
    image: {type: Boolean , required : true},
    isPublished : {type: String , required : true},

},{timestamps:true})