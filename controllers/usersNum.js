const User = require('../models/user');

module.exports.userNum = async function(req, res) {
    try{
        let result = await User.find();
        console.log(result.length);
        res.status(201).json(result.length);  

     } catch(err){
        console.log(err);
        res.status(406).json({message:"Непредвиденная ошибка. Попробуйте снова."});  

     }
}