const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        let proId  = request.params.productId;
        console.log(proId);

        const addicionals = await connection('addproducts')
        .where('adpProductId', request.params.productId )
        .join('addicionals', 'addicionals.addId', '=', 'addproducts.adpAddicionalId')
        .select(['addproducts.*', 'addicionals.addDescricao']);
    
        return response.json(addicionals);
    },    

    async create(request, response) {
        const { adpProductId, adpAddicionalId } = request.body;
    
        const [adpId] = await connection('addproducts').insert({
            adpProductId, 
            adpAddicionalId           
        });
           
        return response.json({adpId});
    }
};
