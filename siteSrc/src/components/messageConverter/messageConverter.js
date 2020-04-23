import React from 'react';
import ReactMarkdown from 'react-markdown';
import { toArray } from 'react-emoji-render';

export default function MessageConverter({
    text,
}) {
    let prepareText = toArray(text)
        .reduce((previous, current) => {
            if (typeof current === "string") {
                return previous + current;
            }
            return previous + current.props.children;
        }, "");

    return <ReactMarkdown source={prepareText} />
}