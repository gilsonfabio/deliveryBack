const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {

        const deliveryId = request.params.lojaId;
        //console.log(deliveryId);

        const products = await connection('products') 
        .where('proDeliveryId', request.params.lojaId) 
        .select('*');
    
        return response.json(products);
    },    

    async create(request, response) {
        const { proTitulo, proSubTitulo, proDescricao, proUrlphoto, proPrecoBase, proStatus, proDeliveryId } = request.body;
    
        const [proId] = await connection('products').insert({
            proTitulo, 
            proSubTitulo, 
            proDescricao, 
            proUrlphoto, 
            proPrecoBase, 
            proStatus, 
            proDeliveryId
        });
           
        return response.json({proId});
    },  

    async newcreate(request, response) {
        const {proTitulo, proSubTitulo, proDescricao, proUrlphoto, proPrecoBase, proStatus, proDeliveryId} = request.body;
    
        //console.log(request.body);

        const [proId] = await connection('products').insert({
            proTitulo, 
            proSubTitulo, 
            proDescricao, 
            proUrlphoto, 
            proPrecoBase, 
            proStatus, 
            proDeliveryId
        });

        adpProductId = proId;
        adpAddicionalId = 1;

        //const addSchedule = schedule.map((scheduleItem) => {
        //    return {adpAddicionalId: scheduleItem.value };
            
            const [adpId] = await connection('addproducts').insert({
                adpProductId, 
                adpAddicionalId 
            });
        //})

        return response.json({adpId});
    }

};


