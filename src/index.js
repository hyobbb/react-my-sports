import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals'
import {ApolloProvider} from "@apollo/client";
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: '/graphql/',
    //uri: `${window.location.protocol}//49.247.146.76:8000/graphql/`,
})

const authLink = setContext((_, {headers}) => {
    const token = window.sessionStorage.getItem('_ttk_');
    return {
        headers: {
            ...headers,
            authorization: token ?? "",
        }
    }
})

const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    }
);

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
