import React from 'react' 
import data from '../../site.config.json'
import hero from '../assets/hero.jpg'
import { FaInstagram, FaLink, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { DatabaseArrowDown } from 'lucide-react';

const iconMap = {
  FaWhatsapp: FaWhatsapp,
  SiGooglemaps: SiGooglemaps,
  FaInstagram: FaInstagram,
}

function Card({name, icLabel, link}) {
  const SelectedIcon = iconMap[icLabel] || FaLink

  return (
      <div className={`w-full max-w-sm sm:w-64 aspect-square flex flex-col items-center justify-between rounded-xl p-6 border shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 ${data.ui.highlight}`}>
        <div className='flex-1 flex items-center justify-center'>
          <div className='h-20 w-20 sm:h-24 sm:w-24 p-5 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105'>
            <SelectedIcon className={`w-full h-full object-contain ${data.ui.text_color}`}/>
          </div>
        </div>
        <div className='w-full mt-4 flex items-center justify-center'>
          <a 
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className={`w-full text-center font-medium tracking-wide border px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 hover:brightness-110 active:scale-[0.98] ${data.ui.secondaryColor} ${data.ui.light_text_color} ${data.ui.highlight}`}>
              {name} 
          </a>
        </div>
      </div>
  )
}

export default Card