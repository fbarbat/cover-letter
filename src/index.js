import React from 'react';
import ReactDOM from 'react-dom';

// noinspection ES6UnusedImports
import style from './index.module.css'

import Presentation from './presentation';
import UnderConstructionRibbon from "./under-construction-ribbon/UnderConstructionRibbon";

ReactDOM.render(<><Presentation/><UnderConstructionRibbon/></>, document.getElementById('root'));
