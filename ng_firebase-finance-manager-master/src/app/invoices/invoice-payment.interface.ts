import { Bank } from './bank.interface';

export interface InvoicePayment {
    id: string;
    paymentId: number;
    reference: string;
    date: Date;
    amount: number;
    bank: Bank;
}