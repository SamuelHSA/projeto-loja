const UserService = require('../services/UserService');

const create = async (req, res) => {
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
};

module.exports = {create};