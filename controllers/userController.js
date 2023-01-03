const create = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).send({msg: "enviar todos os campos para registros" });
    }

    res.status(201).send ({
        msg: "Usuário criado com sucesso",
        User: {
            name,
            email
        },
    });
};

module.exports = {create};