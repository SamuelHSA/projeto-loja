const UserService = require('../services/UserService');

const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;   

    if (!name || !email || !password) {
        res.status(400).send({msg: "send all fields to record" });
    }

    const User = await UserService.create(req.body);

    if(!User) {
        return res.status(400).send({msg: 'Error creating user'});
    }

    res.status(201).send ({
        msg: "User created successfully",
        User: {
            user: User._id,
            name,
            email,
        },
    });

    } catch (error) {
        console.log(error);
            if(create) {
                return res.status(401).json({error: 'There is already a user with this gmail'});
            }
    }
};

module.exports = {create};