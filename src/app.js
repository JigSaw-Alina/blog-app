import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addInformation } from './actions/informations';
import getVisibleInformation from './selectors/information';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import './play/promise.js';


const store = configureStore();



store.dispatch(addInformation({ description: 'google', note: 'search for information about (someone or something)'}))
store.dispatch(addInformation({ description: 'acebook', note: 'spend time using the social networking website Facebook.'}))




    const state = store.getState()
    const VisibleInformation = getVisibleInformation(state.informations, state.filters)
    console.log(VisibleInformation)



 const jsx = (
     <Provider store={store}>
           <AppRouter /> 
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

// let hasRender = false
// const renderApp = () => {
//   if (!hasRender) {
//     ReactDOM.render(jsx ,document.getElementById('app'));
//     hasRender = true
//   }
// }




// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//   store.dispatch(login(user.uid));
//   renderApp();
//     if (history.location.pathname === ('/')) {
//       history.push('/dashboard')
//     }
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push('/')
//   }
// });
