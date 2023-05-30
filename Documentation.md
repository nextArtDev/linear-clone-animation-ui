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