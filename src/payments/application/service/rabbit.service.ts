import { conectarARabbit } from "../../../rabbit/config.rabbit";
import { Payments } from "../../dominio/entities/pagos";
import { PaymentsMqtt } from "../../dominio/services/pagos.mqtt";


export class PaymentRepositoryMqtt implements PaymentsMqtt {

    async sendPayments(payments: Payments): Promise<boolean> {
        try {
            const channel = await conectarARabbit();
            await channel?.sendToQueue('pagos', Buffer.from(JSON.stringify({message: 'Pago creado', payments})));
            console.log('Pago enviado a rabbit: ', payments);
            await channel?.close();
            return true;
        } catch ( error ) {
            console.error('Error al enviar el pago a rabbit: ', error);
            return false;
        }
    }
}