import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Emojione } from 'react-emoji-render';

function EmojiWrapper({ children }) {
    return <Emojione text={children} />
}

export default function MessageConverter({
    text,
}) {
    return (
        <ReactMarkdown 
            source={text}
            renderers={{
                'text': EmojiWrapper,
            }}
        />

    );
}