import Header from './Header';
import TabSelector from './TabSelector';

export default function AuthorizedContainer(){
    return (
        <div className='w-screen h-screen overflow-hidden bg-gray-100'>
            <Header  />
            <TabSelector />
        </div>
    )
}