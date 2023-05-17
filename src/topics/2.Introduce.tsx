import {Details} from '../helpers/details'
import {Topic} from '../helpers/topic'

export const Introduce = () => {
  return (
    <Topic title='Introducing TailwindCSS.'>

      <Details summary='What is Tailwind?'>
        <p>A utility-first CSS framework.</p>
        <p>It comes with a set of CSS classes that you can apply to your HTML.</p>
        <p>Fully customizable and modular but comes with some sane defaults to start building our own design system.</p>
      </Details>
      <br/>

      <Details summary='Why should we use Tailwind?'>
        <div className="pb-3">
          <strong>It's hard to get it to look the way you want for different users.</strong>
          <p className='pl-2'>• Has built in support for responsive breakpoints.</p>
          <p className='pl-2'>• Classes are made to work on all browsers. (e.g. select-none)</p>

        </div>
        <div className="pb-3">
          <strong>It's hard to make it consistent</strong>
          <p className='pl-2'>• Design system supports using consistent values for styling.</p>
          <p className='pl-2'>• Predefined colour palettes make sure our colours a consistent and match without a UX designer.</p>
          <p className='pl-2'>• Arbitrary values can still be specified but is made obvious with square brackets <code>[ ]</code>.</p>
        </div>
        <div className="pb-3">
          <strong>It's hard to apply styling to just the right component.</strong>
          <p className='pl-2'>• Classes are scoped to the component they are applied to.</p>
          <p className='pl-2'>• We never have to deal with specificity or keep track of cascading styles.</p>
          <p className='pl-2'>• Classes are named after what they do.</p>
          <p className='pl-2'>• No more abstract class names like <code>search-box-dropdown-btn</code></p>
        </div>
        <div>
          <strong>But it's hard to name my classes and ids.</strong>
          <p className='pl-2'>• We don't have to create class names. We just apply them.</p>
          <p className='pl-2'>• This in turn will make us faster and more productive (once we get used to it)</p>

        </div>
      </Details>
      <br/>

      <Details summary='Why should we not use Tailwind?'>
        <strong>It's has a steep learning curve.</strong>
        <p className='pl-2'>• It's hard to remember all the classes, variants, values and utilities.</p>
        <p className='pl-2'>• You will probably need to have the Tailwind documentation open a lot of the time</p>
        <strong>It's a framework.</strong>
        <p className='pl-2'>• So it's opinionated.</p>
        <p className='pl-2'>• You might not agree with the way things work.</p>
        <p className='pl-2'>• You might not agree with the way things have been built.</p>
        <strong>It looks ugly.</strong>
        <p className='pl-2'>• So much that people have built extensions to hide class names.</p>
        <p className='pl-2'>• When dealing with a complex component, you can end up with a long list of classes.</p>
        <strong>Doesn't solve all styling griefs.</strong>
        <p className='pl-2'>• When using component library (like Prime Components) there will be cases where we still need to apply CSS to classes.</p>
      </Details>

    </Topic>
  )
}
