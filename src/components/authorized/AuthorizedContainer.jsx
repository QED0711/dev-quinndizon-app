import { useSpiccatoState } from 'spiccato-react';
import mainManager, { mainPaths } from '../../state/main/mainManager';
import Header from './Header';
import SnapshotDisplay from './SnapshotDisplay';
import TabSelector from './TabSelector';

export default function AuthorizedContainer(){
    const {state} = useSpiccatoState(mainManager, [mainPaths.snapshot])
    return (
        <div className='w-screen h-screen overflow-hidden bg-gray-100'>
            <Header  />
            {!state.snapshot && <TabSelector />}
            {state.snapshot && <SnapshotDisplay snapshot={state.snapshot} />}
            
        </div>
    )
}