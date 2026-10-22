import React, { useState, useEffect } from 'react'
import data from '../site.config.json'
import Button from './components/Button'
import hero from './assets/hero.png'
import Card from './components/Card';
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import burger from './assets/burger.png'
import shawarma from './assets/shawarma.png'
import wings from './assets/wings.png'
import pizza from './assets/pizza.png'
import chicken from './assets/chicken.png'

import { CgTimer } from "react-icons/cg";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleClick(e, sectionId){
    e.preventDefault()
    setMobileMenuOpen(false)
    const sect = document.querySelector(sectionId)
    if(sect){
      sect.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
      })
    }
  }

  const links = [
    {"title": "home", "section":"#home"},
    {"title": "menu", "section":"#menu"},
    {"title": "about us", "section":"#about"},
    {"title": "contact us", "section":"#contact"},
  ]

  const menu = [
    {"title": "burgers", "img": burger},
    {"title": "pizza", "img": pizza},
    {"title": "shawarma", "img": shawarma},
    {"title": "wings", "img": wings},
    {"title": "chicken", "img": chicken},
  ]

  const menuOffers = {
    burgers: [
      { name: "Classic Beef Burger", price: "KES 650", desc: "Juicy beef patty with fresh lettuce, cheese, and house sauce." },
      { name: "Double Cheese Burger", price: "KES 850", desc: "Double beef, double cheese, and caramelized onions." },
    ],
    pizza: [
      { name: "BBQ Chicken Pizza", price: "KES 1,200", desc: "Smoky BBQ sauce, grilled chicken, mozzarella, and sweet corn." },
      { name: "Pepperoni Passion", price: "KES 1,100", desc: "Classic tomato sauce loaded with spicy beef pepperoni." },
    ],
    shawarma: [
      { name: "Beef Shawarma Wrap", price: "KES 450", desc: "Marinated beef strips with garlic sauce in a toasted flatbread." },
      { name: "Chicken Shawarma + Fries", price: "KES 550", desc: "Spiced chicken wrap served with seasoned fries." },
    ],
    wings: [
      { name: "6pcs Honey Glazed Wings", price: "KES 700", desc: "Crispy fried wings tossed in rich honey glaze." },
      { name: "12pcs Spicy Buffalo Wings", price: "KES 1,300", desc: "Classic hot buffalo wings with ranch dip." },
    ],
    chicken: [
      { name: "2pcs Fried Chicken + Chips", price: "KES 600", desc: "Crispy golden fried chicken served with salted fries." },
      { name: "Full Grilled Chicken", price: "KES 1,800", desc: "Slow-roasted peri-peri chicken served with salad." },
    ],
  };

  function handleSelectCategory(categoryTitle) {
    if (selectedCategory === categoryTitle) {
      setSelectedCategory(null); // Close if already selected
    } else {
      setSelectedCategory(categoryTitle); // Open selected category
    }
  }

  useEffect(function(){
    console.log(data)
  },[])

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased selection:bg-opacity-30 ${data.ui.primaryColor}`}>

      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition-all duration-200">
        <h1 className={`font-extrabold uppercase tracking-wider text-xl sm:text-2xl transition-transform duration-200 hover:scale-[1.02] ${data.ui.text_1}`}>
          {data.business_name}
        </h1>
        
        {/* Desktop Links */}
        <div className='hidden md:flex gap-8 lg:gap-12 capitalize'> 
          {
            links.map((item, index)=>{
              return (
                <a 
                  key={index} 
                  className={`${data.ui.text_2} font-semibold text-lg lg:text-xl hover:opacity-80 transition-opacity`} 
                  href={item.section}
                  onClick={(e) => handleClick(e, item.section)}
                >
                  {item.title}
                </a>
              )
            })
          }
        </div>

        {/* Desktop Order Button */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className={`px-5 py-2.5 rounded-lg font-semibold tracking-wide shadow-sm transition-all duration-200 ease-in-out transform hover:brightness-110 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 ${data.ui.secondaryColor} ${data.ui.text_1}`}>
            Order Now
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className={`md:hidden text-2xl p-2 ${data.ui.text_1} focus:outline-none`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className={`absolute top-full left-0 w-full ${data.ui.primaryColor} border-b border-opacity-10 shadow-lg p-6 flex flex-col gap-4 md:hidden z-50`}>
            {links.map((item, index) => (
              <a
                key={index}
                href={item.section}
                onClick={(e) => handleClick(e, item.section)}
                className={`${data.ui.text_2} font-semibold text-xl capitalize py-1`}
              >
                {item.title}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleClick(e, '#contact')}
              className={`w-full text-center mt-2 px-5 py-2.5 rounded-lg font-semibold tracking-wide shadow-sm ${data.ui.secondaryColor} ${data.ui.text_1}`}
            >
              Order Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">
              Welcome to
              <span className={`block sm:inline font-semibold capitalize text-3xl sm:text-4xl lg:text-5xl ${data.ui.text_3}`}> {data.business_name}</span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl mt-2 font-medium opacity-90">{data.hero_details.slogan}</h2>
          </div>
          <div className='mt-6 flex flex-col items-center md:items-start'>
            <Button 
              cta_text="Order online"
              clicked={(e) => handleClick(e, '#menu')}
            />
            <p className="flex mt-4 items-center justify-center md:justify-start text-xs sm:text-sm font-medium">
              <CgTimer className={`${data.ui.text_3} text-lg mr-1.5`}/> open: {data.business_details.hours.open}am - {data.business_details.hours.close}am  
            </p>
          </div>
        </div>

        {/* Hero image container */}
        <div className='w-full md:w-1/2 flex justify-center items-center p-2 sm:p-4'>          
          <img src={hero} alt="Featured Dish" className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-lg "/>
        </div>
      </section>


      {/* Menu Section */}
      <section id="menu" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h2 className={`font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider pb-3 ${data.ui.text_3}`}>
          Our Menu
        </h2>
        <p className="text-sm sm:text-base opacity-80">Feel free to browse our delicious options</p>

        {/* Responsive Category Cards Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-8'>
          {
            menu.map((mItem, index)=>{
              const isSelected = selectedCategory === mItem.title;
              return(
                <div key={index} className={`${data.ui.highlight} border-2 p-4 sm:p-5 rounded-md shadow-sm flex flex-col items-center justify-between transition-transform duration-200 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center">
                    <img src={mItem.img} alt={mItem.title} className='h-24 w-24 sm:h-32 sm:w-32 object-contain'/>
                    <p className='capitalize font-semibold mt-2 text-sm sm:text-base'>{mItem.title}</p>
                  </div>
                  <div className='mt-4 w-full'>
                    <Button 
                      className='capitalize w-full text-xs sm:text-sm'
                      cta_text={isSelected ? "Hide Menu" : "View More"}
                      clicked={()=>handleSelectCategory(mItem.title)}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* Dropdown Menu Offers */}
        {selectedCategory && (
          <div className={`p-4 sm:p-6 border-2 ${data.ui.highlight} mt-8 rounded-lg shadow-md ${data.ui.secondaryColor} backdrop-blur-sm transition-all duration-300`}>
            <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-4">
              <h3 className={`text-xl sm:text-2xl font-bold capitalize ${data.ui.text_1}`}>
                {selectedCategory} Offers
              </h3>
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`${data.ui.text_1} hover:opacity-80 font-bold text-base sm:text-lg p-1`}
              >
                ✕ Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-left">
              {menuOffers[selectedCategory]?.map((offer, idx) => (
                <div key={idx} className="p-3 sm:p-4 rounded-md border bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-xs">
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-slate-900">{offer.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">{offer.desc}</p>
                  </div>
                  <div className="flex sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-200">
                    <span className="font-extrabold text-red-600 text-base sm:text-lg block">{offer.price}</span>
                    <a 
                      href={`https://wa.me/${data.business_details.contact}?text=Hi,%20I%20would%20like%20to%20order%20${encodeURIComponent(offer.name)}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-block text-xs bg-green-600 text-white px-3 py-1.5 rounded-md font-semibold hover:bg-green-700 transition-colors"
                    >
                      Order via WA
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      
      {/* About Section */}
      <section id="about" className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <h2 className={`font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider position-relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 pb-3 ${data.ui.text_3}`}>
          Our Story
        </h2>
        <div className={`mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto opacity-90 ${data.ui.text_4}`}>
          <p>{data.text.about_text}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center mt-auto">
        <h2 className={`font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider pb-3 ${data.ui.text_3}`}>
          Hit us up at
        </h2>
        <div className="mt-8 flex items-center justify-center">
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {
              data.socials.map((social)=>{
                return(
                  <Card 
                    link={social.link}
                    icLabel={social.icLabel}
                    name={social.name}
                    key={social.id}
                  />
                )
              })
            }
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 mt-8 sm:mt-12 border-t border-opacity-10 bg-black/5 text-center text-xs tracking-wider uppercase opacity-60">
        <div className="max-w-7xl mx-auto px-4">
          &copy; {new Date().getFullYear()} {data.business_name}. All rights reserved. <br />
          Crafted with passion and precision
        </div>
      </footer>
    </div>
  )
}

export default App