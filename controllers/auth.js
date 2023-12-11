const User = require('../models/user');
const jwt = require('jsonwebtoken');
const keys = require('../config/config');

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email});
    if (candidate){
        const passwordResult = req.body.password == candidate.password;
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60});
            res.status(200).json({
                token: `Bearer p${token}`
            });

        } else {
            res.status(401).json({message:"Неправильный пароль."});
        }

    } else {
        res.status(404).json({message:"Данной учетной записи не существует."})
    }
}

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email:req.body.email});
    if (candidate){
        res.status(409).json({
            message:"Данная учетная запись уже существует."
        });
    } else {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })

        try {
            await user.save();
            res.status(201).json(user);  
        }
        catch(e){
            console.log(e);
        }
    }
}