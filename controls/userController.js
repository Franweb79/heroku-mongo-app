const mongoose=require('mongoose');

const User=require('../models/userModel');

let createUser=(req,res)=>
{
    
     /*as it receives parameters from a POST request, which go on the req.body thanks to the bodyparser middleware dependecy,
     then we have to use the REQ and RES object parameters, to operate with them*/  
    

    let user1=new User({

        /*this new Date() doesn´t work on robo3t, just to let know
        https://stackoverflow.com/questions/42850211/how-can-i-save-new-date-in-mongodb

        */
        "createdAt":new Date(),
        "firstName":req.body.firstName,
        "lastName":req.body.lastName

    });

    user1.save((err)=>{

        if(err)
        {
            throw err;
        }
        else
        {
            console.log(user1+"usuario creada en la bbdd");
            

        }

        /*it is going to be called on the index, so path is starting from index*/
        res.render('pages/view_createdUser');
    });
}

let getUsers=(req,res)=>
{
    User.find({}).exec((err,arrayUsers)=>{

        if(err)
        {
            res.status(500).send("Server error");
        }
        else{/*if there is no error, we use the array obtained to pass it to the view, then we can operate
            with it on the view*/

                /*if array has 0 users, will show one text; if more than 0, a table with the users
                but that will be done on the view irself*/
            res.render('pages/view_getUsers',{miArray:arrayUsers});

          


        }

    });
}

module.exports={
    createUser,
    getUsers
}