// ========================= STATE =========================
import apiKeyManager from "../../state/apiKey/apiKeyManager";
export default function Header() {
    return (
        <button
            className="fixed top-2 right-2 text-green-500 text-sm"
            onClick={() => {
                apiKeyManager.setters.setApiKey(null);
                apiKeyManager.setters.setIsAuthorized(false);
            }}
            title={"Click to reset API Key"}
        >
            <div className="relative bottom-1 inline-block h-1 w-1 bg-green-500 rounded-full"></div>
            <p className="relative left-1 inline-block">Authorized</p>
        </button>
    );
}
