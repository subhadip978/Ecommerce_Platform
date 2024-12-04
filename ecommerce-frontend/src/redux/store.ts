import { configureStore } from "@reduxjs/toolkit";
import{ cartReducer} from './cartRedux'
export const store =configureStore({
	reducer:{

		[cartReducer.name]: cartReducer.reducer,
	},
})
export type RootState = ReturnType<typeof store.getState>;