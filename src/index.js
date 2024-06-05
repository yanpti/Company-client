import React, {createContext} from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import UserStore  from './store/UserStore'
import NewsStore from "./store/NewsStore"; 



export const Context = createContext(null)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        news: new NewsStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);