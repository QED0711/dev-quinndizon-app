// ========================= STATE =========================
import apiKeyManager from "../../state/apiKey/apiKeyManager";
export default function Header() {
    return (
        <button
            className="fixed top-2 l-2 p-2 bg-gray-500 rounded-md shadow-sm shadow-gray-400"
            onClick={() => {
                apiKeyManager.setters.setApiKey(null);
            }}
        >
            Clear API Key
        </button>
    );
}
