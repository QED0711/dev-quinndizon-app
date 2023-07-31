import { useState } from "react";
import { useSpiccatoState } from "spiccato-react";
import "./App.css";
import AuthorizedContainer from "./components/authorized/AuthorizedContainer";
import KeyInput from "./components/KeyInput";
import apiKeyManager from "./state/apiKey/apiKeyManager";

function App() {
    const { state } = useSpiccatoState(apiKeyManager, [apiKeyManager.paths.apiKey, apiKeyManager.paths.isAuthorized]);

    return <div className="h-screen w-screen overflow-hidden bg-gray-100">{state.isAuthorized ? <AuthorizedContainer /> : <KeyInput />}</div>;
}

export default App;
