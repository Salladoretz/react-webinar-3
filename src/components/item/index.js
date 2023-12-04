import React from "react";
import PropTypes from "prop-types";
import { local } from '../../utils'
import './style.css';

function Item(props) {

  const callbacks = {
    onClick: () => {
      props.onClick(props.item);
    }
  }

  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>{local(props.item.price)} ₽</div>
      <div className='Item-actions'>
        <button onClick={callbacks.onClick}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  onClick: PropTypes.func
};

Item.defaultProps = {
  onClick: () => {
  }
}

export default React.memo(Item);
