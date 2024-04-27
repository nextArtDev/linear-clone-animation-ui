## @layer base{} 'GPT'

>In Tailwind CSS, the @layer directive is used to target a specific layer in the stylesheet. The base, components, and utilities layers are provided by default, but you can also define your own custom layers.

>The @layer base {...} directive is used to add styles to the base layer, which contains the CSS rules that are applied to all elements on the page. These styles are typically used to define global styles for basic HTML elements like headings, paragraphs, lists, and links.

```typescript
@tailwind base;

@layer base {
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  a {
    color: #3182ce;
    text-decoration: none;
  }
}
```

>In this example, the @tailwind base directive is used to include the default base styles provided by Tailwind. Then, the @layer base directive is used to add custom styles for the h1, p, and a elements. These styles will be applied to all matching elements on the page, providing a consistent styling foundation for your website or application.

## TailwindCSS _line height_

To add line height using TailwindCSS, you can use the leading utility class. This class sets the line-height property of your element.

Here is an example of how to use it:

```html
<div class="leading-6">
  This text has a line-height of 6 (1.5rem).
</div>
```
In this example, the leading-6 class sets the line-height to 1.5rem (or 6 times the font size). You can adjust the value to any number you like, such as leading-4 for a line-height of 1rem or leading-8 for a line-height of 2rem.

## tailwind for all childrens:
for all the child _link_ :
```html
[&_a]:text-sm
```
or for all the child _li_ :
```html
[&_li]:ml-6
```

## Addreses
```html
 //ghamar
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1679.6261969452867!2d51.66685464071926!3d32.652727069079965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc35d899069079%3A0xa93a8736b719fff!2z2YXYrNiq2YXYuSDZgtmF2LHYp9mE2K_ZiNmE2Yc!5e0!3m2!1sen!2s!4v1685385280361!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
//sehat
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3368.9345697402714!2d51.3708342!3d32.3941156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc272d88342927%3A0xf30f01341d18c02a!2z2YXYsdqp2LIg2KzYsdin2K3bjCDZhdit2K_ZiNivINmI2LPYsdm-2KfYptuMINi12K3Yqg!5e0!3m2!1sen!2s!4v1685385637744!5m2!1sen!2s"
            width="400"
            height="250"
          ></iframe>{' '}

```
## Class Variance Authority

>CSS-in-TS libraries such as Stitches (opens in a new tab) and Vanilla Extract (opens in a new tab) are fantastic options for building type-safe UI components; taking away all the worries of class names and StyleSheet composition.

npm i class-variance-authority

## Adding screen readers
```TS
<button>
<span className='sr-only' >Toggle menu</span>
<HamburgerIcon >
</button>
```

## Not to scroll animation & close menu when resize phone

```javascript
useEffect(() => {
    const html = document.querySelector('html')
    if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen)
  }, [hamburgerMenuIsOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)

    window.addEventListener('orientationchange', closeHamburgerNavigation)
    window.addEventListener('resize', closeHamburgerNavigation)

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation)
      window.removeEventListener('resize', closeHamburgerNavigation)
    }
  }, [setHamburgerMenuIsOpen])
```

## Adding variables to tailwind

animation example:
1. First we define animation in _tailwind.config.js_ by using _var(--variableName , defualtValue)_
  **point**: We add _forwards_ to force our animation to stay at the end situation, if wont, it wouls stop at its initial position which is _opacity-0_
```javascript
 theme: {
    extend: {
      colors: {       
      },
      backgroundImage: {
      },
      boxShadow: {
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'none' },
        },
      },
      animation: {
        //Adding var() and default value 
        'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
      },
    },
  },
  plugins: [],
}
```
 we define **'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards'** which in that variable: **var(--animation-delay, 0ms)** is instead of _animation-delay_

1. Use it in different components, using square brackets: _[--variableName]_
   and of course we have to animate and translate them from somewhere _opacity-0 translate-y-4_

```javascript
<Button
          className="animate-fade-in opacity-0 translate-y-4"
          href="/"
          variant="secondary"
          size="small"
        >
          Linear 2023 Release - Build for scale <IconWrapper> →</IconWrapper>
        </Button>
        //Using [--variableName] to modify css property
        <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-4">
          Linear is a better
          <br className="hidden md:block" />
          way
          <br className="hidden md:block" />
          to build products
        </HeroTitle>
        //Using [--variableName] to modify css property
        <HeroSubTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-4">
          Meet the new standard for modern software development.
          <br />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <Button
         //Using [--variableName] to modify css property
          className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-4"
          href="/"
          variant="primary"
          size="large"
        >
          {' '}
          Get Started <IconBxChevronRight />
        </Button>
```

