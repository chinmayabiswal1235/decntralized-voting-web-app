import React, {useEffect, useState} from 'react';
import { Table, Container, Button } from "react-bootstrap";
import { Tab } from "bootstrap";

const Home = (props) => {
    //const [promptList, changePromptList] = useState([]);
    const promptList = [
        "Election 2022?" ,
        "Best movie of 2021",
        "Best song of 2021",
    ];

  return (
    <Container>
      <Table style={{ margin: "5vh" }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
               {promptList.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el}</td>
                    <td>
                      {" "}
                      <Button onClick={() => props.changeCandidates(el)}>
                        Go to Poll
                      </Button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;