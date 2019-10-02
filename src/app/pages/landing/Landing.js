import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import apis from './../../apis.json';

class Landing extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='landing'>
                <Header />
                  <ul>
                  { Object.keys(apis).map( it =>  <li><a href={`/specs/${it}`}>{it}</a></li>) }
                  </ul>
                <Footer />
            </div>
        )
    }
}

export default Landing;
