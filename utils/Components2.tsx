import React from 'react';

// 1. Navigation: Simple centered links
export const Nav = ({ links }: { links: string[] }) => (
  <nav className="py-4 bg-white border-b text-xl fontn-semibold uppercase tracking-widest flex justify-center gap-6 text-gray-600">
    {links.map((link: string, i: number) => <a key={i} href={`#${link}`}>{link}</a>)}
  </nav>
);

// 2. Hero: Big background image with names
export const Hero = ({ names, imageUrl }: { names: string, imageUrl: string }) => (
  <div className="relative h-screen flex items-center justify-center overflow-hidden w-full">
    <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
    <div className="absolute inset-0 bg-black/10" />
    <h1 className="relative text-white text-5xl md:text-7xl font-light tracking-widest uppercase">
      {names}
    </h1>
  </div>
);

// 3. Middle: The Announcement Section (The Orange Block)
export const MiddleSection = ({ eventDate, location, description, bgColor = "#ff7d45" }:{eventDate:string, location:string, description:string, bgColor:string}) => (
  <div style={{ backgroundColor: bgColor }} className="py-20 px-10 text-center text-white flex flex-col justify-center items-center gap-6 w-full h-[90vh]">
    <div className="w-24 h-12 border-b border-white opacity-50 mb-4" /> {/* Placeholder for floral icon */}
    <h2 className="text-2xl tracking-widest uppercase">We are getting married!</h2>
    <h3 className="text-5xl font-serif italic">{eventDate}</h3>
    <p className="tracking-widest uppercase text-sm">{location}</p>
    <div className="max-w-2xl mt-8 text-lg leading-relaxed opacity-90">
      {description}
    </div>
  </div>
);

// 4. End Section: Focus Image (The Ring/Mehendi shot)
export const EndSection = ({ imageUrl }:{imageUrl:string}) => (
  <div className="h-[60vh] w-full">
    <img src={imageUrl} className="w-full h-full object-cover" alt="Detail" />
  </div>
);

// 5. Footer: Simple credits
export const Footer = ({ names, date }:{names:string, date?:string}) => (
  <footer className="py-8 px-10 bg-white flex justify-center gap-8 items-center text-[10px] text-gray-500 uppercase tracking-tighter w-full">
    <div>
      <p className="text-base">{names}</p>
      <p className="text-xs text-center">{date}</p>
    </div>
    <div className="text-base">
      <p>Made with love</p>
    </div>
  </footer>
);