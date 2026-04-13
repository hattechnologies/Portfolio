import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full  bg-foreground text-background py-28 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-start gap-4">
          <div className="relative w-32 h-12">
            <h1 className='font-bold text-5xl'>HAT</h1>
          </div>
          <p className="text-zinc-400 mt-2">
            Humanizing Automated Technologies – Transforming ideas into intelligent solutions.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-background">Explore</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/projects" className="hover:text-amber-500 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="https://calendly.com/freelance-aitr/30min" className="hover:text-amber-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-background">Contact</h3>
          <p className="text-zinc-400">
            BIC E-8, Islamabad<br />
            Pakistan
          </p>
          <p className="text-zinc-400">
            Email: <a href="mailto:hat.technologies.info@gmail.com" className="hover:text-amber-500 transition-colors">hat.technologies.info@gmail.com</a><br />
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-zinc-500/20 pt-6 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} HAT – Humanizing Automated Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;