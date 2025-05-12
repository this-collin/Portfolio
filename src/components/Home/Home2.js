import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGithubProfile from "../../hooks/UseGithubProfile.js";

function Home2() {
  const { profile, loading, error } = useGithubProfile("this-collin");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I first started coding in high school and fall more in love with it more everyday.
              <br />
              <br />I'm efficient in
              <i>
                <b className="purple"> Ruby on Rails, Java, Javascript, Git, and <Link to="/about" className="purple">more</Link> </b>
              </i>
              <br />
              <br />
              My main interests within the field are building &nbsp;
              <i>
                <b className="purple">Data Intensive Applications </b> and
                delivering great{" "}
                <b className="purple">
                  end user experiences.
                </b>
              </i>
              <br />
              <br />
              I'm always looking to learn new things and improve my skills. 
              {/* with  */}
              {/* <b className="purple">Node.js</b> and */}
              {/* <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profile?.avatar_url} className="img-fluid" alt="avatar" style={{ 
                  borderRadius: "50%",
                  width: "350px",
                  height: "350px",
                  objectFit: "cover"
                }} />
            </Tilt>
            <div className="text-center" style={{ marginTop: "-20px" }}>
              <p className="home-about-body" style={{ color: "white" }}>
                {profile?.bio || "Loading bio..."}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/this-collin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/collin-smith-284473223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
