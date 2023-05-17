import {Details} from '../helpers/details'
import {Topic} from '../helpers/topic'

export const CSSIsHard = () => {
  return (
    <Topic title='CSS is hard.' titleClassName="translate-x-[-2em]">
      <div className='flex justify-center'>
        <img src="/css.webp" className="h-[30em] border-8 border-gray-900"></img>
      </div>

      <Details summary='What is CSS?'>
        <p>CSS stands for Cascading Style Sheets.</p>
        <p>It describes how HTML is displayed on the screen.</p>
        <p>It defines the look and feel of a site.</p>
      </Details>

      <p className="py-2">On the surface, CSS seems simple. Just a bunch of properties you can apply to your HTML.</p>

      <Details summary='Why is CSS hard?'>
        <strong>But it's hard to get it to look the way you want for different users.</strong>
        <p className='pl-2'>• It's hard to make it look good on all screen sizes.</p>
        <p className='pl-2'>• It's hard to make it look good on all browsers.</p>
        <strong>But it's hard to make it consistent</strong>
        <p className='pl-2'>• It's hard to make it look the same way across all your entire application.</p>
        <p className='pl-2'>• It's hard to make it behave the same way across all browsers.</p>
        <p className='pl-2'>• It's hard to make colours and spacing work with each other.</p>
        <strong>But it's hard to apply styling to just the right component.</strong>
        <p className='pl-2'>• It's hard to keep track of all cascaded styles.</p>
        <p className='pl-2'>• It's hard to work around problems with specificity.</p>
        <p className='pl-2'>• It's hard to figure out where some styling is coming from.</p>
        <p className='pl-2'>• It's hard to read CSS.</p>
        <strong>But it's hard to name my classes and ids.</strong>

      </Details>
    </Topic>
  )
}
