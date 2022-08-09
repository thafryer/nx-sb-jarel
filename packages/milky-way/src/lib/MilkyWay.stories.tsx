import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MilkyWay } from './MilkyWay';

export default {
  component: MilkyWay,
  title: 'MilkyWay',
} as ComponentMeta<typeof MilkyWay>;

const Template: ComponentStory<typeof MilkyWay> = (args) => (
  <MilkyWay {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
