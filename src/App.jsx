import { useState } from 'react'
import Slider from './components/Slider'
import Card from './components/Card'
import bar1 from './assets/bar1.jpg'
import bar3 from './assets/bar3.jpg'
import spinner from './assets/spinner.jpg'
import spinner2 from './assets/spinner2.jpg'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center'>
          <Slider />
      </div>

      <div className='flex justify-center mt-20 flex-wrap'>
          <Card/>
          <Card2 />
      </div>

      <div className='flex justify-center mt-3 mb-10 flex-wrap'>
          <Card3/>
          <Card4/>
      </div>
    </>
  )
}

export default App
