import React from 'react'
import data from '../site.config.json'
import Button from './components/Button'
import hero from './assets/hero.jpg'
import menu from './assets/menu.png'
import Card from './components/Card';
import { FaInstagram } from "react-icons/fa";
import { useEffect } from 'react';
// import SEO from '../../Seo';

function App() {

  function handleClick(e, sectionId){
    e.preventDefault()
    const sect = document.querySelector(sectionId)
    if(sect){
      sect.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
      })
    }
  }

  useEffect(function(){
    console.log(data)
  },[])
  return (
  
    <div className={`min-h-screen flex flex-col font-sans antialiased selection:bg-opacity-30 ${data.ui.primaryColor}`}>
      {/* <SEO /> */}

      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md bg-opacity-90 shadow-sm transition-all duration-200">
        <h1 className={`font-extrabold uppercase tracking-wider text-xl sm:text-2xl transition-transform duration-200 hover:scale-[1.02] ${data.ui.text_color}`}>
          {data.business_name}
        </h1>
        <div className="flex items-center">
          <a href="#contact" className={`w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold tracking-wide shadow-sm transition-all duration-200 ease-in-out transform hover:brightness-110 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 ${data.ui.secondaryColor} ${data.ui.light_text_color}`}>
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/9] md:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={hero} 
            alt={data.business_name || "Hero Background"} 
            className="h-full w-full object-cover opacity-60 transform scale-105 transition-transform duration-1000 ease-out hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        <div className={`relative z-10 w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center gap-4 sm:gap-6 ${data.ui.light_text_color}`}>
          <h1 className={`text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight max-w-3xl filter drop-shadow-md ${data.ui.light_text_color}`}>
            {data.hero_details.slogan}
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-xl opacity-90 filter drop-shadow-sm">
            {data.hero_details.slogan_2}
          </h3>
          <div className="mt-2 transform transition-transform duration-200 hover:scale-105 active:scale-95">
            <Button 
              clicked={handleClick}
              cta_text={data.cta_details.cta_text_2}/>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className={`font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider position-relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 pb-3 ${data.ui.text_color}`}>
          Our Story
        </h2>
        <div className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto opacity-90">
          <p>{data.text.about_text}</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h2 className={`font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider pb-3 ${data.ui.text_color}`}>
          Our Menu
        </h2>
        <div className="mt-8 flex items-center justify-center p-2 sm:p-4 bg-black/5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-inner">
          <img 
            src={menu} 
            alt="Our Menu Details" 
            className="w-full max-w-3xl rounded-xl shadow-md transform transition-all duration-300 hover:scale-[1.01]"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center mt-auto">
        <h2 className={`font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider pb-3 ${data.ui.text_color}`}>
          Hit us up at
        </h2>
        <div className="mt-8 flex items-center justify-center">
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
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
      <footer className="w-full py-6 mt-12 border-t border-opacity-10 bg-black/5 text-center text-xs tracking-wider uppercase opacity-60">
        <div className="max-w-7xl mx-auto px-4">
          &copy; {new Date().getFullYear()} {data.business_name}. All rights reserved. <br />
          Crafted with passion and precision
        </div>
      </footer>
    </div>
  )
}

export default App