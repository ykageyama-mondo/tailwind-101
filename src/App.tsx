import './App.css'
import {Topic} from './helpers/topic'
import {Link} from './helpers/link'

function App() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center select-none">
        <img alt='react icon' src="/React-icon.svg" className="h-14"/>
        <h1 className='pl-2 text-5xl font-thin tracking-tighter text-slate-600'>Tailwind <span className='font-mono font-normal text-sky-600'>101</span></h1>
      </div>

      <Topic title="Some resources">
        <p>This repo is in Github: <Link href='https://github.com/ykageyama-mondo/tailwind-101'>github.com/ykageyama-mondo/tailwind-101</Link></p>
        <p>The Tailwind Docs (CTRL + K for quick navigation): <Link href='https://tailwindcss.com/'>tailwindcss.com</Link></p>
      </Topic>

    </div>
  )
}

export default App
