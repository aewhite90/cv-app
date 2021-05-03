import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
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

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const Output = styled.div`
    width: 100%;
    text-align: left;
    padding: 5px;
    line-height: 0.75rem;
`;

const DescInput = styled.textarea.attrs(props => ({
    type: "text",

    size: props.size || "1em",
    }))`
    font-size: 1em;
    width: 100%;
    height: 3rem;
`;

const NoPrint = styled.div`
    @media print {
        display: none;
    }
`;

export {Button, ButtonWrapper, Output, Wrapper, FormWrapper, FormRow, DescInput, NoPrint}