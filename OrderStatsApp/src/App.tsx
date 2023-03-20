import { useState } from 'react'
import statData from "./assets/data.json"
import WidgetOrderStats from './components/WidgetOrderStats';
import { Widget } from "./types/typeData"
const stats = statData as [Widget]
function App() {
  return (
    <div className='App'>
      <WidgetOrderStats stats={stats} />
    </div>
  )
}

export default App
