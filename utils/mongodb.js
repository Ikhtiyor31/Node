import mongoose from 'mongoose';

//3.85.190.97/32

const mongoDB  = async () => {
    mongoose.set('useUnifiedTopology', true);
    const uri = "mongodb+srv://Ikhtiyor:zfgghbh199531@cluster0.ukgsg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        return true;
    } catch (err) {
        return false;
    }
};
export default mongoDB;

