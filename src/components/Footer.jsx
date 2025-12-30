import React from 'react'
import { NavLink } from "react-router-dom"
import { socialLinks } from "../constants";
const Footer = () => {
  return (
    <footer class="text-slate-500 text-blue py-4">
    <div className="flex justify-center mb-4">
        {socialLinks.map((link, index) => (
          <NavLink key={index} target='_blank' to={link.link} className="mr-4">
            <img src={link.iconUrl} alt={link.name} className="h-6 w-6 fill-current" />
          </NavLink>
        ))}
      </div>

    <div class="container mx-auto flex justify-center items-center">
        <p class="text-center">avinashwele@gmail.com</p>
    </div>
</footer>

  )
}

export default Footer