import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

createApi({
	reducerPath:"productApi",
	baseQuery:fetchBaseQuery({
		baseUrl:'/api/v1/product'
	}),
	tagTypes:["product"],
	endpoints:(builder)=>({
		latestProducts:builder.query({
			query:()=>"latest",
			providesTags: ["product"],
		}),

		allProducts:builder.query({
			query:(id)=>
				`admin-products?id=${id}`,
				providesTags: ["product"],
			
		}),

		createProduct:builder.mutation({

			query:({formData,id})=>({
				url:`new?id=${id}`,
				method:"POST",
				body:formData,
				
			}),
			invalidatesTags:["product"]
		}),

		updateProduct:builder.mutation({
			query:({formData,userId,productId})=>({
				url:"${productId}?id=${userId}",
				method:"POST",
				body:formData,

			}),
			invalidatesTags: ["product"],


		}),

		searchProducts:builder.query({
			query:({ price, search, sort, category, page })=>{
				let base = `all?search=${search}&page=${page}`;
				if(price) base+=`&price=${price}`;
				if(sort) base+= `&sort=${sort}`;
				if(category) base+= `&category=${category}`;
				return base ;
				

			},
			providesTags: ["product"],

		}),


		productDetails:builder.query({

			query:(id)=>id,
			providesTags: ["product"],

		})





	})
})