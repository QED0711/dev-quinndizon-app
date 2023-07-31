import {FcAlarmClock, FcLineChart, FcDocument} from 'react-icons/fc'
import mainManager from '../../state/main/mainManager'

const ICON_STYLE = "w-fill mx-auto my-4 text-center text-[5rem]"
/**
 * 
 * @param {{title: string, icon: ReactIcons, onClick: function}} props 
 * @returns 
 */
const Tab = ({title, icon, onClick}) => {
    return (
        <div className="bg-gray-200 rounded-sm shadow-sm shadow-gray-800 cursor-pointer" onClick={onClick}>
            <h1 className="text-xl text-gray-100 bg-gray-600">{title}</h1>
            {icon}
        </div>
    )
}

export default function TabSelector() {
    const handleSnapshotClick = async () => {
        const snapshot = await mainManager.restAPI.getSnapshot()
        console.log(snapshot)
    }
    
    const handleRewardTimerClick = async () => {
        const ip = await mainManager.restAPI.getValueByKey("ip")
        window.open(`https://${ip}`, "_blank");
    }

    return (
        <div className="flex flex-column items-center justify-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 text-center">
                <Tab title="Snapshot" icon={<FcDocument  className={ICON_STYLE}/>} onClick={handleSnapshotClick} />
                <Tab title="Dashboard" icon={<FcLineChart  className={ICON_STYLE}/>} />
                <Tab title="Reward Timer" icon={<FcAlarmClock  className={ICON_STYLE}/>} onClick={handleRewardTimerClick} />
            </div>
        </div>
    );
}
