import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../../api/config";
import axios from "axios";
// import { saveImage } from "../../../api/sendImage";
// import { deleteImage } from "../../../api/sendImage";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  nickname: "",
  active: false,
  State: "",
  country: "",
  balance: "",
  admin: false,
  witdrawable: "",
  model: "false",
  status: "idle",
  error: null,
  modelID: null,
  modelphotolink: null,
  modelname: null,
  history_stats: "idle",
  history_message: "",
  historys: {},
  monthly_history_stats: "idle",
  monthly_history_messege: "",
  monthly: [],
  deposit_stats: "idle",
  deposit_message: "",
  exclusive_verify: false,
  follow_stats: "idle",
  unfollow_stats: "idle",
  getfollow_data: {},
  getfollow_stats: "idle",
  fllowmsg: "",
  postexIMG: "",
  thumbimg: "",
  posteximgStats: "idle",
  postexstats: "idle",
  buyexstats: "idle",
  deleteexstats: "idle",
  collectionstats: "idle",
  deletecolstats: "idle",
  listofcontent: [],
  listofcrush: [],
  thumbdelstats: "idle",
  deleteaccstats: "idle",
  listofblockuser: [],
  blockuserstats: "idle",
  removeblockstats: "idle",
  updatesettingstats: "idle",
  emailnote: false,
  pushnote: false,
  lastnote: 0,
  lastmessagenote: 0,
  searchstats: "idle",
  search_users: [],
  testmsg: "",
  closedraw: false,
};

