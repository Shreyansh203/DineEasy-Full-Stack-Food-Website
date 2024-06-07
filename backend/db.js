const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://agrawalshreyansh2003:vy47FZ7rwJjmjHoe@cluster0.0ywgt.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0';
const mongoURI = 'mongodb://agrawalshreyansh2003:vy47FZ7rwJjmjHoe@cluster0-shard-00-00.0ywgt.mongodb.net:27017,cluster0-shard-00-01.0ywgt.mongodb.net:27017,cluster0-shard-00-02.0ywgt.mongodb.net:27017/mern?ssl=true&replicaSet=atlas-nlq1qu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongodb = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Server");

        // const fetched_data = await mongoose.connection.db.collection("foodmern");
        // const data = fetched_data.find({}).toArray();
        // global.food_items = data;
        // console.log(global.food_items)
        const fetched_data = await mongoose.connection.db.collection("foodmern").find({}).toArray();
        global.food_items = fetched_data;
        const fetched_data1 = await mongoose.connection.db.collection("foodmern2").find({}).toArray();
        global.foodcategory = fetched_data1;
        //console.log(global.foodcategory);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongodb;
