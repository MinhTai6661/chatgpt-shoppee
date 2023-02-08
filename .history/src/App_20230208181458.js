import logo from './logo.svg';
import './App.css';
import ChatFeild from './components/ChatField';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_KEY_CHATGPT,
});
const openai = new OpenAIApi(configuration);
function App() {
    return (
        <div className='App'>
            <h1>CHAT GPT SHOPPE VESION OF BETUER</h1>
            <ChatFeild configuration={configuration} openai={openai} />
        </div>
    );
}

export default App;
