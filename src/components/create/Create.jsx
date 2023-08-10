import React from "react";
import "./create.css";
import back from "../../assets/images/my-account.jpg";

const Create = () => {
  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img">
            <img src={back} alt="Jokowi" width="100px" />
          </div>
          <form>
            <div className="inputFile flexCenter">
              <input type="file" />
            </div>
            <input type="text" placeholder="Title" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Desc"
            ></textarea>
            <button className="button">Create Post</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Create;
