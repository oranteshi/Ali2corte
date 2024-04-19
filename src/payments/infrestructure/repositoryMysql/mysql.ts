import { query } from "../../../db/db.config";
import { Payments } from "../../dominio/entities/pagos";
import { PagosService } from "../../dominio/services/pagos.service";


export class PaymentRepository implements PagosService {
    createPayment = async(payments: Payments): Promise<any> => {
        const sql = 'INSERT INTO Pagos(nombre_cliente, cantidad) VALUES (?, ?)';
        const params = [payments.nombre_cliente, payments.cantidad];
        
        try {
            const res = await query(sql, params);
            return res;
        } catch ( error ) {
            console.log('Hubo un error al crear el pago: ', error);
        }
    }
}