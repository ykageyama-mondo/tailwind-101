import './App.css'
import {Topic} from './helpers/topic'
import {Link} from './helpers/link'
import {CSSIsHard} from './topics/1.SomeHistory'
import {Introduce} from './topics/2.Introduce'
import {HandsOn} from './topics/3.HandsOn'

function App() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center select-none">
        <img alt='tailwindcss icon' src="/tailwindicon.svg" className="h-12"/>
        <h1 className=' font-sans font-bold text-sky-500'>101</h1>
      </div>

      <Topic title="Some resources">
        <p>This repo is in Github: <Link href='https://github.com/ykageyama-mondo/tailwind-101'>github.com/ykageyama-mondo/tailwind-101</Link></p>
        <p>The Tailwind Docs (CTRL + K for quick navigation): <Link href='https://tailwindcss.com/'>tailwindcss.com</Link></p>
      </Topic>
      <CSSIsHard/>
      <Introduce/>
      <HandsOn/>
    </div>
  )
}

export default App
