import React,{ useEffect , useState } from "react";
import logo from "../assets/logo.png";
import { Button, Link } from "react-scroll";
import { FaXmark , FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [isSticky,setIsSticky] = useState(false);

  //toggle menu 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
   const handleScroll = () => {
      if(window.scrollY > 100){
        setIsSticky(true);
      }else{
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.addEventListener('scroll',handleScroll);
    }
  });

  //navi ites
  const navItems = [
    {link: "Home", path: "home"},
    {link: "Featured companies", path: "featured"},
    {link: "Contact Us", path: "contact"},

  ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4  ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300 " : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <a href="" className="text-2xl font-semibold flex item-center space-x-3"><img src={logo} alt="" className="w-20 inline-block item-center"/><span className='text-[##263238]'></span> </a>
        
        <ul className='md:flex space-x-12  hidden'>
          {
          navItems.map(({link,path}) => <Link to={path} spy={true} smoth={true} offset={-100} 
          key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium '>{link}</Link> )
          }
        </ul>
        {/* button for mobile */}
        <div className="md:hidden">
          <Button 
          onClick={toggleMenu}
          className="text-neutralDGrey focus:outline-none focus:text-gray-500">
          {
            isMenuOpen ? (<FaXmark className='h-6 w-6 '/>) :(<FaBars  className='h-6 w-6 text-neutralDGrey'/>)
          }

          </Button>

          {/* nav items for mobile */}
          <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
        {
          navItems.map(({link,path}) => <Link to={path} spy={true} smoth={true} offset={-100} 
          key={path} className='block text-base text-white  hover:text-brandPrimary first:font-medium '>{link}</Link> )
          }
        </div>
        </div>
          
        </div>
        
        

      </nav>

    </header>
  );
};
export default Navbar;