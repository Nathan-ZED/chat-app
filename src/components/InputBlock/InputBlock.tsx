import * as React from 'react';
import './InputBlock.css'

type Props = {

};

export const InputBlock = (props: Props) => {
    return (
        <article className="input-block">
            <div className={"wrapper"}>
                <input type="text" className="border-1 border-b-blue-300 rounded" />
                <button type={"button"}>GO</button>
            </div>
        </article>
    );
};