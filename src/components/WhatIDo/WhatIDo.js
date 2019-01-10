import React, { Component } from 'react';
import Feature from './Feature';
import Data from './data.js';
import './WhatIDo.scss';


class WhatIDo extends Component {

  render = () => {
    const featureList = Data.map(feature => {
      return (<Feature key={feature.id} title={feature.title} content={feature.content} icon={feature.icon} alt={feature.alt} />)
    });


    const flex = {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }

    return (
      <div className="Background--Features">
        <div className="container" style={flex}>
          <section className="Features">
            <h2 className="Features__heading">What I do</h2>
            <p className="Features__text">Currently a student learning Front-End Development at KYH in Stockholm. Prior to this I have worked with HTML, CSS and JavaScript to build websites for my friends and family. I have designed both websites and assets. Being interested in both coding and design gives me a deeper understanding of how everything come together.</p>
            <div className="Features__list">
              { featureList }
            </div>
          </section>
        </div> 
      </div>
    );
  }
}

export default WhatIDo;