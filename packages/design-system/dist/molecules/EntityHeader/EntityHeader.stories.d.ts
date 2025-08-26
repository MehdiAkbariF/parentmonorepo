import type { Meta, StoryObj } from "@storybook/react";
import { EntityHeader } from "./EntityHeader";
declare const meta: Meta<typeof EntityHeader>;
export default meta;
type Story = StoryObj<typeof EntityHeader>;
export declare const Default: Story;
export declare const WithFallbackAvatar: Story;
export declare const BannedStatus: Story;
