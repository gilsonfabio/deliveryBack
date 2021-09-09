const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const couriers = await connection('couriers').select('*');
    
        return response.json(couriers);
    },    

    async create(request, response) {
        const { couName, couEndereco, couNumero, couComplemento, couBairro ,couCidade, couUf, couEmail, couWhatsApp, couUsuario, couSenha, couAvatar } = request.body;
    
        const [couId] = await connection('couriers').insert({
            couName, 
            couEndereco, 
            couNumero, 
            couComplemento, 
            couBairro,
            couCidade, 
            couUf, 
            couEmail, 
            couWhatsApp, 
            couUsuario, 
            couSenha, 
            couAvatar, 
        });
           
        return response.json({couId});
    },

    async login(request, response) {
        let couId = request.params.couId;
        const couriers = await connection('couriers')
            .where('couId', request.params.couId)
            .select('*')
            .first();
          
        if (!couriers) {
            return response.status(400).json({ error: 'No Couriers found with this ID'});
        } 
        
        console.log(couriers);
        
        return response.json(couriers);
    },
};
