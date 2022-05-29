import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../../index";
import DeviceItem from "../DeviceItem";

const CreateDevice = ({ show, onHide }) => {
  const [info, setInfo] = useState([]);
  const { device } = useContext(Context);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = number => {
    setInfo(info.filter(el => el.number !== number));
  };
  return (
    <Modal show={show} onHide={onHide} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title id={"contained-modal-title-vcenter"}>
          Добавить тип
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className={"mt-3"}>
              <Dropdown.Toggle>Выберете тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={"mt-3"}>
              <Dropdown.Toggle>Выберете бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(brand => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
              className={"mt-3"}
              placeholder={"ВВедите название устройства"}
            />
            <Form.Control
              className={"mt-3"}
              placeholder={"ВВедите стоимость"}
              type="number"
            />
            <Form.Control className={"mt-3"} type="file" />
            <hr />
            <Button variant={"outline-light"} onClick={addInfo}>
              Добавить новое свойстро
            </Button>
            {info.map(i => (
              <Row className={"mt-3"} key={i.number}>
                <Col md={4}>
                  <Form.Control placeholder={"Введите название своства"} />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder={"Введите отисание своства"} />
                </Col>
                <Col md={4}>
                  <Button
                    variant={"outline-danger"}
                    onClick={() => removeInfo(i.number)}
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Закрыть
          </Button>
          <Button variant={"outline-success"} onClick={onHide}>
            Сохранить
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
