import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../../api/config";
import { saveImage } from "../../../api/sendImage";
import axios from "axios";

export interface RegisterState {
  status: string;
  error: string | null;
  verifystatus: string;
  userID: string;
  compstats: string;
  message: string;
  logedin: boolean;
  refreshtoken: string;
  accesstoken: string;
  logstats: string;
  email: string;
  password: string;
  forgetpassstate: string;
  conpasswordstate: string;
  chagepassword: string;
  modelId?: string;
  isModel?: boolean;
}


const initialState: RegisterState = {
  status: "idle",
  error: null,
  verifystatus: "idle",
  userID: "",
  compstats: "",
  message: "",
  logedin: false,
  refreshtoken: "",
  accesstoken: "",
  logstats: "idle",
  email: "",
  password: "",
  forgetpassstate: "idle",
  conpasswordstate: "idle",
  chagepassword: "idle",
};

export const registernewUser = createAsyncThunk(
  "register/registernewUser",
  async (data) => {
    console.log({data})
    try {
      let response = await axios.post(`https://mmekoapi.onrender.com/register`, data);
      return response.data;
    } catch (err : any) {
      console.log(err.message);
      throw err.response.data.message;
    }
  }
);

export const verifyemail = createAsyncThunk(
  "register/verifyemail",
  async (data) => {
    try {
      let response = await axios.post(`${URL}/verifyemail`, data);
      return response.data;
    } catch (err: any) {
      throw err.response.data.message;
    }
  }
);

export const registercomplete = createAsyncThunk(
  "register/registercomplete",
  async (data : any) => {
    try {
      let infomfomation;
      let link;

      if (data.photoLink) {
        link = await saveImage(data.photoLink, "profile");
        console.log(link);
      } else {
        link = "";
      }

      infomfomation = {
        useraccountId: data.useraccountId,
        interestedIn: data.interestedIn,
        photoLink: link,
        relationshipType: data.relationshipType,
        details: data.details,
      };
      console.log("after info");

      let response = await axios.post(`${URL}/completeregister`, infomfomation);
      console.log("after res");
      return response.data;
    } catch (err) {
      //  throw(err.response.data.message+'erro')
      throw err;
      console.log("throw");
    }
  }
);

export const loginuser = createAsyncThunk(
  "register/loginuser",
  async (data) => {
    try {
      console.log("untop login axios");
      let response = await axios.post(`https://mmekoapi.onrender.com/login`, data);
      console.log("under login axios");
      return response.data;
    } catch (err: any) {
      throw err.response.data.message;
    }
  }
);

export const forgetpass = createAsyncThunk(
  "register/forgetpass",
  async (data) => {
    try {
      let response = await axios.post(`${URL}/forgetpassword`, data);

      return response.data;
    } catch (err: any) {
      throw err.response.data.message;
    }
  }
);

export const comfirmpasscode = createAsyncThunk(
  "register/comfirmpasscode",
  async (data) => {
    try {
      let response = await axios.post(`${URL}/comfirmpasscode`, data);

      return response.data;
    } catch (err: any) {
      throw err.response.data.message;
    }
  }
);

export const ChangePass = createAsyncThunk(
  "register/ChangePass",
  async (data) => {
    try {
      let response = await axios.post(`${URL}/changepassword`, data);

      return response.data;
    } catch (err: any) {
      throw err.response.data.message;
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload;
      state.chagepassword = action.payload;
    },
    changeemailvery(state, action) {
      state.verifystatus = action.payload;
    },
    changecompleate(state, action) {
      state.compstats = action.payload.compstats;
      state.message = action.payload.message;
    },
    changelogin(state, action) {
      state.logstats = action.payload.logstats;
      state.message = action.payload.message;
    },
    savelogin(state, action) {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    changepasswordback(state, action) {
      state.chagepassword = action.payload;
    },
    loginAuthUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.message = action.payload.message;
      state.logedin = true;
      state.refreshtoken = action.payload.refreshtoken;
      state.accesstoken = action.payload.accesstoken;
      state.userID = action.payload.userID;
      state.modelId = action.payload.modelId;
      state.isModel = action.payload.isModel;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(registernewUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registernewUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = action.payload.message;
      })
      .addCase(registernewUser.rejected, (state, action) => {
        state.status = "failed";
        state?.error = action.error.message;
      })
      .addCase(verifyemail.pending, (state, action) => {
        state.verifystatus = "loading";
      })
      .addCase(verifyemail.fulfilled, (state, action) => {
        state.verifystatus = "succeeded";
        state.userID = action.payload.ID;
      })
      .addCase(verifyemail.rejected, (state, action) => {
        state.verifystatus = "failed";
        state.error = action.error.message;
      })
      .addCase(registercomplete.pending, (state, action) => {
        state.compstats = "loading";
      })
      .addCase(registercomplete.fulfilled, (state, action) => {
        state.compstats = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(registercomplete.rejected, (state, action) => {
        state.compstats = "failed";
        state.error = action.error.message;
      })
      .addCase(loginuser.pending, (state, action) => {
        state.logstats = "loading";
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        if (state.email && state.password) {
          localStorage.setItem(
            "login",
            JSON.stringify({
              email: state.email,
              password: state.password,
              refreshtoken: action.payload.token,
              accesstoken: action.payload.accessToken,
              userID: action.payload.id,
              modelId: action.payload.modelId,
              isModel: action.payload.isModel,
            })
          );
        }

        state.logstats = "succeeded";
        state.message = action.payload.message;
        state.logedin = true;
        state.refreshtoken = action.payload.token;
        state.accesstoken = action.payload.accessToken;
        state.userID = action.payload.id;
        state.modelId = action.payload.modelId;
        state.isModel = action.payload.isModel;
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.logstats = "failed";

        if (!action.error.message) {
          state.error = "Check internet connection";
        } else {
          state.error = action.error.message;
        }

        //else{
        //     state.error = 'Check network connection'
        // }
      })
      .addCase(forgetpass.pending, (state, action) => {
        state.forgetpassstate = "loading";
      })
      .addCase(forgetpass.fulfilled, (state, action) => {
        state.forgetpassstate = "succeeded";
      })
      .addCase(forgetpass.rejected, (state, action) => {
        state.forgetpassstate = "failed";
        state.error = action.error.message;
      })
      .addCase(comfirmpasscode.pending, (state, action) => {
        state.conpasswordstate = "loading";
      })
      .addCase(comfirmpasscode.fulfilled, (state, action) => {
        state.conpasswordstate = "succeeded";
        state.userID = action.payload.id;
      })
      .addCase(comfirmpasscode.rejected, (state, action) => {
        state.conpasswordstate = "failed";
        state.error = action.error.message;
      })
      .addCase(ChangePass.pending, (state, action) => {
        state.chagepassword = "loading";
      })
      .addCase(ChangePass.fulfilled, (state, action) => {
        state.chagepassword = "succeeded";
      })
      .addCase(ChangePass.rejected, (state, action) => {
        state.conpasswordstate = "failed";
        state.error = action.error.message;
      });
  },
});

export default registerSlice.reducer;
export const status = (state) => state.register.status;
export const error = (state) => state.register.error;
export const {
  changeStatus,
  changeemailvery,
  changecompleate,
  savelogin,
  changelogin,
  loginAuthUser,
  changepasswordback,
} = registerSlice.actions;
