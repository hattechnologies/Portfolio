import React from "react";
import { IconType } from "react-icons";
import { FiTarget, FiCode, FiServer, FiAirplay } from "react-icons/fi";

const AppProcessCards: React.FC = () => {
  return (
    <div className="">
        <h2 className=" px-6 md:px-10 py-8 max-w-lg text-4xl font-bold md:text-5xl mb-14">
          Our Application Development 
          <span className="text-amber-500"> Process</span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <ProcessCard
          title="Plan & Strategize"
          description="We understand your vision and map a clear roadmap."
          Icon={FiTarget}
        />
        <ProcessCard
          title="Design & Prototype"
          description="We create intuitive interfaces and interactive prototypes."
          Icon={FiCode}
        />
        <ProcessCard
          title="Develop & Integrate"
          description="We turn designs into scalable, reliable applications."
          Icon={FiServer}
        />
        <ProcessCard
          title="Launch & Optimize"
          description="We deploy, monitor, and continuously improve your app."
          Icon={FiAirplay}
        />
      </div>
    </div>
  );
};

interface ProcessCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="w-full md:p-20 p-10 py-16 border-amber-900/20 border relative overflow-hidden group bg-white cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-0 -top-10 -right-10 text-8xl text-zinc-200 group-hover:text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-amber-500 group-hover:text-white relative z-10 transition-colors duration-300" />
      <h3 className="font-semibold text-lg text-zinc-900 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-zinc-500 group-hover:text-amber-100 relative z-10 duration-300">
        {description}
      </p>
    </div>
  );
};

export default AppProcessCards;