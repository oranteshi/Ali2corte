import { Request, Response } from "express";
import { Payments } from "../../dominio/entities/pagos";
import { PaymentServiceImpl } from "../../application/useCases/payment.usecase";
import { PaymentRepository } from "../repositoryMysql/mysql";
import { PaymentRepositoryMqtt } from "../../application/service/rabbit.service";

const paymentRepository = new PaymentRepositoryMqtt();
const mysqlRepo = new PaymentRepository();
const paymentService = new PaymentServiceImpl(mysqlRepo);


export class PaymentController {
    static async createPayment(req: Request, res: Response): Promise<void> {
        const payments: Payments = req.body;

        await paymentService.createPayment(payments)
        await paymentRepository.sendPayments(payments)

        .then(() => {
            res.status(201).json({
                message: 'El pago fue creado correctamente',
                venta: payments
            });
        })
        .catch((error) => {
            console.error('Hubo un erro al crear el pago: ', error);
            res.status(500).json({
                error: 'Hubo un error al crear el pago'
            });
        });
    }
}