import Image from 'next/image'

const HowWeWork = () => {
  return (
    <div className="relative w-full mb-12">
      <div className="relative w-full h-[50vw] md:h-[40vw] lg:h-[30vw]">
        <Image
          src="https://images.pexels.com/photos/34590948/pexels-photo-34590948.jpeg"
          alt="Process Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h2 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center drop-shadow-lg px-4">
        How We Do <span className="ml-2 text-orange-400">Work</span>
      </h2>
    </div>
  )
}

export default HowWeWork