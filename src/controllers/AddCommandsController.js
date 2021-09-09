const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const addcommands = await connection('addcommands').select('*');
    
        return response.json(addcommands);
    },    

    async create(request, response) {
        const { adcCommandId, adcIteCommandId, adcAddicionalId, adcVlrAddicional } = request.body;
    
        const [adcId] = await connection('addcommands').insert({
            adcCommandId, 
            adcIteCommandId, 
            adcAddicionalId, 
            adcVlrAddicional 
        });
           
        return response.json({adcId});
    }
};
