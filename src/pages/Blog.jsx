import React from "react";
import { images } from "../assets/assets";
import { blogData } from "../data/blog";
import "../styles/blog.css";

const Blog = () => {
  return (
    <main id="blog">
      <h1 style={{ fontSize: 50, fontWeight: "900" }}>Blog</h1>
      <section className="blog-header">
        <img src={images.insects} alt="" />

        <div className="text">
          <div className="meta">
            <div className="category">Insects</div>
            <div className="date">12 july 2022</div>
          </div>
          <div className="title">
            <h1>Insects on Rampage</h1>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              harum sapiente odio accusantium laborum veritatis fuga
              perspiciatis unde nulla voluptates reprehenderit tenetur nam
              molestias voluptas excepturi iste, dolor iure.
            </p>
          </div>
          <div className="author">
            <img src={images.author} alt="" />
            <div className="text">
              <h2 className="name">Ayomikun Faluyi</h2>
              <p>Front End developer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-content">
        {blogData.map((blog) => {
          return (
            <div className="blog-post">
              <img src={blog.img} alt="" />
              <div className="text">
                <div className="meta">
                  <div className="category">poultry</div>
                  <div className="date">12 july 2022</div>
                </div>
                <div className="title">{blog.title}</div>
                <div className="post">
                  {blog.content ||
                    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                        Inventore temporibus nisi minima praesentium eligendi rerum 
                                        quis suscipit esse voluptatibus quibusdam omnis a, veritatis enim, 
                                        numquam quaerat dignissimos quam similique. Reprehenderit.`}
                </div>
                <div className="author">
                  <img src={blog.author.img} alt="" />
                  <div className="text">
                    <h2 className="name">{blog.author.name}</h2>
                    <p>{blog.author.position}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Blog;
