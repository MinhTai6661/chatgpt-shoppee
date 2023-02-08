import React, { useEffect, useState } from 'react';
import { OpenAIApi, Configuration } from 'openai';
import './ChatFeild.css';

export default function ChatFeild({ configuration, openai }) {
    const [response, setResponse] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {}, [valueInput]);

    const handleChat = async () => {
        setIsLoading(true);
        try {
            const completion = await openai.createCompletion({
                model: 'text-davinci-002',
                prompt: valueInput,
                max_tokens: 100,
                n: 1,
                stop: null,
                temperature: 0.5,
            });
            const message = completion.data.choices[0].text;
            console.log('handleChat  completion.data.choices', completion.data.choices);
            setResponse(message);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <input
                className='chat__input'
                value={valueInput}
                style={{ width: '80' }}
                name=''
                id=''
                onChange={(e) => setValueInput(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleChat();
                    }
                }}
            />
            <button onClick={handleChat}>Chat</button>
            <br />
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    <textarea className='chat__result' name='chat' id='chat' disabled>
                        {response}
                    </textarea>
                </>
            )}
        </div>
    );
}
