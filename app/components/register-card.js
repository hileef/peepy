import Ember from 'ember';
import { email, password, passwordConfirmation } from '../utils/user-vlaidations';
import { buildValidations } from 'ember-cp-validation';

// const { Component } = Ember;

const Validations = buildValidations({
  'model.email': email,
  'model.password': password,
  'model.passwordConfirmation': passwordConfirmation
});

export default Ember.Component.extend(Validations, {
});
