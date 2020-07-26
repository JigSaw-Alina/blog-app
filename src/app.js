import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addInformation } from './actions/informations';
import getVisibleInformation from './selectors/information';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();



store.dispatch(addInformation({ description: 'google', note: 'search for information about (someone or something)', createdAt: 1000}))
store.dispatch(addInformation({ description: 'acebook', note: 'spend time using the social networking website Facebook.', createdAt: 5000}))




    const state = store.getState()
    const VisibleInformation = getVisibleInformation(state.information, state.filters)
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
