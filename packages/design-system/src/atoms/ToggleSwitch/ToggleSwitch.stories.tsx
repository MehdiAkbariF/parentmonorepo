import React, { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Atoms/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

// استوری تعاملی با استفاده از هوک
export const Interactive: Story = {
  name: "Interactive",
  render: () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
      <ToggleSwitch
        label="فعال بودن فروشگاه"
        enabled={isEnabled}
        onChange={setIsEnabled}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "حالت غیرفعال",
    enabled: false,
    disabled: true,
  },
};