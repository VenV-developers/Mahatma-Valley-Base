import React from "react";
import team1 from "../assets/images/logo.png";
import team2 from "../assets/images/team-1-1.jpg";
import courseD1 from "../assets/images/course-1-1 (Custom).jpg";
import lcImage1 from "../assets/images/course-1-1.jpg";
import lcImage2 from "../assets/images/course-1-2.jpg";
import lcImage3 from "../assets/images/course-1-3.jpg";
import lcImage4 from "../assets/images/course-1-4.jpg";
import lcImage5 from "../assets/images/course-1-5.jpg";
import { Link } from "gatsby";

const CourseDetails = () => {
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">
              <p className="course-details__author">
                <img src={team1} alt="" />
                by <a href="#none">Mahatma Valley</a>
              </p>

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">Toddler Program</h2>
                </div>
                <div className="course-details__top-right">
                  <a href="#none" className="course-one__category">
                    Foundation{" "}
                  </a>
                </div>
              </div>
              <div className="course-one__image">
                <img src={courseD1} alt="" />
              </div>

              <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                <li>
                  <a
                    className="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#outcomes">
                    Outcomes
                  </a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <h4>
                    Our Toddler Program provides a nurturing and stimulating
                    environment that paves the way for well-rounded development
                    and a smooth transition to preschool.
                  </h4>
                  <br />
                  <section
                    className="course-details__tab-text"
                    style={{ fontSize: "24px" }}
                    id="overview"
                  >
                    <h4>
                      <b>Overview:</b>
                    </h4>
                    <p>
                      Our Toddler Program goes beyond simple childcare. We
                      provide a warm and nurturing environment specifically
                      designed to nurture the rapid development of children.
                      Here, we focus on igniting a love for learning through
                      exploration, social interaction, and fostering
                      foundational skills in a safe and stimulating
                      play-based environment.
                    </p>
                  </section>
                  <br />
                  <section
                    className="course-details__tab-text"
                    id="curriculum"
                    style={{ fontSize: "24px" }}
                  >
                    <h4>
                      <b>Curriculum:</b>
                    </h4>
                    <ul>
                      <li>
                        <b>Express and Manage Emotions:</b> Toddlers are still
                        learning to identify and manage their emotions. Our
                        program provides a safe and supportive environment where
                        they can express their feelings openly and learn healthy
                        coping mechanisms through teacher guidance and social
                        interaction.
                      </li>
                      <li>
                        <b>Play as the Primary Learning Tool:</b> We know that
                        toddlers learn best through play. Our program utilizes a
                        play-based approach that allows them to explore
                        concepts, develop skills, and express themselves
                        creatively in a fun and engaging way.
                      </li>
                      <li>
                        <b>Building Confidence Through Exploration:</b> As
                        toddlers explore and experiment, they gain a sense of
                        mastery and accomplishment. This fosters confidence in
                        their abilities and motivates them to continue learning
                        and exploring the world around them.
                      </li>
                    </ul>
                  </section>
                  <br />
                  <section
                    className="course-details__tab-text"
                    id="outcomes"
                    style={{ fontSize: "24px" }}
                  >
                    <h4>
                      <b>Outcome:</b>
                    </h4>
                    <li>
                      <b>Love for learning:</b> Our program fosters a natural
                      curiosity about the world and ignites a passion for
                      exploration and discovery.
                    </li>
                    <li>
                      <b>Strong social skills:</b> Through play and interaction
                      with peers, toddlers develop essential social skills like
                      communication, collaboration, and empathy.
                    </li>
                    <li>
                      <b>Emotional intelligence: </b>We provide a safe space for
                      toddlers to express their emotions and learn healthy
                      coping mechanisms, fostering emotional regulation and
                      self-awareness.
                    </li>
                    <li>
                      <b>Fine and gross motor development:</b> Through
                      play-based activities, toddlers develop the fine and gross
                      motor skills needed for everyday tasks and future learning
                    </li>
                    <li>
                      <b> Confidence and independence:</b> As toddlers explore
                      and experiment, they gain a sense of mastery and
                      confidence in their abilities, fostering independence and
                      self-esteem.
                    </li>
                  </section>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  // id="curriculum"
                >
                  <p className="course-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Introduction to Editing</a>
                        <span>Preview</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        16 minutes
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Quiz</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        6 questions
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-details__list mt-5">
              <h2 className="course-details__list-title">More Programs</h2>

              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage2} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-two">Playgroup</Link>
                  </h3>
                </div>
              </div>

              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage3} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-three">Nursery</Link>
                  </h3>
                </div>
              </div>

              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage4} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-four">
                      Junior Kindergarten(Jr.KG)
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage5} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-five">
                      Senior Kindergarten (Sr.KG)
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage1} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Mahatma Valley</span>
                  </a>
                  <h3>
                    {" "}
                    <Link to="/course-details-six">Daycare Program</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
