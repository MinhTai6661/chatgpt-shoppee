import logo from './logo.svg';
import './App.css';
import ChatFeild from './components/ChatField';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
function App() {
    return (
        <div className='App'>
            <ChatFeild configuration={configuration} openai={openai} />
        </div>
    );
}

export default App;
