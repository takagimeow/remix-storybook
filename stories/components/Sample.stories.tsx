import React from "react";
import type { Story } from "@storybook/react/types-6-0";

// import "tailwindcss/tailwind.css";

import type { Props } from "../../app/components/Sample";
import { Sample } from "../../app/components/Sample";

export default {
  component: Sample,
  title: "Component/Sample",
  argTypes: { onClick: { action: "clicked" } },
};

const Template: Story<Props> = (args: Props) => <Sample {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Sample",
};
