import { Payments } from "../entities/pagos";

export interface PaymentsMqtt {
    sendPayments(Payments: Payments): Promise<any>;
}