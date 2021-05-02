import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
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

const DescInput = styled.textarea.attrs(props => ({
  type: "text",

  size: props.size || "1em",
}))`
  font-size: 1em;
  width: 100%;
  height: 3rem;
`;

const Work = () => {
  return (
      <Wrapper>
          <SectionHeader>Work</SectionHeader>
          <FormWrapper>
            <FormRow>
              <Wrapper>
                <label>Company: </label>
                <TextInput 
                />
              <Wrapper>
              </Wrapper>
                <label>Position: </label>
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
              <label>Description</label>
              <div>
                <DescInput 
                />
              </div>
          </FormWrapper>
      </Wrapper>
  )
}

export default Work;