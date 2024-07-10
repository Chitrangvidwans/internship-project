import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function FeaturedComp()
{
    const data = [
        {
            id: 1,
            Name: 'Bullspree',
            Details : 'la a lala  this company' ,
            image: '/src/assets/featured/f1.jpg'
        },
        {
            id: 2,
            Name: 'Abcm',
            Details:'la a lala  this company',
            image: 'src/assets/featured/f2.jpg'
        },
        {
            id: 3,
            Name: 'Plutoman',
            Details:'la a lala  this company',
            image: 'src/assets/featured/f3.jpg'
        },
        {
            id: 4,
            Name: 'Stroom',
            Details : 'la a lala  this company' ,
            image: 'src/assets/featured/f4.jpg'
        },
    ];
 const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 2,
    // slidesToScroll: 1
    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d) => (
                    <div className="bg-white h-[450px] text-black rounded-xl" >
                        {/* IMAGE */}
                        <div className=" h-56 rounded-t-xl bg-indigo-300 flex justify-center items-center">   
                            <img src={d.image} alt="featured" className="h-44 w-44 rounded-full" />
                        </div>

                        {/* NAME */}
                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font-semibold">{d.Name}</p>
                            <p>{d.Details}</p>
                            <button className="bg-indigo-300 text-white hover:bg-neutralDGrey rounded-md text-lg px-6 py-1
                            ">Read More</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}

export default FeaturedComp;