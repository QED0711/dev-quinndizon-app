// ======================== STATE ======================== 
import mainManager from '../../state/main/mainManager';

// ======================== ICONS ======================== 
import {FcRefresh} from 'react-icons/fc'

// ======================== MAPPINGS ======================== 
const KEY_MAPPINGS = {
    uptime_ms: "Uptime",
};

const formatHandlers = {
    uptime_ms(val) {
        return val / 1000 + " seconds";
    },
};


export default function SnapshotDisplay({ snapshot, level = 0 }) {
    const isNestedObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);

    const renderArray = (array, level) => (
        <ul className="list-disc ml-5">
            {array.map((item, index) => (
                <li key={index}>{isNestedObject(item) ? renderObject(item, level + 1) : item}</li>
            ))}
        </ul>
    );

    const renderObject = (snapshot, level) => {
        return Object.entries(snapshot).map(([key, value], index) => (
            <div key={index} className={`p-2 my-2 bg-gray-200 rounded-md ${level === 0 ? "shadow-inner shadow-gray-500" : ""}`}>
                <h2 className="w-fit px-2 text-lg text-gray-100 bg-gray-400 rounded-md" style={{ marginLeft: isNaN(level * 5 * 4) ? 0 : level * 5 * 4 }}>
                    {KEY_MAPPINGS[key] ?? key}
                </h2>
                {isNestedObject(value) ? renderObject(value, level + 1) : Array.isArray(value) ? renderArray(value) : <em className={`ml-${(level + 1) * 5}`}>{formatHandlers[key]?.(value) ?? value}</em>}
            </div>
        ));
    };

    return (
        <div>
            <em className="fixed top-2 left-2 font-bold">
                {new Date(snapshot.time).toLocaleString()}
                <button><FcRefresh className='ml-2' onClick={() => {mainManager.restAPI.getSnapshot()}} /></button>
            </em>
            <div className="w-11/12 mx-auto my-8 overflow-y-auto" style={{ height: window.innerHeight - 32 }}>
                {renderObject(snapshot, level)}
            </div>
        </div>
    );
}
