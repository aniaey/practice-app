import React from "react";
import { Item } from "../store/itemSlice";
import { useAppDispatch } from "../store/store";
import { toggleItemModalOpen } from "../store/itemSlice";

interface ItemModalProps {
  item: Item;
}

const ItemModal: React.FC<ItemModalProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toggleItemModalOpen());
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header row">
            <h5 className="modal-title col">Name: {item.name}</h5>
            <div
              className="close col-1"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            >
              <span className="p-1">&times;</span>
            </div>
          </div>
          <div className="modal-body d-flex flex-row g-4 align-items-center">
            <div>
              <img
                src={item.imgUrl}
                alt={`${item.name} image`}
                className="img-fluid"
              />
            </div>
            <div className="px-4">
              <p>Size: {item.size} EU</p>
              <p>Price: ${item.price}</p>
              <button className="w-100 btn btn-dark">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
