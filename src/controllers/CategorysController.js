const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const category = await connection('categorys').select('*');
    
        return response.json(category);
    },    

    async create(request, response) {
        const { catDescricao } = request.body;
    
        const [catId] = await connection('categorys').insert({
            catDescricao
        });
           
        return response.json({catId});
    }
};
