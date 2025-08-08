import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Footer() {
  const container = useRef(null);
  const paths = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (progress) => {
      paths.current.forEach((path, i) => {
        if (path) {
          const offset = -40 + i * 40 + progress * 40;
          path.setAttribute("startOffset", `${offset}%`);
        }
      });
    });
  }, [scrollYProgress]);

  return (
    <section className="relative">
      {/* Subtle top fade to blend footer into section above */}
      <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-indigo-500/30 z-0 pointer-events-none" />

      {/* Footer container with bright purple-indigo gradient background */}
      <div
        ref={container}
        className="relative text-white py-10 z-10"
        style={{
          background: `linear-gradient(
            to bottom,
            #845ec2,  /* vibrant purple */
            #4C1D95,  /* rich purple */
            #6C63FF,  /* bright indigo */
            #8A7BFF   /* soft lavender */
          )`,
        }}
      >
        <svg
          className="w-full"
          viewBox="0 0 250 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" stopColor="#f5f3ff" />   {/* very pale lavender, almost white */}
<stop offset="50%" stopColor="#eae6ff" />  {/* soft lavender white */}
<stop offset="100%" stopColor="#f0eaff" /> {/* faint lavender white */}


            </linearGradient>
          </defs>
          <path
            fill="none"
            id="curve"
            d="M0,88.5 C61.37,88.5 61.5,20.5 126.5,20.5 C184.5,20.5 177.5,88.5 250,88.5"
          />
          <text
            className="uppercase font-bold tracking-widest"
            style={{ fill: "url(#gradient)", fontSize: "5px" }}
          >
            {[...Array(3)].map((_, i) => (
              <textPath
                key={i}
                ref={(el) => (paths.current[i] = el)}
                startOffset={`${i * 40}%`}
                href="#curve"
              >
                Step Into the World of Vibe Club&nbsp;&nbsp;&nbsp;
              </textPath>
            ))}
          </text>
        </svg>

        {/* Logos component */}
        <Logos scrollProgress={scrollYProgress} />
      </div>
    </section>
  );
}

const Logos = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1.4], [-800, 0]);

  return (
    <motion.div
      style={{ y }}
      className="h-[420px] overflow-hidden bg-transparent flex justify-center items-center"
    >
      <img
        src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/387774648_122129311970025539_8928505656887210484_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ptN9J1L23zcQ7kNvwHmwDmp&_nc_oc=AdlgsPpdLT5a7QqF74gGBlDLpwj2YwLsMNpKSQDGJmWdODQK4aNDhPfdCalYH3L-nJ9ifodU7F_iCMkq3RKqkxQ9&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=bnlx-uETVfwB_VRD6D1MOg&oh=00_AfQ4tpU1YogrXX1RKzmmH9oHzlYvMd3jorb9BWrHUyJKfw&oe=689420E8"
        alt="Logo"
        className="h-96 w-96 rounded-full object-cover"
        style={{
          boxShadow: `
            0 10px 20px rgba(0, 0, 0, 0.3),
            0 0 25px rgba(132, 94, 194, 0.5),
            0 0 50px rgba(132, 94, 194, 0.3)
          `,
        }}
      />
    </motion.div>
  );
};
