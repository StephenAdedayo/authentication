const User = require('../model/useModel')


const register = async (req, res) => {
     const {fullName, email, password} = req.body


     const userExists = await User.findOne({email})

     if(userExists){
        res.status(400).json({error: 'user already exists'})
     }

    try {
        const user = await User.create({fullName, email, password})
        if(user) {
           res.status(201).json({message: 'user registered successfully', user})
        }
   
    } catch (error) {
        res.status(500).json({error: 'invalid user data'})
    }
}


module.exports = {register}