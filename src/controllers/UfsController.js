const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const ufs = await connection('ufs').select('*');
    
        return response.json(ufs);
    },    

    async create(request, response) {
        const { ufId, ufDescricao } = request.body;
    
        await connection('ufs').insert({
            ufId, 
            ufDescricao
        });
           
        return response.json({ufId});
    }
};
