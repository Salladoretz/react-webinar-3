import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import Item from "../item";

function Modal({ arr, info, buttonName, onClick, totalPrice, activeModal, setActiveModal }) {

  return (
    <div className={activeModal ? 'Modal active' : 'Modal'}>
      <div className="Modal-container">
        <div className="Modal-header">
          <p>Корзина</p>
          <div>
            <button onClick={() => setActiveModal(false)}>Закрыть</button>
          </div>
        </div>
        {arr.map(item =>
          <div key={item.code}>
            <Item item={item} info={info} buttonName={buttonName} onClick={onClick} />
          </div>
        )}
        <div className="Modal-footer">
          <div>Итого</div>
          <div>{totalPrice} ₽</div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })).isRequired,
  info: PropTypes.func,
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
  totalPrice: PropTypes.string,
  activeModal: PropTypes.bool,
  setActiveModal: PropTypes.func
};

Modal.defaultProps = {
  onClick: () => {
  }
}

export default React.memo(Modal);
