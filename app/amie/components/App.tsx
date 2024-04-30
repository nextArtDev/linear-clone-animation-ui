'use client'
import { stagger, useAnimate } from 'framer-motion'
import {
  Todo,
  Colors,
  Availability,
  Music,
  SchedulingLinks,
  Team,
} from './features/card'
import { MusicVisual, OtherVisual } from './features/visual'
import { useFeatureStore } from './features/store'
import { useEscapePress, useHidePageOverflow } from '@/lib/utils'
import { useEffect } from 'react'
import { FeatureTitle } from './features/title'
import { Hero } from './hero'

const features = [
  {
    title: 'Use your calendar as a todo list',
    id: 'todo-list',
    card: Todo,
    visual: OtherVisual,
  },
  {
    title: 'Color your calendar to organize',
    id: 'colors',
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: 'Instantly know if someone is available',
    id: 'availability',
    card: Availability,
    visual: OtherVisual,
  },
  {
    title: 'Track what you listened to when',
    id: 'music',
    card: Music,
    visual: MusicVisual,
  },
  {
    title: 'Send scheduling links guests love',
    id: 'scheduling-links',
    card: SchedulingLinks,
    visual: OtherVisual,
  },
  {
    title: 'Always know what your team is up to',
    id: 'team',
    card: Team,
    visual: OtherVisual,
  },
]

function App() {
  const [scope, animate] = useAnimate()
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature)
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  )
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  )

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null)
  }

  useEscapePress(onEscapePress)
  useHidePageOverflow(!!fullscreenFeature)

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          '.feature-title',
          { opacity: 0, x: '-200px' },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: 'auto' },
          { at: '<' },
        ],
        ['.active-card .gradient', { opacity: 0, scale: 0 }, { at: '<' }],
        ['.active-card .show-me-btn', { opacity: 0 }, { at: '<' }],
        [
          '.back-to-site-btn',
          { opacity: 1, y: '0px' },
          { at: '<', duration: 0.3 },
        ],
      ])
    } else {
      animate([
        [
          '.feature-title',
          { opacity: 1, x: '0px' },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: 'none' },
          { at: '<' },
        ],
        ['.active-card .gradient', { opacity: 1, scale: 1 }, { at: '<' }],
        [
          '.back-to-site-btn',
          { opacity: 0, y: '300px' },
          { at: '<', duration: 0.3 },
        ],
        ['.active-card .show-me-btn', { opacity: 1 }],
      ])
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature])

  return (
    <div className="mx-auto max-w-6xl px-0.5 md:px-4">
      {/* <Hero /> */}
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
        >
          Back to site
        </button>
        {/* [&:has(>_.active-card)]:bg-transparent - in the has() we're gonna target that element that this div should have by direct child selector => if it has element that have active-card class then bg-transparent */}
        <div className="flex w-full items-start gap-2 md:gap-20">
          <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="relative aspect-square w-full rounded-2xl [&:has(>_.active-card)]:bg-transparent">
              {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </div>
          <div className="w-1/5 md:w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  )
}

export default App
