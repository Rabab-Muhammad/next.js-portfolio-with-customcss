import React from "react";
import Image from "next/image";
import "../app/styles/card.css";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card-container">
    <div className={`card ${window.innerWidth >= 640 ? 'card-sm' : '' }`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${window.innerWidth >= 640 ? 'card-image-sm' : ''}`}
          src={img}
          height={300}
          width={300}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
