import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import { App } from "./components/app";

const target = document.getElementById('root');

render(<App/>, target);
