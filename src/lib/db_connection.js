import mongoose from 'mongoose';

let isConnected = false; 

const dbConnection = async () => {
  if (isConnected) {
    return;
  }


  try {
   
    await mongoose.connect(process.env.MONGODBURL);

    isConnected = true;
    console.log('MongoDB Connected!');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    throw error;
  }
};

export default dbConnection;
