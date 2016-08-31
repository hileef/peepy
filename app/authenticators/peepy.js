import OAuth2PasswordGrant from ' ember-simple-auth/authenticators/oauth2-password-grant';
import config from ' ../config/environment';

export default OAuth2PasswordGrant.extend({

  serverTokenEndPoint: `${config.DS.host}/${config.DS.namespace}/token`


});
