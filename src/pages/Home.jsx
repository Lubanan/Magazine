import React from "react";
import HTMLFlipBook from "react-pageflip";

const Home = () => {
  const pages = [
    {
      content: "Click Here",
      image: "https://images.pexels.com/photos/30483242/pexels-photo-30483242.jpeg",
      alt: "Magazine Cover",
    },
    {
      title: "Culture",
      content: "Smoking",
      image: "https://images.pexels.com/photos/29339966/pexels-photo-29339966.jpeg",
      alt: "Cultural Art",
    },
    {
      title: "Design",
      content: "Design trends that define 2025.",
      image: "https://images.pexels.com/photos/30085985/pexels-photo-30085985.jpeg",
      alt: "Design Concepts",
    },
    {
      title: "Music",
      content: "Underground artists you should know.",
      image: "https://images.pexels.com/photos/26746378/pexels-photo-26746378.jpeg",
      alt: "Music Scene",
    },
    {
      content: "Go Back",
      image: "https://images.pexels.com/photos/20410467/pexels-photo-20410467.jpeg",
      alt: "Back Cover Design",
    },
  ];

  return (
    <section
      className="min-h-screen flex justify-center items-center py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/18220329/pexels-photo-18220329.jpeg')",
      }}
    >
      <HTMLFlipBook
        width={300}
        height={450}
        size="stretch"
        minWidth={300}
        maxWidth={600}
        minHeight={450}
        maxHeight={900}
        maxShadowOpacity={0.3}
        showCover={true}
        className="rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.15)] overflow-hidden"
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden"
          >
            <div className="relative w-full h-full">
              <img
                src={page.image}
                alt={page.alt}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/35 z-10" />
              {index === 0 || index === pages.length - 1 ? (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 text-white text-2xl font-semibold p-8 max-w-[70%] text-right backdrop-blur">
                  <p>{page.content}</p>
                </div>
              ) : (
                <div className="absolute bottom-0 w-full z-20 bg-black/60 text-white text-center p-8 backdrop-blur">
                  {page.title && (
                    <h2 className="text-white text-[2.2rem] mb-4 opacity-0 translate-y-2 animate-fadeInUp animation-delay-200">
                      {page.title}
                    </h2>
                  )}
                  {page.content && (
                    <p className="text-[1.4rem] leading-relaxed opacity-0 translate-y-2 animate-fadeInUp animation-delay-400">
                      {page.content}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </section>
  );
};

export default Home;
