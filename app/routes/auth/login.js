import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    return {email: '', password: ''};
  },
  actions: {
    doLogin() {
      const user = this.get('currentModel');
      this.get('session').authenticate(
        'authenticator:peepy', user.email, user.password
      ).then(() => {
        this.get('flashMessages').success('Logged in successfully');
      }).catch((response) => {

        console.log('ERROR RESPONSE ');
        console.log(response);

        // if error code is 401
        if(response.errors.mapBy('code').indexOf(401) >= 0) {
          this.get('flashMessages').danger('Login unsuccessful, please try again.');
        } else {
          this.get('flashMessages').danger('Server Error.');
        }

      });
    }
  }
});
