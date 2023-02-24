import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pluto } from './Pluto';

export default {
  component: Pluto,
  title: 'Pluto',
} as ComponentMeta<typeof Pluto>;

const Template: ComponentStory<typeof Pluto> = (args) => <Pluto {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
