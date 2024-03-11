import Button from "../components/Button";
import { arrowRight, twitter } from "../assets/icons";
import { statistics } from "../constants";
import { headerLogo } from "../assets/images";

const Hero = () => {
  return (
    <section
      id='home'
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start 
      w-full max-xl:padding-x pt-28">

        <p className="text-xl font montserrat text-coral-red">Our New Posters X edition</p>

        <h1 className="mt-10 font-palanquin text-8xl 
        max-sm:text-[72px] max-sm:leading-[82px] font-bold flex items-center flex-col">

          <span className="whitespace-nowrap
           xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">

            New Posters On
            
            </span>


            <span className="mt-5 mb-5">
              <a href='/'>
              <img src={headerLogo} alt="Image" className="w-25 h-20 mr-4 transition-transform transform hover:scale-110 shadow-md" 
              style={{cursor:'pointer'}}
              /> {/* Image with right margin */}
              </a>
            </span>  

            <Button label='Shop now' iconURL={arrowRight} /> {/* Button */}
           

        </h1>

        <div className="flex justify-center  flex-wrap w-full mt-20 ml-12 gap-16 pl-20">

          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
