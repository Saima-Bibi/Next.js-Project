import mongoose from 'mongoose'

const feedbackSchema =  new mongoose.Schema({
    appId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'App',
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

const feedbackModel =  mongoose.models.Feedback || mongoose.model('Feedback',feedbackSchema)
export default feedbackModel
