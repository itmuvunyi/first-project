import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header.png";

export const Banner = () => {
  const toRotate = ["Web Developer", "Web Designer", "AI Engineer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setTimeout(() => tick(), delta);
    return () => clearTimeout(ticker);
  }, [text]);         // eslint‑disable‑line react-hooks/exhaustive-deps

  const tick = () => {
    const i = loopNum % toRotate.length;
    const full = toRotate[i];
    const updated = isDeleting ? full.slice(0, text.length - 1)
                               : full.slice(0, text.length + 1);

    setText(updated);
    setDelta(isDeleting ? 150 : 300);

    if (!isDeleting && updated === full) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updated === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* copy */}
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Innocent`} <br />
              <span className="wrap">{text}</span>
            </h1>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              since the 1500s.
            </p>

            <button className="connect-btn" onClick={() => console.log("connect")}>
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
          </Col>

          {/* astronaut */}
          <Col xs={12} md={6} xl={6} className="text-center">
            <img src={headerImg} alt="Astronaut" className="astronaut-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
