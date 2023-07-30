import {FcAlarmClock, FcLineChart} from 'react-icons/fc'

const ICON_STYLE = "w-fill mx-auto my-4 text-center text-[5rem]"

const Tab = ({title, icon}) => {
    return (
        <div className="bg-gray-200 rounded-sm shadow-sm shadow-gray-800 cursor-pointer">
            <h1 className="text-xl text-gray-100 bg-gray-600">{title}</h1>
            {icon}
        </div>
    )
}

export default function TabSelector() {
    return (
        <div className="flex flex-column items-center justify-center h-full">
            <div className="grid grid-cols-2 gap-4 w-11/12 text-center">
                <Tab title="Dashboard" icon={<FcLineChart  className={ICON_STYLE}/>} />
                <Tab title="Reward Timer" icon={<FcAlarmClock  className={ICON_STYLE}/>} />
            </div>
        </div>
    );
}
