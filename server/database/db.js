import mongoose from 'mongoose';
import 'dotenv/config'

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process on failure
    }
};

export default Connection;