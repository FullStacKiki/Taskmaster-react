import { useState } from 'react'
import Bar from './Components/Bar.jsx'
import AppInfo from './Components/AppInfo.jsx'
import { InteractiveGridPattern } from './Components/ui/interactive-grid-pattern.jsx'

const App = () => {
  return (
    <div className="overflow-hidden">
      <InteractiveGridPattern   className="opacity-30 -z-50"/>
      <Bar />
      <AppInfo />
    </div>
  )
}

export default App
