import { useState } from "react";
import { useSpiccatoState } from "spiccato-react";
import "./App.css";
import AuthorizedContainer from "./components/authorized/AuthorizedContainer";
import KeyInput from "./components/KeyInput";
import apiKeyManager from "./state/apiKey/apiKeyManager";

function App() {
    const { state } = useSpiccatoState(apiKeyManager, [apiKeyManager.paths.apiKey]);

    return <div className="h-screen w-screen overflow-hidden bg-gray-100">{state.apiKey ? <AuthorizedContainer /> : <KeyInput />}</div>;
}

export default App;
