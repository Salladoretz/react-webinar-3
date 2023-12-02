import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ arr, buttonName, info, onClick }) {
  return (
    <div className='List'>{
      arr.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} buttonName={buttonName} info={info} onClick={onClick} />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  })).isRequired,
  buttonName: PropTypes.string,
  info: PropTypes.func,
  onClick: PropTypes.func
};

List.defaultProps = {
  onClick: () => {
  }
}

export default React.memo(List);
