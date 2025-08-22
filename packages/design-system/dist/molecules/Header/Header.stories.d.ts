import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
declare const meta: Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof Header>;
export declare const Default: Story;
export declare const WithTitleOnly: Story;
export declare const BackButtonOnly: Story;
export declare const WithCustomActions: Story;
