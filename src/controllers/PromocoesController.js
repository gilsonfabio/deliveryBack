const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const promocoes = await connection('promocoes').select('*');
    
        return response.json(promocoes);
    },    

    async create(request, response) {
        const { prmProductId, prmUrlphoto } = request.body;
    
        const [prmId] = await connection('promocoes').insert({
            prmProductId, 
            prmUrlphoto, 
        });
           
        return response.json({prmId});
    }
};