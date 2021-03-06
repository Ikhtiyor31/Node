import mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});

const postSchema = new mongoose.Schema({
     author : {type: String},
     title: { type: String},
     content: { type: String},
     image: {type: String, default: ''},
     createdAt: { type: Date, default: new Date(asiaTime)}
});

export default mongoose.model("Post", postSchema);