import { Nav } from "./Components2";
import { EndSection, Footer, Hero, MiddleSection } from "./Components2";

export const WeddingEngine = ({ data }: { data: any }) => {
  return (
    <div className="font-sans min-h-screen w-full">
      <Nav links={data.navLinks} />
      <Hero names={data.names} imageUrl={data.heroImg} />
      <MiddleSection 
        eventDate={data.date} 
        location={data.location} 
        description={data.story} 
        bgColor={data.themeColor}
      />
      <EndSection imageUrl={data.detailImg} />
      <Footer names={data.names} date={data.date} />
    </div>
  );
};