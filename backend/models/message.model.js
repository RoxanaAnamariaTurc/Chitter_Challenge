import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    text: String,
    timestamp: Date,
    username: String

});

const Message = new mongoose.model("Message", messageSchema);

export default Message;