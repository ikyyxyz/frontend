import React, { useEffect, useState } from "react";
import "./details.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { blog } from "../../assets/data/data";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));

    if (blogs) {
      setBlogs(blogs);
    }
  }, []);
  return (
    <>
      {blogs ? (
        <section className="singlePost">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>
            <div className="right">
              <div className="buttons">
                <button className="button">
                  <BsPencilSquare />
                </button>
                <button className="button">
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                recusandae ducimus quis omnis voluptatum dicta cupiditate.
                Adipisci eligendi totam aliquid reprehenderit voluptas eius.
                Excepturi, impedit blanditiis nesciunt ea optio consequuntur.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                recusandae ducimus quis omnis voluptatum dicta cupiditate.
                Adipisci eligendi totam aliquid reprehenderit voluptas eius.
                Excepturi, impedit blanditiis nesciunt ea optio consequuntur.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                recusandae ducimus quis omnis voluptatum dicta cupiditate.
                Adipisci eligendi totam aliquid reprehenderit voluptas eius.
                Excepturi, impedit blanditiis nesciunt ea optio consequuntur.
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Details;
