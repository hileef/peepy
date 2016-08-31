import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    doRegister() {
      this.get('currentModel').save().then(() => {

        this.transitionTo('auth.login');
        this.get('flashMessages').success('Successfully registered !');
      }).catch((response) => {
        this.get('flashMessages').danger(response.errors.mapBy('detail').join(', '));
      });

    }
  }
});
