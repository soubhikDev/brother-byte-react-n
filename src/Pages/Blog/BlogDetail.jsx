import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageHero from '../../Components/PageHeros/PageHero'
import ContactHero from '../../assets/ContactHero.png'
import { BlogData } from '../../../BlogData'
import './BlogDetail.css'

export default function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const blog = BlogData.find(b => b.slug === slug)

  if (!blog) {
    return (
      <div className="BlogDetail_notfound">
        <h2>Blog not found</h2>
        <button onClick={() => navigate('/blog')} className="BlogDetail_backbtn">
          Back to Blogs
        </button>
      </div>
    )
  }

  const relatedBlogs = BlogData.filter(b => b.id !== blog.id).slice(0, 3)

  return (
    <>
      <PageHero PageHeroData={{title: blog.title, img: ContactHero}} />
      <div className="BlogDetail_wrpr">
        <article className="BlogDetail_content">
          <div className="BlogDetail_image_container">
            <img src={blog.image} alt={blog.title} className="BlogDetail_image" />
          </div>

          <div className="BlogDetail_text">
            <h1 className="BlogDetail_title">{blog.title}</h1>
            <p className="BlogDetail_meta">Published Date: {new Date().toLocaleDateString()}</p>
            
            <div className="BlogDetail_body">
              <p>{blog.fullContent}</p>
              <p>
                This article provides comprehensive insights into the topic. Whether you're a beginner or an experienced enthusiast, 
                you'll find valuable information and actionable tips that can be applied immediately.
              </p>
              <p>
                Feel free to explore related articles below to expand your knowledge further and stay updated with the latest trends 
                and best practices in this area.
              </p>
            </div>

            <button onClick={() => navigate('/blog')} className="BlogDetail_backbtn">
              ← Back to All Blogs
            </button>
          </div>
        </article>

        {relatedBlogs.length > 0 && (
          <div className="BlogDetail_related">
            <h2 className="BlogDetail_related_title">Related Articles</h2>
            <div className="BlogDetail_related_grid">
              {relatedBlogs.map((relatedBlog) => (
                <div 
                  key={relatedBlog.id} 
                  className="BlogDetail_related_card"
                  onClick={() => navigate(`/blog/${relatedBlog.slug}`)}
                >
                  <img src={relatedBlog.image} alt={relatedBlog.title} />
                  <h3>{relatedBlog.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
