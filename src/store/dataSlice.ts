import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataResponse } from "../hooks/useData";

interface DataState {
  data: DataResponse[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: DataState = {
  data: [],
  status: "idle",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<DataResponse[]>) {
      state.data = action.payload;
    },
    setStatus(
      state,
      action: PayloadAction<"idle" | "loading" | "succeeded" | "failed">
    ) {
      state.status = action.payload;
    },
  },
});

export const { setData, setStatus } = dataSlice.actions;

export default dataSlice.reducer;
