
import { InteractiveGridPattern } from '@/Components/ui/interactive-grid-pattern'
import Bar from "@/Components/Bar.jsx"
import AppInfo from '@/Components/AppInfo'

const Home = () => {
    return (
    <div>
        <div className="overflow-hidden">
            <InteractiveGridPattern   className="opacity-30 -z-50"/>
            <Bar />
            <AppInfo />
        </div>
    </div>
    )
}

export default Home
