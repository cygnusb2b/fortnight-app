import { moduleFor, test } from 'ember-qunit';

moduleFor('service:user', 'Unit | Service | user', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  needs: [ 'service:graphErrors', 'service:session', 'service:apollo', 'service:loadingDisplay', 'service:auth' ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
