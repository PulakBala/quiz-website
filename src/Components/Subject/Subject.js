import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./Subject.css";

const Subject = ({ sub }) => {
  const { id, name, logo } = sub;
  return (
   
      <div className="flip-card  transition-transform duration-300 hover:scale-125">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="bg-zinc-400 w-full"
              src={logo}
              alt=""
            />
            <div>
              <div className="flex justify-between mt-4">
                <h2 className="p-2 text-2xl font-bold">{name}</h2>
                <button className="bg-blue-600 text-white p-2  rounded-lg text-xl flex">
                  {" "}
                  <Link to={`/quiz/${id}`}>Start Quiz</Link>{" "}
                  <small>
                    <ArrowSmallRightIcon className="w-6 ml-2 mt-1"></ArrowSmallRightIcon>
                  </small>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* <div class="flip-card-back">
            <p>Prioritize speed and scale in all your actions, but never compromise on quality.</p>
          </div> */}
        </div>
      </div>
    
  );
};

export default Subject;
