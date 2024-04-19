import { Payments } from "../../dominio/entities/pagos";
import { PagosService } from '../../dominio/services/pagos.service';

export class PaymentServiceImpl implements PagosService {

    constructor(private paymentRepository : PagosService) {}

    async createPayment(paymentData: Payments): Promise<Payments> {
        const createPayment = await this.paymentRepository.createPayment(paymentData);
        return createPayment;
    }
}