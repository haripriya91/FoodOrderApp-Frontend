export class restaurants {
    restnt_id!: number;
    name!: string;
    cuisine!: string[];
    openingHours!: string;
    imageUrl!: string;
    location!: {
        city: string;
        address: string;
        zipcode: string;
      };
      contact!: {
        phone: string;
        email: string;
      };
} 