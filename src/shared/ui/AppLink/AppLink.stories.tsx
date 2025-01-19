import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AppLink, { AppLinkTheme } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {},
  args: {
    children: "Link",
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = { theme: AppLinkTheme.PRIMARY };

export const Secondary = Template.bind({});
Secondary.args = { theme: AppLinkTheme.SECONDARY };

export const Red = Template.bind({});
Red.args = { theme: AppLinkTheme.RED };
Red.decorators = [ThemeDecorator(Theme.DARK)];
