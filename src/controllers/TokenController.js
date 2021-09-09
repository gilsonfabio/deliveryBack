const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const toknro = await connection('token').select('*');
    
        return response.json(toknro);
    },    

    async create(request, response) {
        const { token, tokStatus } = request.body;        
        const pushToken = request.body.expoPushToken;

        const user = await connection('token')
            .where('token', pushToken)
            .select('tokId')
            .first();
    
            if (!user) {
                const [tokId] = await connection('token').insert({
                    token: pushToken, 
                    tokStatus, 
                }).catch('Erro no cadastro do Token!');

                return response.json({tokId});
            }
    }
};

