import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../store/store";
import { addItem, resetItems } from "../store/itemSlice";
import { Provider } from "react-redux";
import ItemList from "../components/ItemList.tsx";
import "@testing-library/jest-dom";

const mockItems = [
  {
    id: "123",
    name: "Item 1",
    sku: "SKU1",
    price: 10,
    size: 42,
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    id: "124",
    name: "Item 2",
    sku: "SKU2",
    price: 20,
    size: 44,
    imgUrl: "https://via.placeholder.com/150",
  },
];

describe("ItemList Component", () => {
  beforeEach(() => {
    store.dispatch(resetItems());
    mockItems.forEach((item) => store.dispatch(addItem(item)));
  });

  test("renders items correctly", () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>,
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("opens modal on item click", () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>,
    );

    fireEvent.click(screen.getByText("Item 1"));

    expect(screen.getByText("Name: Item 1")).toBeInTheDocument();
    expect(screen.getByText("Size: 42 EU")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
  });
});
