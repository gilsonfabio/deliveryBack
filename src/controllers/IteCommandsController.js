const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const itecommands = await connection('itecommands').select('*');
    
        return response.json(itecommands);
    },    

    async create(request, response) {

        //console.log(request.body);

        const { itcCommandId, itcProductId, itcVlrProduto, itcVlrTotal } = request.body;
    
        const itcId = await connection('itecommands').insert({
            itcCommandId, 
            itcProductId, 
            itcVlrProduto 
        });
           
        //return response.json(itcId);

        var vlrTotal = parseFloat(itcVlrTotal) + parseFloat(itcVlrProduto);  

        const commands =  await connection('commands')
        .where('comId', request.params.cmdId)
        .update('comVlrTotal', vlrTotal);
    
        return response.status(204).send();
    },
    
    async header (request, response) {
        const commandId  = request.params.cmdId;

        //console.log(commandId);

        const commands = await connection('commands')
        .where('comId', request.params.cmdId)           
        .select('*');
            
        //console.log(commands);
        
        return response.json(commands);
    },

    async shopping (request, response) {
        const commandId  = request.params.cmdId;

        //console.log(commandId);

        const itecommands = await connection('itecommands')
        .where('itcCommandId', request.params.cmdId)   
        .join('products', 'products.proId', '=', 'itecommands.itcProductId')
        .join('commands', 'commands.comId', '=', 'itecommands.itcCommandId')
        .select(['itecommands.*', 'products.proTitulo', 'products.proSubTitulo', 'products.proDescricao', 'products.proUrlphoto', 
                 'products.proPrecoBase', 'products.proStatus','products.proDeliveryId', 'commands.comId', 'commands.comDatPedido', 'commands.comHorPedido', 'commands.comVlrTotal']);
            
        //console.log(itecommands);
        
        return response.json(itecommands);
    },

    async delete(request, response) {

        //console.log(request.params);
        
        const cmdId = request.params.cmdId;
        const itcId = request.params.itcId;
        
        await connection('itecommands')
            .where('itcCommandId', cmdId)
            .where('itcId', itcId) 
            .delete();

        return response.status(204).send();
    },

    async update(request, response) {
        //console.log(request.body);

        const { itcCommandId, itcProductId, itcVlrProduto, itcVlrTotal } = request.body;
    
        var vlrTotal = parseFloat(itcVlrTotal) - parseFloat(itcVlrProduto);  

        const commands =  await connection('commands')
        .where('comId', request.params.cmdId)
        .update('comVlrTotal', vlrTotal);
    
        return response.status(204).send();
    },

};
