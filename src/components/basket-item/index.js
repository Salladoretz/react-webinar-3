import React from "react";
import PropTypes from "prop-types";
import { local } from '../../utils'
import './style.css';

function BasketItem(props) {

  const callbacks = {
    onClick: () => {
      props.onClick(props.item);
    }
  }

  return (
    <div className={'BasketItem'}>
      <div className='BasketItem-code'>{props.item.code}</div>
      <div className='BasketItem-title'>{props.item.title}</div>
      <div className='BasketItem-price'>{local(props.item.price)} ₽</div>
      <div className='BasketItem-price'>{props.item.quantity} шт</div>
      <div className='BasketItem-actions'>
        <button onClick={callbacks.onClick}>Удалить</button>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  }).isRequired,
  onClick: PropTypes.func
};

BasketItem.defaultProps = {
  onClick: () => {
  }
}

export default React.memo(BasketItem);
