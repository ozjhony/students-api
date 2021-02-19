
const config=require("config");

const mongodbInfo=config.get("db-connections.mongodb");

const mongoose= require("mongoose");

const connstr= `mongodb+srv://api_rest:${mongodbInfo.password}@cluster0.b9mfd.mongodb.net/${mongodbInfo.dbname}?retryWrites=true&w=majority`;



module.exports=()=>{

  mongoose.connect(connstr);

  mongoose.connection.on("connected",()=>{

        console.log("mongo db connected");
     });

  mongoose.connection.off("disconnected",()=>{

        console.log("mongo db disconnected");
     });
  mongoose.connection.on("error",()=>{

        console.log("mongo db server connection error");

     });

   mongoose.connection.on("SIGINT",()=>{
      mongoose.connection.close(()=>{
        console.log("mongo db shutting down");
      })
    
    });

 
};