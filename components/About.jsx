import Image from "next/image";
import MyMarquee from "./MyMarquee";

const partners = [
  { id: "advon", url: "/advon-logo.png", name: "Advon Construction" },
  { id: "bc", url: "/bc-logo.png", name: "Brazosport College" },
  { id: "gl", url: "/gl-logo.webp", name: "G&L Construction" },
  { id: "metco", url: "/metco-logo.png", name: "Metco Engineering" },
  {
    id: "patriot",
    url: "/patriot-logo.png",
    name: "Patriot Development and Construction",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-bluezodiac/90 via-black to-bluezodiac/90 w-full gap-14 flex flex-col items-center pt-28 scroll"
    >
      <h2 className="text-center text-8xl text-mongoose font-caveat mb-6">
        About Us
      </h2>
      <article className="w-10/12 text-white/80">
        <p className="w-full mx-auto font-roboto_condensed">
          We are proud to introduce ourselves as a new steel erection contractor
          for the Greater Houston area and surrounding counties.
        </p>
        <br />

        <p className="w-full mx-auto">
          As natives of southern Brazoria county (Freeport) we are committed to
          maintaining a positive and strong image and relationship with the
          people of our community. We know that our name and the success of our
          endeavors will be closely tied to the roots and foundations that we
          make for ourselves here in the area.
        </p>
        <br />
        <p className="w-full mx-auto">
          Consider us for any job involving steel work and metal building
          erection. We do small to medium scale residential and commercial.
          Shop, barn, garage, warehouse, if it&#39;s made out of steel we build
          it. We can handle material procurement or put you in touch directly.
        </p>
        <br />
        <p className="text-white w-full mx-auto"> We are here to serve!</p>
      </article>
      <h3 className="text-rollingstone font-caveatbrush text-4xl ">
        Modolith Clients/Partners
      </h3>
      <MyMarquee />
    </section>
  );
};

export default About;
