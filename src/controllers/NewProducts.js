import { Request, Response } from 'express';
import  connection  from '../database/connection'; 

export default class ClassesController {
    
    async newcreate(request: Request, response: Response) {
        const {proTitulo, proSubTitulo, proDescricao, proUrlphoto, proPrecoBase, proStatus, proDeliveryId } = request.body;
    
        console.log(request.body);

        const [proId] = await connection('products').insert({
            proTitulo, 
            proSubTitulo, 
            proDescricao, 
            proUrlphoto, 
            proPrecoBase, 
            proStatus, 
            proDeliveryId
        });

        const adpProductId = proId[0];
        const adpAddicionalId = '';
        
        
    }    
}