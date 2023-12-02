import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Headline(props) {

  const callbacks = {
    onClick: () => {
      props.onClick(true);
    }
  }

  return (
    <div className='Headline'>
      <div className='Headline-info'>В корзине: <span>{props.info}</span></div>
      <button onClick={callbacks.onClick}>{props.buttonName}</button>
    </div>
  )
}

Headline.propTypes = {
  info: PropTypes.string,
  onClick: PropTypes.func
};

Headline.defaultProps = {
  onClick: () => { }
}

export default React.memo(Headline);
