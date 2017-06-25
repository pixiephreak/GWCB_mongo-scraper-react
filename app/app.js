import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Bootstrap from './bootstrap/css/bootstrap.css';
import Css from './css/styles.css'

const buttonsInstance = (
  <Button>Click me!</Button>
);
ReactDOM.render(buttonsInstance, document.getElementById('app'));
