const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const workers = await connection('workers').select('*');
    
        return response.json(workers);
    },    

    async create(request, response) {
        const { worName, worEndereco, worNumero, worComplemento, worBairro ,worCidade, worUf, worEmail, worWhatsApp, worUsuario, worSenha, worAvatar } = request.body;
    
        const [worId] = await connection('workers').insert({
            worName, 
            worEndereco, 
            worNumero, 
            worComplemento, 
            worBairro,
            worCidade, 
            worUf, 
            worEmail, 
            worWhatsApp, 
            worUsuario, 
            worSenha, 
            worAvatar, 
        });
           
        return response.json({worId});
    }
};

