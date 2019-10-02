import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import SwaggerUI from './../../components/Swagger';
import apis from './../../apis.json';

class Spec extends Component{
    constructor(props){
        super(props);
    }

    render(){
      console.log('Url!', `http://localhost:9000/api/specs/${this.props.match.params.id}`)
        return(
            <div className='landing'>
                <Header />
                  <SwaggerUI url={`http://localhost:9000/api/specs/${this.props.match.params.id}`}/>
                <Footer />
            </div>
        )
    }
}

export default Spec;
