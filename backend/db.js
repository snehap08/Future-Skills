const mongoose = require ('mongoose');

const connectDB = async()=> {
    try {
        const conn = await mongoose.connect('mongodb+srv://snehapandey1208:sneha1234@cluster0.xqhvm.mongodb.net/helpcenter?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB Connected`);
}catch(error){
    console.error(error);
    process.exit(1);
}
};

module.exports = connectDB;