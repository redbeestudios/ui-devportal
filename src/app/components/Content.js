import React from 'react';

import Menu from './Menu';
import Swagger from './Swagger';

import './Content.scss';

const Content = ({id}) => {
  return (
    <div className='content container'>
      <div className='content-left'>
        <Menu />
      </div>
      <div className='content-rigth'>
        <Swagger url={`/api/specs/${id}`} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    spec: state.spec
});

export default Content;
