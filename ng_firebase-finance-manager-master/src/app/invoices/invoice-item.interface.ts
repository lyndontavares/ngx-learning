export interface InvoiceItem {
	id: string;
	itemId: number;
	description: string;
	quantity: number;
	unitPrice: number;
	subtotal: number;
	taxCode: {
		id: string,
		name: string,
		rate: number
	};
	tax: number;
	total: number;
}