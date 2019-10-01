import styled from '@emotion/styled';
import React, { SFC } from 'react';

const ghOAuthLink =
  'https://github.com/login/oauth/authorize' +
  '?client_id=c06d13fbd9de9880b3ad' +
  '&redirect_uri=https://proto-b.now.sh/github/oauth';

const openCenterPopup = (
  url?: string, target?: string,
  w?: number, h?: number,
  extraFeatures?: string,
) => {
  const width = w === undefined || w < 100 ?
    100 :
    w;
  const height = h === undefined || h < 100 ?
    100 :
    h;

  const windowScreenX = window.screenX !== undefined ?
    window.screenX :
    window.screenLeft;
  const windowScreenY = window.screenY !== undefined ?
    window.screenY :
    window.screenTop;

  const windowWidth = window.outerWidth || screen.width;
  const windowHeight = window.outerHeight || screen.height;

  const left = (windowWidth - width) / 2 + windowScreenX;
  const top = (windowHeight - height) / 2 + windowScreenY;

  const features = [
    `width=${width}`,
    `height=${height}`,
    `left=${left}`,
    `top=${top}`,
    extraFeatures,
  ]
    .filter((feature) => feature !== undefined && feature !== '')
    .join(', ');

  return window.open(url, target, features);
};

const openGitHubPopup = () => {
  const ghWidth = 540;
  const ghHeight = 800;
  const ghWindow =
    openCenterPopup(ghOAuthLink, undefined, ghWidth, ghHeight);

  if (ghWindow === null) {
    console.log('Cannot open window!');

    return;
  }

  console.log('add handler!');
  ghWindow.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = 'hi';
    ghWindow.opener.prompt('hi');
  });
};

const StyledButton = styled.button({
  display: 'flex',

  boxSizing: 'border-box',
  width: 100,
  height: 40,

  borderRadius: 5,
  background: '#222222',

  justifyContent: 'center',
  alignItems: 'center',

  textDecoration: 'none',
  color: '#d2d2d2',

  ':hover': {
    fontWeight: 500,
    color: '#e1e1e1',
  },
});

const GitHubLoginButton: SFC = () => {
  return (
    <StyledButton
      onClick={openGitHubPopup}
    >
      GitHub
    </StyledButton>
  );
};

export {
  GitHubLoginButton,
};
