// "use client";

// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import { URL } from '../../api/config'

// // --- Types
// // ---------------------------
// // Types
// // ---------------------------
// interface ModelState {
//   modelpoststatus: string;
//   message: string;
//   mymodel: any[];
//   mymodelstatus: string;
//   modelbyid: any;
//   modelbyidstatus: string;
//   modelupdatestatus: string;
//   modeldeletestatus: string;
//   unverifiedhoststatus: string;
//   Listofunverifiedhost: any[];
//   verifymodelstatus: string;
//   rejectmodelstatus: string;
//   ListofLivehost: any[];
//   Listofhoststatus: string;
//   reviewstats: string;
//   reviewmessage: string;
//   getreviewstats: string;
//   getreviewmessage: string;
//   reviewList: any[];
//   review_delete_stats: string;
//   review_delete_message: string;
//   addcrush_stats: string;
//   addcrush_message: string;
//   getcrush_stats: string;
//   getcrush_message: string;
//   delete_msg_stats: string;
//   delete_msg_message: string;
//   remove_crush_stats: string;
//   remove_crush_message: string;
//   deletmodeImage_stats: string;
//   exclusive_idphoto: string;
//   exclusive_holdphoto: string;
//   exclusive_ids_stats: string;
//   exclusive_docs_stats: string;
//   delete_docs_stats: string;
// }

// // --- Initial State
// const initialState: ModelState = {
//   modelpoststatus: "idle",
//   message: "",
//   mymodel: [],
//   mymodelstatus: "idle",
//   modelbyid: {},
//   modelbyidstatus: "idle",
//   modelupdatestatus: "idle",
//   modeldeletestatus: "idle",
//   unverifiedhoststatus: "idle",
//   Listofunverifiedhost: [],
//   verifymodelstatus: "idle",
//   rejectmodelstatus: "idle",
//   ListofLivehost: [],
//   Listofhoststatus: "idle",
//   reviewstats: "idle",
//   reviewmessage: "",
//   getreviewstats: "idle",
//   getreviewmessage: "",
//   reviewList: [],
//   review_delete_stats: "idle",
//   review_delete_message: "",
//   addcrush_stats: "idle",
//   addcrush_message: "",
//   getcrush_stats: "idle",
//   getcrush_message: "",
//   delete_msg_stats: "idle",
//   delete_msg_message: "",
//   remove_crush_stats: "idle",
//   remove_crush_message: "",
//   deletmodeImage_stats: "idle",
//   exclusive_idphoto: "",
//   exclusive_holdphoto: "",
//   exclusive_ids_stats: "idle",
//   exclusive_docs_stats: "idle",
//   delete_docs_stats: "idle",
// };

// // --- Helper for axios errors
// const catchError = (err: any) => {
//   if (!err.response?.data?.message) throw "Check internet connection";
//   throw err.response.data.message;
// };

// // --- Thunks

// export const createmodel = createAsyncThunk(
//   "model/createmodel",
//   async (data: any) => {
//     try {
//       const formData = new FormData();
//       data.photolink?.forEach((img: File) =>
//         formData.append("modelfiles", img)
//       );
//       formData.append(
//         "data",
//         JSON.stringify({
//           /* relevant fields */
//         })
//       );
//       formData.append("token", data.token);
//       data.photolink?.forEach((img: File) =>
//         formData.append("modelFiles", img)
//       );
//       const res = await axios.put(`${URL}/model`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       if (res.status !== 200) throw "Error updating your post";
//       return res.data;
//     } catch (err) {
//       catchError(err);
//     }
//   }
// );

// export const getmymodel = createAsyncThunk(
//   "model/getmymodel",
//   async (data: { userid: string; token: string }) => {
//     try {
//       const res = await axios.post(`${URL}/model`, data);
//       return res.data;
//     } catch (err) {
//       catchError(err);
//     }
//   }
// );

// export const getmymodelbyid = createAsyncThunk(
//   "model/getmymodelbyid",
//   async (data: any) => {
//     try {
//       const res = await axios.patch(`${URL}/getmodelbyid`, data);
//       return res.data;
//     } catch (err) {
//       catchError(err);
//     }
//   }
// );

// export const updatemodel = createAsyncThunk(
//   "model/updatemodel",
//   async (data: any) => {
//     try {
//       const formData = new FormData();
//       const updateData = {
//         /* map your update payload */
//       };
//       formData.append("data", JSON.stringify(updateData));
//       formData.append("token", data.token);
//       data.photolink?.forEach((file: File) =>
//         formData.append("updateModelPhotos", file)
//       );
//       const res = await axios.post(`${URL}/editmodel`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       if (res.status !== 200) throw "Error updating";
//       return res.data;
//     } catch (err) {
//       catchError(err);
//     }
//   }
// );

// export const deletemodel = createAsyncThunk(
//   "model/deletemodel",
//   async (data: any) => {
//     try {
//       const info: any = { /* hostid, lists, etc. */ token: data.token };
//       const res = await axios.post(`${URL}/deletemodel`, info);
//       return res.data;
//     } catch (err) {
//       catchError(err);
//     }
//   }
// );

// export const getverifyhost = createAsyncThunk(
//   "model/getverifyhost",
//   async (data: any) => {
//     try {
//       const res = await axios.post(`${URL}/getverifymodel`, data);
//       return res.data;
//     } catch (err) {
//       catchError(err);
//     }
//   }
// );

// // Add any additional thunks (review, crush, etc.) similarly...

// // --- Slice Definition

// const model = createSlice({
//   name: "model",
//   initialState,
//   reducers: {
//     changemodelstatus(state, action: PayloadAction<string>) {
//       Object.keys(state).forEach((key) => {
//         if (typeof (state as any)[key] === "string" && key.endsWith("status")) {
//           (state as any)[key] = action.payload;
//         }
//       });
//     },
//   },
//   extraReducers: (builder) => {
//     // Handle each thunk's pending, fulfilled, rejected states
//     builder
//       .addCase(
//         createmodel.pending,
//         (state) => (state.modelpoststatus = "loading")
//       )
//       .addCase(createmodel.fulfilled, (state, action) => {
//         state.modelpoststatus = "succeeded";
//         state.message = action.payload?.message;
//       })
//       .addCase(createmodel.rejected, (state, action) => {
//         state.modelpoststatus = "failed";
//         state.message = action.error.message || "Error creating model";
//       });

//     builder
//       .addCase(getmymodel.pending, (state) => (state.mymodelstatus = "loading"))
//       .addCase(getmymodel.fulfilled, (state, action) => {
//         state.mymodelstatus = "succeeded";
//         state.message = action.payload.message;
//         state.mymodel = action.payload.host;
//       })
//       .addCase(getmymodel.rejected, (state, action) => {
//         state.mymodelstatus = "failed";
//         state.message = action.error.message || "Error fetching models";
//       });

//     builder
//       .addCase(
//         getverifyhost.pending,
//         (state) => (state.Listofhoststatus = "loading")
//       )
//       .addCase(getverifyhost.fulfilled, (state, action) => {
//         state.Listofhoststatus = "succeeded";
//         state.message = action.payload.message;
//         state.ListofLivehost = action.payload.host;
//       })
//       .addCase(getverifyhost.rejected, (state, action) => {
//         state.Listofhoststatus = "failed";
//         state.message = action.error.message || "Error fetching live hosts";
//       });

//     // Repeat similar blocks for getmymodelbyid, updatemodel, deletemodel...
//   },
// });

// // --- Exports
// export const { changemodelstatus } = model.actions;
// export default model.reducer;
