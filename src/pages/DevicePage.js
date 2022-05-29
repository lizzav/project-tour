import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import star from "../assets/star.png";
import { Card } from "reactstrap";
const DevicePage = () => {
  const device = {
    id: 1,
    name: "first22dss",
    price: 2344,
    rating: 5,
    img:
      "https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d"
  };
  const description = [
    { id: 1, title: "13klw", description: "92i29i22" },
    { id: 2, title: "13klw", description: "92i29i22" },
    { id: 3, title: "13klw", description: "92i29i22" }
  ];
  return (
    <Container className={"mt-3"}>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>

        <Col md={4}>
          <Row className={"d-flex align-items-center justify-content-center"}>
            <h2>{device.name}</h2>
            <div
              className={"d-flex align-items-center justify-content-center"}
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className={
              "d-flex flex-column align-items-center justify-content-around"
            }
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray"
            }}
          >
            <h3>От:{device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className={"d-flex flex-column m-3"}>
        <h1>Характиристики</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent"
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
