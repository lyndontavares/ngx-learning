export interface Expense {
    id: string;
    expenseId: number;
    reference: string;
    category: string;
    type: string;
    description: string;
    date: Date;
    receiptReference: string;
    nominal: {
        id: number;
        name: string;
    };
    value: number;
    taxCode: {
        id: number;
        name: string;
        rate: number;
    };
    tax: number;
    total: number;
}