import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface props {
    code: string
}

export default function Consolecode({ code }: props) {
    return (
        <div className="console-component">
            <SyntaxHighlighter language="javascript" style={twilight}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

