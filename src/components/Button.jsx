import React from 'react'
import data from '../../site.config.json'

function Button({cta_text, clicked}) {
  return (
    <button 
      onClick={clicked}
      className={`w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold tracking-wide shadow-sm transition-all duration-200 ease-in-out transform hover:brightness-110 hover:shadow-md active:scale-[0.98] focus:outline-none ${data.ui.secondaryColor} ${data.ui.text_1}`}>
      {cta_text}
    </button>
  )
}

export default Button