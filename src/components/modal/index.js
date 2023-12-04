import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import BasketItem from "../basket-item";

function Modal({ arr, onClick, totalSum, activeModal, setActiveModal }) {

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
            <BasketItem item={item} onClick={onClick} />
          </div>
        )}
        <div className="Modal-footer">
          <div>Итого</div>
          <div>{totalSum} ₽</div>
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
  onClick: PropTypes.func,
  totalSum: PropTypes.string,
  activeModal: PropTypes.bool,
  setActiveModal: PropTypes.func
};

Modal.defaultProps = {
  onClick: () => {
  }
}

export default React.memo(Modal);
