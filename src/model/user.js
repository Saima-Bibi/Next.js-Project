import mongoose from 'mongoose'

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const userModel =  mongoose.models.User || mongoose.model('User',userSchema)
export default userModel
