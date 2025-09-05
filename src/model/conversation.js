import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
 
     title: {
      type: String, 
      default: "New Chat",
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    
  
  
},{timestamp:true});

const conversationModel =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", conversationSchema);



export default conversationModel
