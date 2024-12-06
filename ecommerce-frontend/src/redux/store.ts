import { configureStore } from "@reduxjs/toolkit";
import{ cartReducer} from './cartRedux'
import { userAPI } from "./api/userApi";


export const store =configureStore({
	reducer:{
		[userAPI.reducerPath]: userAPI.reducer,
		[cartReducer.name]: cartReducer.reducer,
	},

	middleware: (gDM) => gDM().concat(  userAPI.middleware)

	
});
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
