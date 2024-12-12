// @ts-ignore
import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('gilgilgil');

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err: any, _info: any, _props: any) {
    return <div>Error: {err}</div>
  },
});


export default {
  bootstrap: lifecycles.bootstrap,
  mount: lifecycles.mount,
  unmount: lifecycles.unmount
};

// Also export them individually
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;