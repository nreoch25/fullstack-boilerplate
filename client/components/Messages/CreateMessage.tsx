import { Fragment, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import CREATE_MESSAGE_MUTATION from "../../graphql/create-message.mutation";
import Receivers from "./Receivers";

const CreateMessage = ({ me }) => {
  const [receiver, setReceiver] = useState("--  Please select a user --");
  const [text, setText] = useState("");

  const [createMessage] = useMutation(CREATE_MESSAGE_MUTATION, {
    onCompleted: () => {
      setReceiver("--  Please select a user --");
      setText("");
    }
  });

  const handleChange = (name: string) => (evt: any) => {
    console.log("NAME", name);
    if (name === "text") {
      setText(evt.target.value);
    } else if (name === "receiver") {
      setReceiver(evt.target.value);
    }
  };
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (receiver === "--  Please select a user --") {
      return alert("Please select a user!");
    }
    if (text === "") {
      return alert("Please add a message body!");
    }
    createMessage({ variables: { sender: me.name, receiver, text } });
  };

  return (
    <Fragment>
      <h4 className="mb-3 mt-4">Create Message</h4>
      <Form onSubmit={handleSubmit} className="mb-3">
        <FormGroup>
          <Label for="messageReceiver" defaultValue="">
            Message Receiver
          </Label>
          <Input
            type="select"
            id="messageReceiver"
            name="receiver"
            value={receiver}
            placeholder="Type your email"
            onChange={handleChange("receiver")}
          >
            <Receivers me={me} />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="messageText">Message Body</Label>
          <Input
            type="textarea"
            value={text}
            name="text"
            id="messageText"
            onChange={handleChange("text")}
          />
        </FormGroup>
        <Button type="submit" color="primary" block>
          Submit Message
        </Button>
      </Form>
    </Fragment>
  );
};

export default CreateMessage;
