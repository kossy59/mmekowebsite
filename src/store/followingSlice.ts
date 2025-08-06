import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/user';

interface FollowingState {
  following: User[];
  fans: User[];
}

const initialState: FollowingState = {
  following: [],
  fans: [],
};

const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    setFollowing(state, action: PayloadAction<User[]>) {
      state.following = action.payload;
    },
    setFans(state, action: PayloadAction<User[]>) {
      state.fans = action.payload;
    },
  },
});

export const { setFollowing, setFans } = followingSlice.actions;
export default followingSlice.reducer;
