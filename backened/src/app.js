//REQUIRING MODULES
const express = require('express');
const fs = require('fs');
const path = require('path');
const Register = require('./MongoDB/model/register');
const port = process.env.PORT ||3000;
const app = express();
require("./mongodb/db/conn");
const {v4 : uuidv4} = require('uuid')
//for json URL
app.use(express.json());
//for URL Encoding
app.use(express.urlencoded({extended:false}));
const bcrypt = require('bcryptjs');





//creating home page FORM signup Customer detail 
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../frontened/index.html"));
})

//register post
app.post("/",async (req,res)=>{

     const pass = req.body.password;
     const pa = bcrypt.hashSync(pass,10);
    const Registeruser = new Register({
        uuid: "$"+uuidv4(),
        user_name :req.body.name,
        user_email :req.body.email,
        user_password :pa,
        total_order :"1",
        created_at :Date(),
        last_logged_in: Date()
    
    })
    const registered = await Registeruser.save();
    
})
// console.log(uuid);

app.get("/detail/:user_id",async (req,res)=>{
  
    console.log(req.params.user_id);

    const getuser = async () =>{
        const result = await Register.findOne({uuid:
            req.params.user_id});
        console.log(result.last_logged_in);
        return result;    
    }
    getuser();
    const a = await getuser();
    console.log(a);
    res.send(a);
})

app.get("/delete/:user_id",async(req,res)=>{
    const deleteuser = async() =>{
        const result = await Register.deleteOne({uuid:req.params.user_id});
    }
    deleteuser();
    res.send("delete "+req.params.user_id);    

})

app.get("/update",(req,res)=>{

    res.sendFile(path.join(__dirname,'../../frontened/update.html'));

})
app.post("/update",async(req,res)=>{
    const pass = req.body.password;
    const pa = bcrypt.hashSync(pass,10);

    const update = await Register.updateOne({
        uuid:req.body.useridup
    },
    {
        $set:{
            user_name :req.body.name,
        user_email :req.body.email,
        user_password :pa,
        }
    })

})

app.get("/insert",(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontened/insert.html'));
})
app.post("/insert",async (req,res)=>{
    const pass = req.body.password;
    const pa = bcrypt.hashSync(pass,10);
    const Registeruser = new Register({
        uuid: uuidv4(),
        user_name :req.body.name,
        user_email :req.body.email,
        user_password :pa,
        total_order :"1",
        created_at :Date(),
        last_logged_in: Date()
    
    })
    console.log(req.body.image);
    const registered = await Registeruser.save();
    
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../frontened/login.html"))
})
app.post("/login",async (req,res)=>{
   try{
      const email = req.body.email;
       const password = req.body.password;
       // const lph = bcrypt.hashSync(password,10);
        
       const useremail = await Register.findOne({user_email:email});
       // res.send(useremail.password);
        console.log(useremail.user_password);


        //----------->>>FOR COMAPRING BCRYPT ON LOGIN
        
        const isokay = bcrypt.compare(password,useremail.user_password);
    
        if(isokay){
            res.send("you r signed up");
           //cookie set
            
        }else{
            res.send("you entered wrong password")
        };

     }catch{
         res.status(400).send("invalid email");
    }
 })

//LISTENING SERVER ON PORT
app.listen(port,()=>{
    console.log("server is running at port "+port);
})
