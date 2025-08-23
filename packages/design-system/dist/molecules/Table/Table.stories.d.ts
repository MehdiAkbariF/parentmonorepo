import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
interface User {
    id: number;
    fullName: string;
    email: string;
    role: 'Admin' | 'Editor' | 'Viewer';
    status: 'فعال' | 'غیرفعال';
}
declare const meta: Meta<typeof Table<User>>;
export default meta;
type Story = StoryObj<typeof Table<User>>;
export declare const Default: Story;
export declare const WithCustomCells: Story;
export declare const EmptyState: Story;
export declare const MobileView: Story;
