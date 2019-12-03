import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import './Menu.scss';

const Menu = ({specs}) => {
  return (
    <div className='menu'>
      <span className='menu__title'>Recursos de la API</span>
      <ul className='menu__items'>
        { specs.map((it, index) => <li className='items__item' key={index}><Link to={`spec/${it.id}`}>{it.label}</Link></li>)  }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
    specs: state.specs
});

export default connect(mapStateToProps)(Menu);
