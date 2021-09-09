const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const commands = await connection('commands').select('*');
    
        return response.json(commands);
    },    

    async create(request, response) {
        const { comDatPedido, 
                comHorPedido, 
                comIniPreparo, 
                comFimPreparo, 
                comIniEntrega, 
                comFimEntrega, 
                comVlrTotal, 
                comVlrDesconto, 
                comVlrPagar, 
                comTipPagto, 
                comTroco, 
                comUserId, 
                comCourierId,
                comStatus } = request.body;
    
        const [comId] = await connection('commands').insert({
            comDatPedido, 
            comHorPedido, 
            comIniPreparo, 
            comFimPreparo, 
            comIniEntrega, 
            comFimEntrega, 
            comVlrTotal, 
            comVlrDesconto, 
            comVlrPagar, 
            comTipPagto, 
            comTroco, 
            comUserId, 
            comCourierId, 
            comStatus
        });
           
        return response.json({comId});
    },

    async atualiza (request, response) {
        const datVazia = '';
        const { deliveryId } = request.params.lojaId;
        const commands = await connection('commands')
        .where('comFimPreparo', datVazia)
        .join('users', 'users.usrId', '=', 'commands.comUserId')    
        .select('commands.*', 'users.usrName');
            
        //console.log(commands);
        
        return response.json(commands);
    },

    async commandItems (request, response) {
        const { commandId } = request.params.commandId;
        const itecommands = await connection('itecommands')
        .where('itcCommandId', request.params.commandId)   
        .join('products', 'products.proId', '=', 'itecommands.itcProductId')
        .select(['itecommands.*', 'products.proTitulo', 'products.proSubTitulo', 'products.proDescricao', 'products.proUrlphoto', 
                 'products.proPrecoBase', 'products.proStatus','products.proDeliveryId']);
            
        //console.log(itecommands);
        
        return response.json(itecommands);
    },

    async fimPreparo(request, response) {
        const  commandId  = request.params.commandId;
        const  datFimPreparo  = request.params.datPreparo;
                 
        //console.log(commandId);
        //console.log(datFimPreparo);

        //console.log(request.params.commandId);
        //console.log(request.params.datPreparo);

        const coommands =  await connection('commands')
        .where('comId', request.params.commandId)        
        .update('comFimPreparo', datFimPreparo);
 
        return response.status(204).send();
    },

    async search(request, response) {
        const userId = request.params.userId;
        const status = '0';
                
        //console.log(userId);
        const commands =  await connection('commands')
        .where('comUserId', request.params.userId)   
        .where('comStatus', status)     
        .select('*');
 
        //console.log(commands);

        return response.json(commands);
    }
};

