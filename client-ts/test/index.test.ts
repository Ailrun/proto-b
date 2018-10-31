import * as reactModule from '~src/react/index';

describe('root', () => {
  it('should call renderApp with result of getElementById', async () => {
    const mockRenderApp = jest.spyOn(reactModule, 'renderApp');

    const target = document.createElement('div');
    jest.spyOn(document, 'getElementById')
      .mockReturnValueOnce(target);

    await import('~src/index');

    expect(mockRenderApp).toHaveBeenCalledTimes(1);
    expect(mockRenderApp.mock.calls[0][0]).toBe(target);
  });
});
