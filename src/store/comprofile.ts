import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../../api/config"
// import { downloadImage, deleteImage, saveImage } from "../../../api/sendImage";
import axios from "axios";

const initialState = {
    photoLink: '',
    details: '',
    status: 'idle',
    photostatus: '',
    error: null,
    profilephoto: null,
    downloadPhotstats: "idle",
    profile: {},
    getprofileidstatus: 'idle',
    editData: {},
    getedit_stats: "idle",
    getedit_message: "",
    updateEdit_stats: "idle",
    updateEdit_message: ""
}

export const getcomprofile = createAsyncThunk("comprofile/getcomprofile", async data => {

    try {

        let response = await axios.post(`${URL}/getmoreprofile`, data)

        return response.data

    } catch (err) {

        throw (err.response.data.message)


    }


})

export const getprofilephoto = createAsyncThunk("comprofile/getprofilephoto", async data => {
    /*try {
        let response = downloadImage(data, "profile")
        return response
    } catch (err) {
        throw (err)
    }*/
    console.log("Within getprofilephoto: ", data);
    return data;
})


export const getprofilebyid = createAsyncThunk("comprofile/getprofilebyid", async data => {

    try {

        let response = await axios.patch(`${URL}/getprofilebyid`, data)

        return response.data

    } catch (err) {

        throw (err.response.data.message)


    }


})

export const getEdit = createAsyncThunk("comprofile/getEdit", async data => {

    try {

        let response = await axios.post(`${URL}/useredit`, data)

        return response.data

    } catch (err) {

        throw (err.response.data.message)


    }


})

export const updateEdit = createAsyncThunk("comprofile/updateEdit", async data => {

    console.log("Inside updateEdit")

    try {
        // Send data as a FormData
        let formData = new FormData();

        /*let imagelink;

        if (data.deletePhotolink && data.photolink) {
            console.log("inside delete image")
            await deleteImage(data.deletePhotolink, "profile")
        }

        if (data.photolink) {
            console.log("inside delete image")
            imagelink = await saveImage(data.photolink, "profile")
        }

        data.photolink = imagelink*/

        // Prepare the post form data
        const updateData = {
            userid: data.userid,
            // updatePhoto: data.updatePhoto,
            deletePhotolink: data.deletePhotolink,
            deletePhotoID: data.deletePhotoID,
            firstname: data.firstname,
            lastname: data.lastname,
            country: data.country,
            bio: data.bio,
        }

        formData.append("data", JSON.stringify(updateData));
        formData.append("token", data.token);
        formData.append("updatePhoto", data.updatePhoto || "");

        console.log("I am about to create formData", [...formData.entries()])

        const response = await axios.post(`${URL}/editmoreprofile`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });

        if (response.status !== 200) {
            // Post was not successfully created
            throw "Error updating your profile";
        }

        return response.data;

    } catch (err) {

        throw (err.response.data.message)
    }
})

const comprofile = createSlice({
    name: "comprofile",
    initialState,
    reducers: {
        comprofilechangeStatus(state, action) {
            state.status = action.payload
            state.getprofileidstatus = action.payload
            state.getedit_stats = action.payload
            state.updateEdit_stats = action.payload
        },
        comprofiledonloadstats(state, action) {
            state.downloadPhotstats = action.payload
        },
        resetprofilebyid(state, action) {
            state.profile = {}
        }
    },
    extraReducers(builder) {

        builder.addCase(getcomprofile.pending, (state, action) => {
            state.status = 'loading'
        }
        )
            .addCase(getcomprofile.fulfilled, (state, action) => {

                state.photoLink = action.payload.profile.photoLink;
                state.details = action.payload.profile.details;
                state.status = 'succeeded'
            }

            )
            .addCase(getcomprofile.rejected, (state, action) => {

                state.status = 'failed'
                state.error = action.error.message
            }

            )
            .addCase(getprofilephoto.pending, (state, action) => {
                state.photostatus = 'loading'
            }
            )
            .addCase(getprofilephoto.fulfilled, (state, action) => {

                state.profilephoto = action.payload
                state.photostatus = 'succeeded'
            }

            )
            .addCase(getprofilephoto.rejected, (state, action) => {

                state.photostatus = 'failed'
                state.error = action.error.message
            }

            )
            .addCase(getprofilebyid.pending, (state, action) => {
                state.getprofileidstatus = 'loading'
            }
            )
            .addCase(getprofilebyid.fulfilled, (state, action) => {
                state.profile = action.payload.profile
                state.getprofileidstatus = 'succeeded'
            }

            )
            .addCase(getprofilebyid.rejected, (state, action) => {

                state.getprofileidstatus = 'failed'
                state.error = action.error.message
            }

            )
            .addCase(getEdit.pending, (state, action) => {
                state.getedit_stats = 'loading'
            }
            )
            .addCase(getEdit.fulfilled, (state, action) => {

                state.editData = action.payload.data
                state.getedit_stats = 'succeeded'
            }

            )
            .addCase(getEdit.rejected, (state, action) => {

                state.getedit_stats = 'failed'
                state.getedit_message = action.error.message
            }

            )
            .addCase(updateEdit.pending, (state, action) => {
                state.updateEdit_stats = 'loading'
            }
            )
            .addCase(updateEdit.fulfilled, (state, action) => {

                state.updateEdit_stats = 'succeeded'
            }

            )
            .addCase(updateEdit.rejected, (state, action) => {

                state.updateEdit_stats = 'failed'
                state.updateEdit_message = action.error.message
            }

            )
    }
})



export default comprofile.reducer;
export const { comprofilechangeStatus, resetprofilebyid } = comprofile.actions;
export const Compfstatus = state => state.comprofile.status;
