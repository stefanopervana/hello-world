// unfinished/src/index.jsx
import Layout from '../components/layout'
import React    from 'react';
import ReactDOM from 'react-dom';
import Chart    from './chart.js';

const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);
ReactDOM.render(<Chart/>, mountingPoint);