import fetch from 'node-fetch';

type createOauthHandlerDeps = {
  readonly environment: Environment;
}
const createOauthHandler = ({
  environment,
}: createOauthHandlerDeps) => {
  return async (req: import('express').Request, res: import('express').Response) => {
    const clientId: string = 'c06d13fbd9de9880b3ad';
    const code: string = req.query.code;
    const clientSecret: string = environment.GITHUB_CLIENT_SECRET;

    // @ts-ignore
    const {
      access_token: accessToken,
      token_type: tokenType,
      scope,
    } = await getAccessToken({
      clientId,
      clientSecret,
      code,
    });

    res.redirect('');
  };
};

type getAccessTokenDeps = {
  readonly clientId: string,
  readonly clientSecret: string,
  readonly code: string,
};
const getAccessToken = async ({
  clientId,
  clientSecret,
  code,
}: getAccessTokenDeps) => {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: 'https://proto-b.now.sh/github/oauth',
    }),
  });

  return await response.json();
};

export {
  createOauthHandler,
  createOauthHandlerDeps,
};
