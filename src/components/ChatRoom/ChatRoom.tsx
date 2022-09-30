import * as React from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';
import './ChatRoom.css'

type Props = {

};

export const ChatRoom = (props: Props) => {
    return (
        <article className="chat-wrapper">
            <ChatBubble />
            <ChatBubble />
        </article>
    );
};