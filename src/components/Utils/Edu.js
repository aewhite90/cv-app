import React from 'react';
import styled from 'styled-components';

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

const Edu = () => {
  return (
      <Wrapper>
          <SectionHeader>Education</SectionHeader>
          <FormWrapper>
            <FormRow>
              <Wrapper>
                <label>School: </label>
                <TextInput 
                />
              <Wrapper>
              </Wrapper>
                <label>Area of Study: </label>
                <TextInput 
                />
              </Wrapper>
            </FormRow>
            <FormRow>
              <label>From: </label>
              <input 
                type='date'
              />
              <label>Until: </label>
              <input 
                type='date'
              />
            </FormRow>
          </FormWrapper>
      </Wrapper>
  )
}

export default Edu;