import {useState} from 'react'
import {Topic} from '../helpers/topic'

export const HandsOn = () => {
  const [darkMode, setDarkMode] = useState(false)

  const [yesCount, setYesCount] = useState(0)
  const [noCount, setNoCount] = useState(0)

  return (
    <Topic title='Hands On with Tailwind.'>
      <div className={darkMode ? 'dark' : ''}>
        <p className='py-2'>Let's try to build a simple page with Tailwind.</p>
        <div>
          {/* https://tailwindcss.com/docs/font-size */}
          {/* https://tailwindcss.com/docs/text-decoration */}
          <p className='italic text-9xl'>I want this text to be big and italic</p>
          <p className='text-xs underline'>I want this text to be small and underlined</p>
        </div>

        <div>
          <div className='bg-rose-500 text-right px-1'>I want this to be on the right</div>
          <div className='bg-teal-500 text-left px-1'>I want this to be on the left</div>
        </div>

        <div className='bg-rose-100 w-full sm:w-1/2'>
          Full width when on mobile, and half width when on desktop
        </div>

        <div className="flex justify-between gap-4 items-center">
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌙' : '🌞'}</button>
          <p className='flex-grow bg-white dark:bg-black dark:text-white'>
          I want this to be dark on dark mode, and light on light mode
          </p>
        </div>

        <div className="hover:bg-red-700">
          I want this to do something when I hover
        </div>

        <div className=''>
          I don't like the indigo default colours, so I want to change them
          <div className='p-2 bg-green-100'></div>
          <div className='p-2 bg-green-200'></div>
          <div className='p-2 bg-green-300'></div>
          <div className='p-2 bg-green-400'></div>
          <div className='p-2 bg-green-500'></div>
          <div className='p-2 bg-green-600'></div>
          <div className='p-2 bg-green-700'></div>
          <div className='p-2 bg-green-800'></div>
          <div className='p-2 bg-green-900'></div>
        </div>
      </div>

      <div className='uppercase'>i want this to be all upper case</div>
      <div className='capitalize underline decoration-wavy'>i want this to be capatilized.</div>
      <div className="pt-6">
      <h1>Do we want to try Tailwind??</h1>
      <div className="flex ">
        <button className="bg-emerald-100" onClick={() => setYesCount(yesCount + 1)}>YES {yesCount}</button>
        <button className="bg-pink-100" onClick={() => setNoCount(noCount + 1)}>NO {noCount}</button>
      </div>
      </div>

    </Topic>
  )
}
