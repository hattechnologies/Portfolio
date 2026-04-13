"use client"
import { BackgroundRippleEffect } from './ui/background-ripple-effect'
import DecryptedText from './DecryptedText'

const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-amber-500">
      
      <BackgroundRippleEffect cols={60} rows={20} />

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 md:left-10 md:-translate-x-0 z-10 max-w-3xl text-center md:text-left px-4">
        <h2 className="font-bold text-foreground text-4xl lg:text-6xl ">
          <DecryptedText
            text="Humanizing Automated Technologies"
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={true}
            speed={80}
          />
        </h2>

        <p className="mt-4 max-w-md text-sm md:text-base text-foreground ">
          We build automation that feels human—turning complex systems into simple, intuitive experiences.
        </p>
      </div>

    </div>
  )
}

export default Hero