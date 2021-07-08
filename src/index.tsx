import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';

import './index.css';
import App from './App';
import en from './locales/en.json';
import ru from './locales/ru.json';

const initLocales = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      detection: {
        order: ['localStorage'],
        lookupLocalStorage: 'i18nextLng'
      },
      resources: {
        en: {
          translation: en
        },
        ru: {
          translation: ru
        }
      },
      fallbackLng: 'en',
      supportedLngs: ['en', 'ru'],
      interpolation: {
        escapeValue: false
      }
    });
};

const getApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:8090/graphql',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            accounts: relayStylePagination()
          }
        }
      }
    }),
    connectToDevTools: true
  });
};

const init = () => {
  initLocales();
  const client = getApolloClient();

  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

init();
