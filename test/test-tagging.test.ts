import { html, fixture, expect } from '@open-wc/testing';

import { TestTagging } from '../src/TestTagging.js';
import '../test-tagging.js';

describe('TestTagging', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<TestTagging>(html`<test-tagging></test-tagging>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<TestTagging>(html`<test-tagging></test-tagging>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<TestTagging>(
      html`<test-tagging title="attribute title"></test-tagging>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<TestTagging>(html`<test-tagging></test-tagging>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
