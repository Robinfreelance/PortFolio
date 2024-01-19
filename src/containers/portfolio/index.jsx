import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/Nl1jwADGSt-KjGQubxieLA.jpg";
import ImageTwo from "../../images/lFUPv4JuTP2GxJ_sn-2eGg.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 3,
    name: "Resume Search",
    link: "https://resume-search.com/",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Mobile Application",
    image:
      "https://img.freepik.com/premium-photo/phone-mobile-application-development-concept-mobile-internet-3d-illustration_76964-5164.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Course Bundler",
    image:
      "https://coursebundlerlearning.vercel.app/static/media/bg.046b6d8031e4b35320a7.png",
    link: "https://coursebundlerlearning.vercel.app/",
  },
  {
    id: 2,
    name: "Social Media",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKmm1m9uoNkk1fVr1yF9SsIUd9tkGHAkKZwgCw0jIXA&s",
    link: "https://socialmediafrontend-psi.vercel.app/",
  },
  {
    id: 2,
    name: "E-commerce Burger",
    image: ImageOne,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "fullStack",
  },
  {
    filterId: 3,
    label: "backend",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);


  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>
                      {" "}
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href={item.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Visit
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
