import Button, { IconWrapper } from './components/Button'
import Container from './components/Container'
import Hero, { HeroSubTitle, HeroTitle } from './components/Hero'
import HeroImage from './components/HeroImage'
import IconBxChevronRight from './components/icons/Chevron'

export default function Home() {
  return (
    <Container className=" overflow-hidden pt-16">
      <Hero>
        <Button
          className="animate-fade-in"
          href="/"
          variant="secondary"
          size="small"
        >
          Linear 2023 Release - Build for scale <IconWrapper> →</IconWrapper>
        </Button>
        <HeroTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-4 ">
          Linear is a better
          <br className="hidden md:block" />
          way
          <br className="hidden md:block" />
          to build products
        </HeroTitle>
        <HeroSubTitle className="animate-fade-in [--animation-delay:800ms] opacity-0 translate-y-4">
          Meet the new standard for modern software development.
          <br />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <Button
          className="animate-fade-in [--animation-delay:1200ms] opacity-0 translate-y-4"
          href="/"
          variant="primary"
          size="large"
        >
          {' '}
          Get Started <IconBxChevronRight />
        </Button>
        <HeroImage />
      </Hero>
    </Container>
  )
}
