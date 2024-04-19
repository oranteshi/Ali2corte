import { Payments } from "../entities/pagos";

export interface PagosService {
    createPayment(paymentData: Payments): Promise<Payments>;
}