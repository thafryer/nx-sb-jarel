import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Starburst } from './starburst';

export default {
  component: Starburst,
  title: 'Starburst',
} as ComponentMeta<typeof Starburst>;

const Template: ComponentStory<typeof Starburst> = (args) => (
  <Starburst {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
