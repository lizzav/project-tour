import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../../index";

const CreateType = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title id={"contained-modal-title-vcenter"}>
          Добавить тип
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder={"ВВедите название типа"} />
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

export default CreateType;
