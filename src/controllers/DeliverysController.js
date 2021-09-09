const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const delivery = await connection('deliverys').select('*');
    
        return response.json(delivery);
    },
    
    async list (request, response) {
        let categoryId  = request.params.catId;
        //console.log(categoryId);
                
        const deliverys = await connection('catDelivery')
        .where('ctdCategoryId', request.params.catId )
        .join('deliverys', 'deliverys.delId', '=', 'catDelivery.ctdDeliveryId')
        .select(['catDelivery.*', 'deliverys.delRazao', 'deliverys.delNomFantasia', 'deliverys.delEmail', 'deliverys.delWhatsApp', 'deliverys.delUrlphoto']);
     
        //console.log(deliverys);

        return response.json(deliverys);
    }, 

    async create(request, response) {
        const { delRazao, 
                delNomFantasia, 
                delEndereco, 
                delNumero, 
                delComplemento, 
                delBairro, 
                delCidade, 
                delUf, 
                delEmail, 
                delWhatsApp, 
                delUsuario, 
                delSenha, 
                delResponsavel, 
                delUrlphoto } = request.body;
    
        const [delId] = await connection('deliverys').insert({
            delRazao, 
            delNomFantasia, 
            delEndereco, 
            delNumero, 
            delComplemento, 
            delBairro, 
            delCidade, 
            delUf, 
            delEmail, 
            delWhatsApp, 
            delUsuario, 
            delSenha, 
            delResponsavel, 
            delUrlphoto
        });
           
        return response.json({delId});
    },

    async signIn(request, response) {
        let user = request.params.email;
        let senha = request.params.password;

        console.log(user, senha);

        const delivery = await connection('deliverys')
            .where('delEmail', user)
            .where('delSenha', senha)
            .select('delRazao', 'delEmail', 'delUrlphoto')
            .first();
          
       // if (!delivery) {
       //     return response.status(400).json({ error: 'No Delivery found with this ID'});
       // }    

        console.log(delivery);    

        return response.json(delivery);
    },
};
