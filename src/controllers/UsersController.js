const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },    

    async create(request, response) {
        const { usrName, usrEndereco, usrNumero, usrComplemento, usrBairro ,usrCidade, usrUf, usrEmail, usrWhatsApp, usrUsuario, usrSenha, usrAvatar } = request.body;
    
        const [usrId] = await connection('users').insert({
            usrName, 
            usrEndereco, 
            usrNumero, 
            usrComplemento, 
            usrBairro,
            usrCidade, 
            usrUf, 
            usrEmail, 
            usrWhatsApp, 
            usrUsuario, 
            usrSenha, 
            usrAvatar, 
        });
           
        return response.json({usrId});
    }
};

