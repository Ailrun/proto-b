import ReactDOM from 'react-dom';
import { isElement } from 'react-is';

import { renderApp } from '~src/react/index';

jest.mock('react-dom');

const mockRender = ReactDOM.render as jest.Mock;

describe('react', () => {
  describe('renderApp', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should return nothing', () => {
      expect(renderApp(null)).toBeUndefined();
      expect(renderApp(document.body)).toBeUndefined();
    });

    it('should call react-dom render in it', () => {
      renderApp(null);
      expect(mockRender).toHaveBeenCalledTimes(1);
      mockRender.mockClear();
      renderApp(document.body);
      expect(mockRender).toHaveBeenCalledTimes(1);
    });

    it('should call react-dom render with react element and passed dom element', () => {
      renderApp(null);
      expect(isElement(mockRender.mock.calls[0][0])).toBe(true);
      expect(mockRender).toHaveBeenLastCalledWith(expect.anything(), null);
      mockRender.mockClear();
      renderApp(document.body);
      expect(isElement(mockRender.mock.calls[0][0])).toBe(true);
      expect(mockRender).toHaveBeenLastCalledWith(expect.anything(), document.body);
    });
  });
});
