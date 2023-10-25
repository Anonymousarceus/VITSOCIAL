const mongoose= require("mongoose");
const connect=mongoose.connect();
connect.then(()=>{
    console.log("database connected succesfully");
})
.catch(()=>{
    console.log("database cannot be connected");
})
const LoginSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const info=new mongoose.model('info', LoginSchema);
module.exports=info



