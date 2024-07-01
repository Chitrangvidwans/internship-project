import { React } from "react";
import meeting from "../assets/meeting.jpg";

const Home = () => {
  return (
  <div className='bg-neutralSilver'>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <div className="my-28 md:my-5 py-14 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div>
            <img className="object-cover h-50 w-90" src={meeting} alt=""/>

        </div>
        {/* text */}    
        <div className='basis-[800px]'>
        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey leading-snug" >Empowering the Next{" "}
        <span className="text-brandPrimary">Generation of Startup</span></h1>
        <button className="btn-primary">Get in Touch</button>

        </div>
        </div>
       
    </div>
    
   
    </div>

  );
};

export default Home;