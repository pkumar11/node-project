const express = require("express");
const router = express.Router(); //Router function
//Models
var User = require("../../models/users");


router.get("/",(req,res)=>{
    User.find({},function(err,data){
        if(err){
            throw err;
        }
        else{
            res.json(data);
        }
    });
});


router.post("/",(req,res)=>{
    var email = req.body.email;
    var password = req.body.pwd;
    var cpassword=req.body.cpwd;
    var ph=req.body.ph;
    var users = new User();
    users.email = email;
    users.pwd = password;
    users.cpassword=cpassword;
    users.ph=ph;
    users.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.json({"Status":"Data Sent!"});
        }
    });

});

// router.delete("/:id",(req,res)=>{
//     User.remove({email : req.params.id},function(err){
//         if(err){
//             throw err;
//         }
//         else{
//             res.json({"Status":"Deleted Document"});
//         }
//     });
// });

// router.put("/:id",(req,res)=>{
//     User.findById(req.params.id,function(err,user){
//         if(err){
//             throw err;
//         }
//         user.email = req.body.email;
//         user.pwd = req.body.pwd;
//         user.save(function(err){
//             if(err){
//                 throw err;
//             }
//             else{
//                 res.json({"Status": "Document Updated"})
//             }
//         });

//     });
// });

module.exports = router;

