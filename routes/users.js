var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { User, Pet } = require("../models")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req,res){ // route d'inscription
  try {
    User.create({
      Nom:req.body.Nom,
      Prénom:req.body.Prénom,
      Mail:req.body.Mail,
      Téléphone:req.body.Téléphone,
      User_name:req.body.User_name,
      Mot_de_passe:req.body.Mot_de_passe,
      Nom_statut:req.body.Nom_statut
    }).then(() => {
      res.send(req.body.Prénom + " Ajouté(e)");
    });

  } catch (error) {
    console.error(error);  
  }
});

router.post('/addPet', function(req,res){ // route d'ajout d'animal
  try {
    Pet.create({
      Nom:req.body.pet.Nom, 
      Genre:req.body.pet.Genre, 
      Race:req.body.pet.Race, 
      Age:req.body.pet.Age,
      user_id:req.body.id
    }).then(() => {
      res.send(req.body.pet.Nom + " Ajouté(e)");
    });
  } catch (error) {
    console.error(error);  
  }
});

router.post('/connexion', async(req,res,next)=>{ // route de connexion
    const user = await User.findOne({ where : {Mail : req.body.Mail}});
    if(user){
      const password_valid = await bcrypt.compare(req.body.Mot_de_passe,user.Mot_de_passe);
      if(password_valid){
          //token = jwt.sign({ "id" : user.id,"email" : user.Mail,"first_name":user.Préno },process.env.SECRET);
          res.status(200).json({ "connexion" : "réussi" });
      } else {
        res.status(400).json({ error : "Password Incorrect" });
      }
    
    }else{
      res.status(404).json({ error : "User does not exist" });
    }
});

module.exports = router;
