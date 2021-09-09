const connection = require('../database/connection');

module.exports = { 
    async create(request, response) {
        const { email } = request.body;
        const { senha } = request.body;

        const user = await connection('users')
            .where('usrEmail', email)
            .where('usrSenha', senha)
            .select('usrId', 'usrName')
            .first();

        if (!user) {
            return response.status(400).json({ error: 'No User found with this ID'});
        }

        return response.json(user);
    },

    async login(request, response) {
        let email = request.params.email;
        let senha = request.params.senha;
        
        console.log(email);
        console.log(senha);

        const usuarios = await connection('users')
            .where('usrEmail', request.params.email)
            .where('usrSenha', request.params.senha)
            .select('*')
            .first();
          
        if (!usuarios) {
            return response.status(400).json({ error: 'No User found with this ID'});
        } 
        
        console.log(usuarios);
        
        return response.json(usuarios);
    },
}