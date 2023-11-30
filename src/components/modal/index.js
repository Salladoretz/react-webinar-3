import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import BasketItem from "../basketItem";

function Modal({ basket, onDeleteItemFromBasket, totalPrice, activeModal, setActiveModal }) {

  return (
    <div className={activeModal ? 'Modal active' : 'Modal'}>
      <div className="Modal-container">
        <div className="Modal-header">
          <p>Корзина</p>
          <div>
            <button onClick={() => setActiveModal(false)}>Закрыть</button>
          </div>
        </div>
        {basket.map(item =>
          <div key={item.code} className='List-item'>
            <BasketItem item={item} onDeleteItemFromBasket={onDeleteItemFromBasket} />
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
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })).isRequired,
  onDeleteItemFromBasket: PropTypes.func,
  totalPrice: PropTypes.number,
  activeModal: PropTypes.bool,
  setActiveModal: PropTypes.func
};

Modal.defaultProps = {
  onDeleteItemFromBasket: () => {
  }
}

export default React.memo(Modal);
