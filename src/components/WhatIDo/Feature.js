import React from 'react';
import './Feature.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feature = (props) => (
  <div className="Feature">
    <FontAwesomeIcon icon={['fas', props.icon]} className="Feature__icon"/>
    <h3 className="Feature__title">{props.title}</h3>
    <p className="Feature__text">{props.content}</p>
  </div>
);

export default Feature;