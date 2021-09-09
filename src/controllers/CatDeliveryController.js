const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const category = await connection('catDelivery').select('*');
    
        return response.json(category);
    },    

    async create(request, response) {
        const { ctdDeliveryId, ctdCategoryId } = request.body;
    
        const [ctdId] = await connection('catDelivery').insert({
            ctdDeliveryId, 
            ctdCategoryId 
        });
           
        return response.json({ctdId});
    }
};
