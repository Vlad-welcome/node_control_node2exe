import { Button, Table, Container, Card, FormControl, Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";

export const Main = () => {
  const [data, setData] = useState("");

  const onClick = async () => {
    // axios
    //   .get("api/main/data")
    //   .then((res) => setData(res.data.data))
    //   .catch((err) => console.log(err));

    axios.get("api/main/moveMouse");
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light">
      <div className="p-4 bg-white rounded shadow" style={{ minWidth: "300px" }}>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Главная</h4>
          </Card.Header>

          <Card.Body>
            <Form.Group className="mb-3" controlId="mainData">
              <Form.Label>Данные</Form.Label>
              <Form.Control
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Нажмите «Получить»"
                readOnly={true}
              />
            </Form.Group>
            <Button onClick={onClick}>Получить</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
