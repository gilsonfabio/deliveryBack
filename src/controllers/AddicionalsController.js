const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const addicionals = await connection('addicionals').select('*');
    
        return response.json(addicionals);
    },    

    async create(request, response) {
        const { addDescricao, addDeliveryId } = request.body;
    
        const [addId] = await connection('addicionals').insert({
            addDescricao,
            addDeliveryId            
        });
           
        return response.json({addId});
    }
};
