import {Sandpack} from '@codesandbox/sandpack-react'
import {Details} from '../helpers/details'
import {Topic} from '../helpers/topic'

export const HandsOn = () => {
  return (
    <Topic title='Hands On with Tailwind.'>
      <div>
        <p className='py-2'>Let's try to build a simple page with Tailwind.</p>
        <div>
          <p>I want this text to be big and italic</p>
          <p>I want this text to be small and underlined</p>
        </div>

        <div>
          <div className='bg-rose-500'>I want this to be on the right</div>
          <div className='bg-teal-500'>I want this to be on the left</div>
        </div>

        <div>
          I want this to be half height when on mobile, and full height when on desktop
        </div>

        <div>
          I want this to be dark on dark mode, and light on light mode
        </div>

        <div>
          I want this to do something when I hover
        </div>

        <div className=''>
          I don't like the indigo default colours, so I want to change them
          <div className='p-2 bg-indigo-100'></div>
          <div className='p-2 bg-indigo-200'></div>
          <div className='p-2 bg-indigo-300'></div>
          <div className='p-2 bg-indigo-400'></div>
          <div className='p-2 bg-indigo-500'></div>
          <div className='p-2 bg-indigo-600'></div>
          <div className='p-2 bg-indigo-700'></div>
          <div className='p-2 bg-indigo-800'></div>
          <div className='p-2 bg-indigo-900'></div>
        </div>
      </div>
    </Topic>
  )
}
