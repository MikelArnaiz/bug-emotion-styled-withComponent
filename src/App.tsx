import React from "react";
import styled from "@emotion/styled";

const Box = styled.div`
  border: 1px solid red;
`;

const FormBox = Box.withComponent("form");

const Form = styled(FormBox)`
  background-color: "white";
`;

const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault();
  console.log("onSubmit");
};

export const App = () => {
  return (
    <Form onSubmit={onSubmit}>
      <input type="submit" value="Submit" />
    </Form>
  );
};
