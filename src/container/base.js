import React, { Component } from 'react';
import Header from "../components/header";
import ContentBody from "../container/contentBody";

class Base extends Component {
    state={

    }
    render(){
        return(
            <div>
                <Header />
                <ContentBody  />
              
            </div>
        )
    }
}

export default Base;