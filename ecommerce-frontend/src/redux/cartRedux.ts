import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { product } from "../types/types";
// export type CartItem = {
// 	productId: string;
// 	photo: string;
// 	name: string;
// 	price: number;
// 	quantity: number;
// 	stock: number;
//   };
  
export type ShippingInfo = {
	address: string;
	city: string;
	state: string;
	country: string;
	pinCode: string;
  };
  
  interface CartState {
	products: product[];
	quantity: number;
	total: number;
	productId:number;
	subtotal: number,
	tax: number,
	shippingCharges: number,
	discount: number,
	shippingInfo: ShippingInfo;
  }

  const initialState: CartState = {
	products: [],
	quantity: 0,
	productId:1,
	subtotal: 0,
	total: 0,
	tax: 0,
	shippingCharges: 0,
	discount: 0,
	 shippingInfo: {
	 	address: "",
	 	city: "",
	 	state: "",
	 	country: "",
	 	pinCode: "",
	   },
  };

export const cartReducer=createSlice({
	name:"cartReducer",
	initialState,
	reducers:{
		addToCart:(state,action:PayloadAction<product>)=>{
			const index=state.products.findIndex((i)=>i.productId === action.payload.productId)
			if(index !==-1){
				state.products[index]=action.payload;

			}

			state.quantity+=1 ;
			state.products.push(action.payload) ;
			// state.total+=action.payload.price * action.payload.quantity;
		},

		removeCartItem:(state,action)=>{
			state.products.filter((i)=>i.productId!==action.payload)


		},

		calculatePrice:(state)=>{
			state.subtotal=state.products.reduce((acc,i)=>acc+i.price * i.quantity,0);
			state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
			state.tax = Math.round(state.subtotal * 0.18);
			state.total=state.subtotal + state.tax + state.shippingCharges - state.discount;




		}
}
})

export const {addToCart,removeCartItem,calculatePrice}=cartReducer.actions ;
//  export default cartReducer.reducer ;