export const getprofile = createAsyncThunk(
  "profile/getprofile",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.post(`${URL}/getprofile`, data);
      // console.log('under get profile')

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const getsearch = createAsyncThunk("profile/getsearch", async () => {
  try {
    //console.log('ontop get profile')
    let response = await axios.post(`${URL}/searchuser`);
    // console.log('under get profile')

    return response.data;
  } catch (err) {
    // console.log('erro get profile')
    throw err.response.data.message;
  }
});

export const updatesetting = createAsyncThunk(
  "profile/updatesetting",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.post(`${URL}/setting`, data);
      // console.log('under get profile')

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const deleteblockedUsers = createAsyncThunk(
  "profile/deleteblockedUsers",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.patch(`${URL}/deleteaccount`, data);
      // console.log('under get profile')

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const deleteprofile = createAsyncThunk(
  "profile/deleteprofile",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.post(`${URL}/deleteaccount`, data);
      // console.log('under get profile')

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const getcollection = createAsyncThunk(
  "profile/getcollection",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.put(`${URL}/exclusivecontent`, data);
      // console.log('under get profile')

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const getblockedUsers = createAsyncThunk(
  "profile/getblockedUsers",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.put(`${URL}/deleteaccount`, data);
      // console.log('under get profile')

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const deletecollection = createAsyncThunk(
  "profile/deletecollection",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.post(`${URL}/exclusivecontent`, data);
      // console.log('under get profile')

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const post_exclusive_content = createAsyncThunk(
  "profile/post_exclusive_content",
  async (data) => {
    try {
      // Send data as a FormData
      let formData = new FormData();

      // Prepare the post form data
      const postData = {
        contentname: data.contentname,
        price: data.price,
        content_type: data.content_type,
        // contentlink: data.imagelink,
        // thumblink: data.thumbnaillink,
        userid: data.userid,
        // token: data.token,
      };

      formData.append("data", JSON.stringify(postData));
      formData.append("token", data.token);
      formData.append("contentlink", data.contentlink || "");
      formData.append("thumbnaillink", data.thumbnaillink || "");

      console.log("I am about to create formData", [...formData.entries()]);

      let response = await axios.put(`${URL}/exclusive`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 200) {
        // Post was not successfully created
        throw "Error creating your verifying your model";
      }

      return response.data;
    } catch (err) {
      // console.log('erro get profile')
      throw err.response.data.message;
    }
  }
);

export const buy_exclusive_content = createAsyncThunk(
  "profile/buy_exclusive_content",
  async (data) => {
    try {
      let response = await axios.post(`${URL}/exclusive`, data);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const delete_exclusive_content = createAsyncThunk(
  "profile/delete_exclusive_content",
  async (data) => {
    try {
      let response = await axios.patch(`${URL}/exclusive`, data);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const get_my_history = createAsyncThunk(
  "profile/get_my_history",
  async (data) => {
    try {
      //console.log('ontop get profile')
      let response = await axios.post(`${URL}/gethistory`, data);
      // console.log('under get profile')

      // return response.data;
          return response.data.history;
    } catch (err) {
      // console.log('erro get profile')

      if (!err.response.data.message) {
        throw "check internet connection";
      }
      throw err.response.data.message;
    }
  }
);

export const get_monthly_history = createAsyncThunk(
  "profile/get_monthly_history",
  async (data) => {
    try {
      let response = await axios.post(`${URL}/getmonthlyhistory`, data);
      return response.data;
    } catch (err) {
      if (!err.response.data.message) {
        throw "check internet connection";
      }
      throw err.response.data.message;
    }
  }
);

export const deposit = createAsyncThunk("profile/deposit", async (data) => {
  try {
    let response = await axios.post(`${URL}/topup`, data);
    // console.log('under get profile')

    return response.data;
  } catch (err) {
    // console.log('erro get profile')

    if (!err.response.data.message) {
      throw "check internet connection";
    }
    throw err.response.data.message;
  }
});

export const follow = createAsyncThunk("profile/follow", async (data) => {
  try {
    let response = await axios.post(`${URL}/follow`, data);

    return response.data;
  } catch (err) {
    // console.log('erro get profile')
    console.log(err);

    if (!err.response.data.message) {
      throw "check internet connection";
    }
    throw err.response.data.message;
  }
});

export const unfollow = createAsyncThunk("profile/unfollow", async (data) => {
  try {
    let response = await axios.put(`${URL}/follow`, data);

    return response.data;
  } catch (err) {
    console.log(err);
    // console.log('erro get profile')

    if (!err.response.data.message) {
      throw "check internet connection";
    }
    throw err.response.data.message;
  }
});

export const getfollow = createAsyncThunk("profile/getfollow", async (data) => {
  try {
    let response = await axios.post(`${URL}/getfollowers`, data);

    return response.data;
  } catch (err) {
    // console.log('erro get profile')

    if (!err.response.data.message) {
      throw "check internet connection";
    }
    throw err.response.data.message;
  }
});

export const post_exclusive_img = createAsyncThunk(
  "profile/post_exclusive_img",
  async (data) => {
    try {
      let img;
      let thumb;

      if (data) {
        // img = await saveImage(data.imagelink, "post");
        // thumb = await saveImage(data.thumbnaillink, "post");

        img = await data.imagelink.name;
        thumb = await data.thumbnaillink.name;
      }
      return { img, thumb };
    } catch (err) {
      if (!err.response.data.message) {
        throw "check internet connection";
      }
      throw err.response.data.message;
    }
  }
);

export const delete_exclusive_thumb = createAsyncThunk(
  "profile/delete_exclusive_thumb",
  async (data) => {
    try {
      if (data) {
      }
      return "success";
    } catch (err) {
      if (!err.response.data.message) {
        throw "check internet connection";
      }
      throw err.response.data.message;
    }
  }
);

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    ProfilechangeStatus(state, action) {
      state.status = action.payload;
      state.history_stats = action.payload;
      state.monthly_history_stats = action.payload;
      state.deposit_stats = action.payload;
      state.follow_stats = action.payload;
      state.unfollow_stats = action.payload;
      state.getfollow_stats = action.payload;
      state.posteximgStats = action.payload;
      state.postexstats = action.payload;
      state.buyexstats = action.payload;
      state.deleteexstats = action.payload;
      state.collectionstats = action.payload;
      state.deletecolstats = action.payload;
      state.thumbdelstats = action.payload;
      state.deleteaccstats = action.payload;
      state.blockuserstats = action.payload;
      state.removeblockstats = action.payload;
      state.updatesettingstats = action.payload;
      state.searchstats = action.payload;
    },
    setlastnote(state, action) {
      state.lastnote = action.payload;
    },
    setmessagelastnote(state, action) {
      state.lastmessagenote = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getprofile.pending, (state, action) => {
        state.status = "loading";
        console.log(state.status);
      })
      .addCase(getprofile.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.firstname = action.payload.profile.firstname;
        state.lastname = action.payload.profile.lastname;
        state.nickname = action.payload.profile.nickname;
        state.active = action.payload.profile.active;
        state.State = action.payload.profile.state;
        state.country = action.payload.profile.country;
        state.balance = action.payload.profile.balance;
        state.model = action.payload.profile.model;
        state.modelID = action.payload.profile.modelID;
        state.modelname = action.payload.profile.modelname;
        state.modelphotolink = action.payload.profile.modelphotolink;
        state.admin = action.payload.profile.admin;
        state.exclusive_verify = action.payload.profile.exclusive;
        state.emailnote = action.payload.profile.emailnot;
        state.pushnote = action.payload.profile.pushnot;
        state.email = action.payload.profile.email;
      })
      .addCase(getprofile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(get_my_history.pending, (state, action) => {
        state.history_stats = "loading";
      })
      .addCase(get_my_history.fulfilled, (state, action) => {
        state.history_stats = "succeeded";

        state.historys = action.payload.history;
      })
      .addCase(get_my_history.rejected, (state, action) => {
        state.history_stats = "failed";

        if (!action.error) {
          state.history_message = "Check internet connection";
        } else {
          state.history_message = action.error.message;
        }
      })
      .addCase(get_monthly_history.pending, (state, action) => {
        state.monthly_history_stats = "loading";
      })
      .addCase(get_monthly_history.fulfilled, (state, action) => {
        state.monthly_history_stats = "succeeded";

        state.monthly = action.payload.Month;
      })
      .addCase(get_monthly_history.rejected, (state, action) => {
        state.monthly_history_stats = "failed";

        if (!action.error) {
          state.monthly_history_messege = "Check internet connection";
        } else {
          state.monthly_history_messege = action.error.message;
        }
      })
      .addCase(deposit.pending, (state, action) => {
        state.deposit_stats = "loading";
      })
      .addCase(deposit.fulfilled, (state, action) => {
        state.deposit_stats = "succeeded";

        state.deposit_message = action.payload.message;
      })
      .addCase(deposit.rejected, (state, action) => {
        state.deposit_stats = "failed";

        if (!action.error) {
          state.deposit_message = "Check internet connection";
        } else {
          state.deposit_message = action.error.message;
        }
      })
      .addCase(follow.pending, (state, action) => {
        state.follow_stats = "loading";
      })
      .addCase(follow.fulfilled, (state, action) => {
        state.follow_stats = "succeeded";
      })
      .addCase(follow.rejected, (state, action) => {
        state.follow_stats = "failed";

        if (!action.error) {
          state.deposit_message = "Check internet connection";
        } else {
          state.deposit_message = action.error.message;
        }
      })
      .addCase(unfollow.pending, (state, action) => {
        state.unfollow_stats = "loading";
      })
      .addCase(unfollow.fulfilled, (state, action) => {
        state.unfollow_stats = "succeeded";
      })
      .addCase(unfollow.rejected, (state, action) => {
        state.unfollow_stats = "failed";

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })

      .addCase(getfollow.pending, (state, action) => {
        state.getfollow_stats = "loading";
      })
      .addCase(getfollow.fulfilled, (state, action) => {
        state.getfollow_stats = "succeeded";
        state.getfollow_data = action.payload.data;
      })
      .addCase(getfollow.rejected, (state, action) => {
        state.getfollow_stats = "failed";

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(post_exclusive_img.pending, (state, action) => {
        state.posteximgStats = "loading";
      })
      .addCase(post_exclusive_img.fulfilled, (state, action) => {
        state.posteximgStats = "succeeded";
        console.log("content img " + action.payload);
        state.postexIMG = action.payload.img;
        state.thumbimg = action.payload.thumb;
      })
      .addCase(post_exclusive_img.rejected, (state, action) => {
        state.posteximgStats = "failed";

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(post_exclusive_content.pending, (state, action) => {
        state.postexstats = "loading";
      })
      .addCase(post_exclusive_content.fulfilled, (state, action) => {
        state.postexstats = "succeeded";
      })
      .addCase(post_exclusive_content.rejected, (state, action) => {
        state.postexstats = "failed";

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(buy_exclusive_content.pending, (state, action) => {
        state.buyexstats = "loading";
      })
      .addCase(buy_exclusive_content.fulfilled, (state, action) => {
        state.buyexstats = "succeeded";
      })
      .addCase(buy_exclusive_content.rejected, (state, action) => {
        state.buyexstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(delete_exclusive_content.pending, (state, action) => {
        state.deleteexstats = "loading";
      })
      .addCase(delete_exclusive_content.fulfilled, (state, action) => {
        state.deleteexstats = "succeeded";
      })
      .addCase(delete_exclusive_content.rejected, (state, action) => {
        state.deleteexstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(getcollection.pending, (state, action) => {
        state.collectionstats = "loading";
      })
      .addCase(getcollection.fulfilled, (state, action) => {
        state.listofcontent = action.payload.data.allcontent;
        state.listofcrush = action.payload.data.allcrush;
        state.collectionstats = "succeeded";
      })
      .addCase(getcollection.rejected, (state, action) => {
        state.collectionstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(deletecollection.pending, (state, action) => {
        state.deletecolstats = "loading";
      })
      .addCase(deletecollection.fulfilled, (state, action) => {
        state.deletecolstats = "succeeded";
      })
      .addCase(deletecollection.rejected, (state, action) => {
        state.deletecolstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(delete_exclusive_thumb.pending, (state, action) => {
        state.thumbdelstats = "loading";
      })
      .addCase(delete_exclusive_thumb.fulfilled, (state, action) => {
        state.thumbdelstats = "succeeded";
      })
      .addCase(delete_exclusive_thumb.rejected, (state, action) => {
        state.thumbdelstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.fllowmsg = "Check internet connection";
        } else {
          state.fllowmsg = action.error.message;
        }
      })
      .addCase(deleteprofile.pending, (state, action) => {
        state.deleteaccstats = "loading";
      })
      .addCase(deleteprofile.fulfilled, (state, action) => {
        state.deleteaccstats = "succeeded";
      })
      .addCase(deleteprofile.rejected, (state, action) => {
        state.deleteaccstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.testmsg = "Check internet connection";
        } else {
          state.testmsg = action.error.message;
        }
      })
      .addCase(getblockedUsers.pending, (state, action) => {
        state.blockuserstats = "loading";
      })
      .addCase(getblockedUsers.fulfilled, (state, action) => {
        state.blockuserstats = "succeeded";
        state.listofblockuser = action.payload.users;
      })
      .addCase(getblockedUsers.rejected, (state, action) => {
        state.blockuserstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.testmsg = "Check internet connection";
        } else {
          state.testmsg = action.error.message;
        }
      })
      .addCase(deleteblockedUsers.pending, (state, action) => {
        state.removeblockstats = "loading";
      })
      .addCase(deleteblockedUsers.fulfilled, (state, action) => {
        state.removeblockstats = "succeeded";
      })
      .addCase(deleteblockedUsers.rejected, (state, action) => {
        state.removeblockstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.testmsg = "Check internet connection";
        } else {
          state.testmsg = action.error.message;
        }
      })
      .addCase(updatesetting.pending, (state, action) => {
        state.updatesettingstats = "loading";
      })
      .addCase(updatesetting.fulfilled, (state, action) => {
        state.updatesettingstats = "succeeded";
      })
      .addCase(updatesetting.rejected, (state, action) => {
        state.updatesettingstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.testmsg = "Check internet connection";
        } else {
          state.testmsg = action.error.message;
        }
      })
      .addCase(getsearch.pending, (state, action) => {
        state.searchstats = "loading";
      })
      .addCase(getsearch.fulfilled, (state, action) => {
        state.searchstats = "succeeded";
        state.search_users = action.payload.users;
      })
      .addCase(getsearch.rejected, (state, action) => {
        state.searchstats = "failed";
        state.testmsg = action.error.message;

        if (!action.error) {
          state.testmsg = "Check internet connection";
        } else {
          state.testmsg = action.error.message;
        }
      });
  },
});

export default profile.reducer;
export const { ProfilechangeStatus, setlastnote, setmessagelastnote } =
  profile.actions;
