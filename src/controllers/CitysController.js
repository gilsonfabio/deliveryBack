const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const citys = await connection('citys').select('*');
    
        return response.json(citys);
    },    

    async create(request, response) {
        const { citDescricao, citUf } = request.body;
    
        const [citId] = await connection('citys').insert({
            citDescricao, 
            citUf
        });
           
        return response.json({citId});
    }
};
