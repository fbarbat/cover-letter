// import 'react-hot-loader/patch'
// import {AppContainer} from 'react-hot-loader';
import React from 'react';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// import Redbox from 'redbox-react';

import Presentation from './presentation';

// const CustomErrorReporter = ({error}) => <Redbox error={error}/>;

// CustomErrorReporter.propTypes = {
//     error: PropTypes.instanceOf(Error).isRequired,
// };

// {/*<AppContainer errorReporter={CustomErrorReporter}>*/}
// {/*    <div>*/}
// </div>
// </AppContainer>,


ReactDOM.render(
            <Presentation/>,
    document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept('./presentation', () => {
//         const NextPresentation = require('./presentation').default;
//         ReactDOM.render(
//             {/*<AppContainer errorReporter={CustomErrorReporter}>*/}
//                 <NextPresentation/>
//             // </AppContainer>,
//             document.getElementById('root')
//         );
//     });
// }

