import React, { Component } from "react";
import { fetchSpecs } from './../../stores/specs';
import Content from './../../components/Content';
import { connect } from 'react-redux';

const Landing = ({match, specs}) => {
  let {params} = match;
  return(
      <div className='landing'>
        <Content id={params.id?params.id:specs[0].id}/>
      </div>
  )
}

Landing.serverFetch = fetchSpecs;

const mapStateToProps = (state) => ({
  specs: state.specs
})

export default connect(mapStateToProps, null)(Landing);
