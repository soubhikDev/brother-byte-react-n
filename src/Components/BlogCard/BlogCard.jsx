import React from 'react'
import { NavLink } from 'react-router-dom'
import './BlogCard.css'

const BlogCard = ({ image, title, content, link }) => {
  return (
    <NavLink to={link} className="BlogCardLink">
      <article className="BlogCard">
        <div className="BlogCardImage">
          <img src={image} alt={title} />
        </div>
        <div className="BlogCardContent">
          <h2 className="BlogCardTitle">{title}</h2>
          <p className="BlogCardPara">{content}</p>
        </div>
      </article>
    </NavLink>
  )
}

export default BlogCard
