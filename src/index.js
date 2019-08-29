import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import style from './index.module.css'

import Presentation from './presentation';
import UnderConstructionRibbon from "./under-construction-ribbon/UnderConstructionRibbon";

ReactDOM.render(<><Presentation/><UnderConstructionRibbon/></>, document.getElementById('root'));
