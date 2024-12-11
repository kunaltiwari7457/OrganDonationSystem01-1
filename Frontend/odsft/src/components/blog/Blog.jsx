import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogs = [
    {
      title: "A Journey Through Lung Transplant Surgery: My Father’s Story",
      date: "October 17, 2024",
      author: "ORGAN India",
      description: "My name is Rini Reejonia. My family and I have been living in Mumbai for the past 40 years although...",
      image: "path_to_image_1",
    },
    {
      title: "Heartfelt",
      date: "February 8, 2023",
      author: "ORGAN India",
      description: "I am Astha living in Khurja, Uttar Pradesh with my loving family. Leading a normal and good life. Did I...",
      image: "path_to_image_2",
    },
    {
      title: "“It’s The Act of Humanity, Not Gender, That Matters”",
      date: "April 29, 2022",
      author: "Pooja Bijarnia",
      description: "",
      image: "path_to_image_3",
    },
    {
      title: "My Journey – From Sister To Mother",
      date: "October 5, 2022",
      author: "Jyoti Nair",
      description: "",
      image: "path_to_image_4",
    },
  ];

  return (
    <section className="blog-section">
      <div className="container    ">
        <h1 className="section-title-01">Blog</h1>
      
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-meta">
                  Posted On: {blog.date} &nbsp; By: {blog.author}
                </p>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-description-box">
          <p>
            This blogpost is a forum to encourage and promote dialogue on organ donation and transplantation in India. It is a platform for all concerned stakeholders to express their opinions, concerns, and future strategies on the organ donation and transplantation environment across India. Doctors, NGOs, donor families, and recipients are all contributing to the blog.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
