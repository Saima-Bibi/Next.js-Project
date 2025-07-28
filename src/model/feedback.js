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
        type: String,
        required:true
    },
     userName:{
        type: String,
        required:true
    },
     submittedBy:{
        type: String,
        required:true
    },
    status:{
        type:String,
        required: false,
        default:'Initiated'
    }
},{timestamps:true})

const feedbackModel =  mongoose.models.Feedback || mongoose.model('Feedback',feedbackSchema)
export default feedbackModel
