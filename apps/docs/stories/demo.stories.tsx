import type { Meta, StoryObj } from "@storybook/react";
import { Demo } from "@acme/ui/dist/client/demo";

const meta: Meta<typeof Demo> = {
  title: "UI/Demo",
  component: Demo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  args: {},
};

// This is needed to ensure Storybook correctly loads the CSS
export const decorator = () => {
  return (
    <div className="decorator">
      <Demo />
    </div>
  );
}; 