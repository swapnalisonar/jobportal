const mongoose =require("mongoose");
dbConnect();

async function dbConnect(){
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb+srv://swapna:jobportal@cluster0.sf8iwr5.mongodb.net/jobportal",{useNewUrlParser:true});
        
        console.log("Mongo db connection success ");




    }
    catch(error){
        console.log("Mongo db connection failed");
    }
}
module.exports=mongoose;
