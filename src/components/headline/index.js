import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Headline({ totalQuantity, totalPrice, setActiveModal }) {
  return (
    <div className='Headline'>
      <div>В корзине: {totalQuantity} / {totalPrice} ₽</div>
      <button onClick={() => setActiveModal(true)}>Открыть</button>
    </div>
  )
}

Headline.propTypes = {
  onAdd: PropTypes.func
};

Headline.defaultProps = {
  onAdd: () => { }
}

export default React.memo(Headline);
