import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockItems } from "./mockData.ts";

export interface Item {
  id: string;
  name: string;
  sku: string;
  price: number;
  size: number;
  imgUrl: string;
}

export interface ItemState {
  items: Item[];
  selectedItem: Item | null;
  isItemModalOpen: boolean;
}

const initialState: ItemState = {
  items: mockItems,
  selectedItem: null,
  isItemModalOpen: false,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    selectItem: (state, action: PayloadAction<Item>) => {
      state.selectedItem = action.payload;
    },
    toggleItemModalOpen: (state) => {
      state.isItemModalOpen = !state.isItemModalOpen;
    },
    resetItems: () => initialState,
  },
});

export const {
  resetItems,
  addItem,
  removeItem,
  selectItem,
  toggleItemModalOpen,
} = itemSlice.actions;
export default itemSlice.reducer;
