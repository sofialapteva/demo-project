import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import Button, { ThemeButton } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Button",
  theme: ThemeButton.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Button",
  theme: ThemeButton.OUTLINED,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: "Button",
  theme: ThemeButton.CLEAR_INVERTED,
};
