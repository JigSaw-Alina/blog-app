import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetinformations } from './actions/informations';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';



const store = configureStore();



// store.dispatch(addInformation({ description: 'google', note: 'search for information about (someone or something)'}))
// store.dispatch(addInformation({ description: 'acebook', note: 'spend time using the social networking website Facebook.'}))



 const jsx = (
     <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

let hasRender = false 
const renderApp = () => {
    if (!hasRender) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRender = true
    }
}

ReactDOM.render(<h1><LoadingPage /></h1>, document.getElementById('app'))


firebase.auth().onAuthStateChanged((user) => {
   if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetinformations()).then(() => {
            renderApp();
            if (history.location.pathname === ('/')) {
               history.push('/dashboard')
            }
      });        
   } else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
   }
});















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
