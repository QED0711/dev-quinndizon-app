import { useState } from "react";
import apiKeyManager from "../state/apiKey/apiKeyManager";

export default function KeyInput() {
    const [apiKey, setApiKey] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        apiKeyManager.setters.setAndVerifyApiKey(apiKey);
    };
    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center h-screen">
                <input type="text" className="p-2 text-3xl text-center rounded-md shadow-sm shadow-gray-500" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="Enter API Key..." required />
                <br />
                <input type="submit" value="ENTER" className="mt-2 p-4 bg-gray-200 rounded-md shadow-md shadow-gray-500 cursor-pointer" />
            </div>
        </form>
    );
}
