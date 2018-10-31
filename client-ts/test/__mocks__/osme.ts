import * as _ReactDOM from 'react-dom';

const ReactDOM = jest.genMockFromModule<typeof _ReactDOM>('react-dom');

const render = ReactDOM.render;

export default ReactDOM;
export {
  render,
};
