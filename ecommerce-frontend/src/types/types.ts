export type User = {
	name: string;
	email: string;
	photo: string;
	gender: string;
	role: string;
	dob: string;
	_id: string;
  };

export interface product {
	productId: number;
	name: string;
	photo:string;
	stock:number;
	price: number;
	quantity: number;
  }