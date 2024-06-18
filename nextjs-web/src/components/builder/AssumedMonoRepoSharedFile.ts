import type { ComponentInfo } from "@builder.io/sdk-react";

// TODO: Actually make this a shared file
export interface SharedButtonProps {
    url?: string;
    text: string;
}

export const SharedButtonInput: ComponentInfo = {
    name: 'SharedButton',
    noWrap: true,
    inputs: [
        {
            name: 'url',
            type: 'string',
            defaultValue: '/',
        },
        {
            name: 'text',
            type: 'string',
            defaultValue: 'Button Text',
            required: true,
        },
    ],
}