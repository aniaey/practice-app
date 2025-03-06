import { Item, selectItem, toggleItemModalOpen } from "../store/itemSlice";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import ItemModal from "./ItemModal";

const ItemList = () => {
  const dispatch = useAppDispatch();
  const { items, selectedItem, isItemModalOpen } = useSelector(
    (state: RootState) => state.items,
  );

  const handleItemClick = (item: Item) => {
    dispatch(selectItem(item));
    dispatch(toggleItemModalOpen());
  };

  return (
    <div className="container">
      <div className="row">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="col-md-3 col-sm-6 pb-4">
              <div className="card" onClick={() => handleItemClick(item)}>
                <img
                  src={item.imgUrl}
                  className="card-img-top rounded rounded-5 p-3"
                  alt={`${item.name} image`}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.sku}</p>
                  <p className="card-text">{item.size} EU</p>
                  <p className="card-text">${item.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
      {isItemModalOpen && selectedItem && <ItemModal item={selectedItem} />}
    </div>
  );
};

export default ItemList;
