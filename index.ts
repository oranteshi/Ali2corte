import express from 'express';
import cors from 'cors';
import paymentRoute from './src/payments/infrestructure/routes/payment.route';

const app = express();
const PORT = '3000';

let corOptions = {
    origin: '*'
};

app.use(cors(corOptions));
app.use(express.json());

app.use('/pagos', paymentRoute);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ', PORT)
})