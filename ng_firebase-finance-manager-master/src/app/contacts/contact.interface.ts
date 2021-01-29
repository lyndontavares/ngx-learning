export interface Contact {
	id: string;
    contactId: number;
    name: string;
    address: {
        addressLine1: string;
        addressLine2: string;
        townCity: string;
        county: string;
        postcode: string;
    };
    primaryTelephone: string;
    secondaryTelephone: string;
    primaryEmail: string;
    secondaryEmail: string;
    bank: {
        bankName: string;
		bankReference: string;
        accountNumber: string;
        sortCode: string;
    };
    vatNumber: string;
}
