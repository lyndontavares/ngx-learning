import { Contact } from '@app/contacts/contact.interface';
import { InvoiceItem } from './invoice-item.interface';
import { InvoicePayment } from './invoice-payment.interface';

export interface Invoice {
    id: string;
    invoiceId: number;
    reference: string;
    date: Date;
    contact: Contact;
    description: string;
    subtotal: number;
    tax: number;
    total: number;
    remainderDue: number;
    posted: boolean;
	paid: boolean;
}