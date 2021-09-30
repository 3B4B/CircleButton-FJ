import { html } from 'lit';
import '../circle-button-fj.js';

export default {
  title: 'CircleButtonFj',
  component: 'circle-button-fj',
  argTypes: {
    title: { control: 'text' },
    link: { control: 'text' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    description: { control: 'text' },
    contrast:{ control: 'boolean' },
    dark: { control: 'boolean' },
  },
};

function Template({ title = 'Hello world', disabled = false, contrast = false, dark=false, icon="", link="" }) {
  return html`
    <circle-button-fj
      .title=${title} .disabled=${disabled} .contrast=${contrast} .dark=${dark} .icon=${icon} .link=${link}
    >
    </circle-button-fj>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
