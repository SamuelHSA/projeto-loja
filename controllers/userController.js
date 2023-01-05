const UserService = require('../services/UserService');

const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;   

    if (!name || !email || !password) {
        res.status(400).send({msg: "enviar todos os campos para o registro" });
    }

    const User = await UserService.create(req.body);

    if(!User) {
        return res.status(400).send({msg: 'Erro ao criar usuário'});
    }

    res.status(201).send ({
        msg: "Usuário criado com sucesso",
        User: {
            user: User._id,
            name,
            email,
        },
    });

    } catch (error) {
        console.log(error);
            if(create) {
                return res.status(401).json({error: 'Já existe um usuário com esse gmail'});
            }
    }

};

module.exports = {create};