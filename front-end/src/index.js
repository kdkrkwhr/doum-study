import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DefaultNavbar from './component/navbar/DefaultNavbar';
import DefaultHeader from './component/header/DefaultHeader';
import DefaultFooter from './component/footer/DefaultFooter';

ReactDOM.render(
  <React.StrictMode>
    <>
      <DefaultNavbar name="이폴트네브바" />
      <div className="wrapper">
        <DefaultHeader name="디폴트헤더" />
        <div className="main">
          <App name="메인"/>
        </div>
        <DefaultFooter name="디폴트푸터"/>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
