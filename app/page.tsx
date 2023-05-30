import Container from './components/Container'
import Hero, { HeroSubTitle, HeroTitle } from './components/Hero'

export default function Home() {
  return (
    <Container>
      <Hero>
        <>
          <HeroTitle>
            Linear is a better
            <br />
            way
            <br />
            to build products
          </HeroTitle>
          <HeroSubTitle>
            Meet the new standard for modern software development.
            <br />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubTitle>
          <img src="/hero.webp" alt="hero image" />
        </>
      </Hero>
    </Container>
  )
}
