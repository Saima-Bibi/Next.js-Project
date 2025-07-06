import mongoose from 'mongoose'

const appSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

const appModel =  mongoose.models.App || mongoose.model('App', appSchema);
export default appModel
