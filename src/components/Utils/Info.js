import React from 'react';
import styled from 'styled-components';
import { FiSave, FiEdit } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 5px;
`;

const SectionHeader = styled.h1`
  margin-top: -0.1rem;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const TextInput = styled.input.attrs(props => ({
  type: "text",

  size: props.size || "1em",
}))`
  font-size: 1em;
  width: 100%;
`;

const EmailInput = styled.input.attrs(props => ({
  type: "email",

  size: props.size || "1em",
}))`
  font-size: 1em;
  width: 100%;
`;

const PhoneInput = styled.input.attrs(props => ({
  type: "tel",

  size: props.size || "1em",
}))`
  font-size: 1em;
  width: 100%;
`;

const Button = styled.button`
  height: 30px;
  width: 45px;
  background-color: white;
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid black;
  margin: 0 5px;

  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    background-color: darkgrey;
  }
`;

const Info = (props) => {
  return (
      <Wrapper>
          <SectionHeader>Personal Info</SectionHeader>
          <FormWrapper>
            <FormRow>
              <Wrapper>
                <label>Name: </label>
                <TextInput 
                  placeholder='First and Last Name'
                  required
                  value={props.name}
                />
              <Wrapper>
              </Wrapper>
                <label>Email Address: </label>
                <EmailInput 
                  placeholder='Email'
                  required
                  value={props.email}
                />
              </Wrapper>
              <Wrapper>
                <label>Phone Number: </label>
                <PhoneInput 
                  placeholder='1(123)123-1234'
                  required
                  value={props.phone}
                />
              </Wrapper>
            </FormRow>
            {props.edit ? (
              <Button onClick={props.action}>
                <FiSave />
              </Button>
              ) : (
              <Button onClick={props.action}>
                <FiEdit />
              </Button>
            )}
          </FormWrapper>
      </Wrapper>
  )
}

export default Info;