## How to rotate a _div_ in *x-axis*

first we should apply a translation to _x_ axis, tailwind does not support it so we write it in square brackets:
then we define a wrapper div, to set z-axis by _perspective_ property:
```javascript
 <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div  className={classNames(
          // Because we dont have 3 dimensions, we have to add perspective to wrapper
          'relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient')}>
  //...
      </div>
</div>
```

## Detecting if the component is in view

We use [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

>useInView hook
```javascript
// Use object destructuring, so you don't need to remember the exact order
const { ref, inView, entry } = useInView(options);

// Or array destructuring, making it easy to customize the field names
const [ref, inView, entry] = useInView(options);
```
>The useInView hook makes it easy to monitor the inView state of your components. Call the useInView hook with the (optional) options you need. It will return an array containing a ref, the inView status and the current entry. *Assign the ref to the DOM element you want to monitor*, and *the hook will report the status*.

### We can set _options_
It has **threshold** property: Thats a number between 0 and 1 that tells _the percentage of the element that should be visible_
To set a boolean _wether visiblity goes back or not is_ we should use **triggerOnce**.

```typescript
const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true })
<div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={classNames(
          //If its in view set it normal, if not, until the 40 percent of that, rotate it 25degrees 
          inView ? 'transform-none' : '[transform:rotateX(25deg)]', )}
      >
```

# SVG paths and animation

## svg path
```html
<path d="M 10 10 H 90 V 90 H 10 Z" />
```
the path _starts at_ point (10, 10): **M 10 10**
using the "M" command to move to that point. Then, 
**H 90** using the "H" command, it draws a horizontal line to point (90, 10). 
**V 90** using the "V" command, it draws a vertical line to point (90, 90). 
**H 10** using another "H" command, it draws a horizontal line back to point (10, 90). 
**Z** Finally, using the "Z" command, it closes the path by drawing a straight line back to the starting point (10, 10).

===
<path pathLength="1" d="M1500 72L220 72"></path>

This is an SVG path element that defines a straight line segment using the "d" attribute. The "d" attribute contains a series of commands and coordinates that define the path's shape and position.

1. **M1500 72**: This moves the path's starting point to the coordinate (1500, 72) using the "M" command. The "M" command stands for "move to" and is used to set the initial starting point for the path.
2. **L220 72**: This draws a straight line from the starting point to the coordinate (220, 72) using the "L" command. The "L" command stands for "line to" and is used to draw a straight line from the current point to a new point.

```typescript
<svg
          className={classNames(
            'absolute left-0 top-0 h-full w-full',
            '[&_path]:stroke-white [&_path]:[strokeOpacity:0.5] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M3000 60L1 60"></path>
          <path pathLength="1" d="M3000 440L1 440"></path>
          <path pathLength="1" d="M3000 320L1 320"></path>
          <path pathLength="1" d="M350 777L350 1"></path>
          <path pathLength="1" d="M350 777L350 128"></path>
          <path pathLength="1" d="M1300 777L1300 1"></path>
          <path pathLength="1" d="M1300 777L1300 128"></path>
        </svg>
```

### [&_path]:stroke-white [&_path]:[strokeOpacity:0.5]

styling stroke opacity and color of paths.

### Animating svg
By animating ***stroke-offset*** we can animate svg:

```css
'sketch-lines': {
          '0%': { 'stroke-dashoffset': 1 },
          '50%': { 'stroke-dashoffset': 0 },
          '99%': { 'stroke-dashoffset': 0 },
          '100%': { visiblity: 'hidden' },
        }
'sketch-lines': 'sketch-lines 1200ms ease-out forwards',
```
And were it was in view, we animate it:
The linear team decided to have this line only have one point, but the _dashoffset_ also use to animate from one point to the another point, we need to set the css property of that 'dash array' also to have one point; we do that by another dash class **_stroke-dasharray : 1_**
we also need to add offset to default animation by: ***stroke-dashoffset:1***
and we animate lines when they're in view by: **inView && '[&_path]:animate-sketch-lines**

```typescript
<svg
          className={classNames(
            'absolute left-0 top-0 h-full w-full',
            //defining points to 1, default offset to 1
            '[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            // animating svg when it becomes in view
            inView && '[&_path]:animate-sketch-lines'
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
```
