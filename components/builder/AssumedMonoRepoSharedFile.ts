export interface SharedButtonProps {
    url?: string;
    text: string;
}

export const SharedButtonInput = {
    name: 'SharedButton',
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
        },
    ],
}