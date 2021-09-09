const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const district = await connection('districts').select('*');
    
        return response.json(district);
    },    

    async create(request, response) {
        const { disDescricao, disCity } = request.body;
    
        const [district] = await connection('districts').insert({
            disDescricao, 
            disCity
        });
           
        return response.json({district});
    }
};
