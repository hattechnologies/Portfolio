"use client"
import Image from "next/image";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row bg-amber-500 w-full mx-auto gap-8 md:gap-12 md:p-0">
      
      <div className="w-full md:w-2/5 relative h-[50vw] md:h-[400px]  overflow-hidden shadow-lg">
        <Image
          src="https://ik.imagekit.io/j6ucmu8pi/connect.jpg"
          alt="Connect Illustration"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col justify-center gap-4 md:gap-6 px-7 py-8 md:py-24 sm:px-2 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-800">
          Connect
        </h2>
        <p className="text-lg sm:text-xl md:text-xl text-zinc-700">
          Let's talk! We’d love to hear about your project and explore how we can help.
        </p>
        <InteractiveHoverButton className="rounded-full w-fit bg-foreground px-5 sm:px-6 py-2 sm:py-3 font-semibold text-background shadow-lg border-none text-sm sm:text-base">
          Get in Touch
        </InteractiveHoverButton>
      </div>
    </section>
  );
};

export default Contact;