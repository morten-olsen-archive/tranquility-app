import 'reflect-metadata';
import * as Expo from 'expo'
import * as Sentry from 'sentry-expo';
import App from './App';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

export default Expo.registerRootComponent(App);
