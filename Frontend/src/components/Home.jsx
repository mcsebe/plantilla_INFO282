import React from 'react';
import { socialMedia } from "../constants";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section className="sm:py-16 py-6 flex justify-center items-center flex-col relative flex-grow">
        {/* Eliminamos el fondo azul */}
        
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] text-center">
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
            Hola Mundo!!!!
          </h2>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
          {socialMedia.map((media) =>
            <div key={media.name} className="px-10">
              <a href={media.link}>
                <img src={media.icon} className="h-[90px]" alt={media.name} />
              </a>
              <h2 className="font-poppins text-white py-4 text-center">{media.name}</h2>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
