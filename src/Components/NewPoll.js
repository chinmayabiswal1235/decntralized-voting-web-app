import React, { useRef, useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";

const NewPoll = (props) => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();

  const candidateName1URL = useRef();
  const candidateName2URL = useRef();

  const promptRef = useRef();

  const [disableButton, changeDisable] = useState(false);

  const sendToBlockChain = async () => {
    changeDisable(true);
    await window.contract.addUrl({
      name: candidateName1.current.value,
      url: candidateName1URL.current.value,
    });

    await window.contract.addUrl({
      name: candidateName2.current.value,
      url: candidateName2URL.current.value,
    });

    await window.contract.addCandidatePair({
      prompt: promptRef.current.value,
      name1: candidateName1.current.value,
      name2: candidateName2.current.value,
    });

    await window.contract.addToPromptArray({ prompt: promptRef.current.value });

    const cand1 =  {
      name: candidateName1.current.value,
      url: candidateName1URL.current.value,
    };
    const cand2 =  {
      name: candidateName2.current.value,
      url: candidateName2URL.current.value,
    };
    console.log({cand1, cand2})
    localStorage.setItem("Candidate1", JSON.stringify(cand1));
    localStorage.setItem("Candidate2", JSON.stringify(cand2));
    localStorage.setItem("prompt", promptRef.current.value);


    alert("head back to home page");
  };

    return (
    <Container style={{ marginTop: "10px" }}>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Candidiate 1 Name</Form.Label>
          <Form.Control
            ref={candidateName1}
            placeholder='Enter Candidate Name'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Candidate 1 Image URL</Form.Label>
          <Form.Control
            ref={candidateName1URL}
            placeholder='enter Image URL'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Candidiate 2 Name</Form.Label>
          <Form.Control
            ref={candidateName2}
            placeholder='Enter Candidate Name'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Candidate 2 Image URL</Form.Label>
          <Form.Control
            ref={candidateName2URL}
            placeholder='enter Image URL'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Prompt</Form.Label>
          <Form.Control ref={promptRef} placeholder='Add Prompt'></Form.Control>
        </Form.Group>
      </Form>

      <Button
        disabled={disableButton}
        onClick={sendToBlockChain}
        variant='primary'
      >
        Submit
      </Button>
    </Container>
    );
};
export default NewPoll;