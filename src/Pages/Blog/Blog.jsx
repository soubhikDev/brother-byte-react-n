import React from 'react'
import PageHero from '../../Components/PageHeros/PageHero'
import BlogCard from '../../Components/BlogCard/BlogCard'
import ContactHero from '../../assets/ContactHero.png'
import { BlogData } from '../../../BlogData'
import './Blog.css'

export default function Blog() {
  return (
    <>
        <PageHero PageHeroData={{title: 'Blog', img: ContactHero}} />
        <div className="Blog_wrpr">
          <div className="Blog_header_container">
            <div className="Blog_header">
              <h1 className="Blog_title">Our Blog</h1>
              <p className="Blog_description">Explore articles and tips about food delivery, healthy eating, and culinary inspiration</p>
            </div>
          </div>
          
          <div className="Blog_cards_container">
            {BlogData.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                content={blog.content}
                image={blog.image}
                link={`/blog/${blog.slug}`}
              />
            ))}
          </div>
        </div>
    </>
  )
}
