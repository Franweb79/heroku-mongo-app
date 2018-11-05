const express = require('express');
const mongoose=require('mongoose');
const controllers=require('./controls/userController');
const path = require('path');
const PORT = process.env.PORT || 5000
const cool = require('cool-ascii-faces');
const mydb="NOSTRING"; /*it is only to show the code, so no string with sensitive data provided*/

const bodyParser = require('body-parser');

const app=express();

//express routes configuration and some config more*/

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.post('/controls/createUser',controllers.createUser);
app.get('/controls/getUsers',controllers.getUsers);


//connection with monggose pack*/
mongoose.connect(mydb,(err)=>{

  if(!err)
  {
    console.log("successful connection");
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
   


  }else{
    console.log("connection error");

  }
});


 