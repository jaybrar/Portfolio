import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('scroll-projects', 'Integration | Component | scroll projects', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scroll-projects}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#scroll-projects}}
      template block text
    {{/scroll-projects}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
