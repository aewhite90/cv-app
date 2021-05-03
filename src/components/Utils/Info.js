import React from 'react';
import styled from 'styled-components';
import { FiSave, FiEdit } from 'react-icons/fi';
import {Button, Wrapper, FormWrapper, FormRow, NoPrint} from './sharedStyle';

const Output = styled.div`
  width: 100%;
  text-align: center;
`;

const SectionHeader = styled.h1`
  margin-top: -0.1rem;
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

class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      infoEdit: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSave = (e) => {
    e.preventDefault();
    this.setState({
      infoEdit: false,
    })
  }

  handleEdit = (e) => {
    this.setState({
      infoEdit: true,
    })
  }

  render() {
    const {name, email, phone, infoEdit} = this.state;

    if (infoEdit) {
      return(
        <Wrapper>
          <SectionHeader>Personal Info</SectionHeader>
          <FormWrapper onSubmit={this.handleSave}>
            <FormRow>
              <Wrapper>
                <label>Name: </label>
                <TextInput 
                  required
                  name='name'
                  onChange={this.handleChange}
                  value={name}
                />
              </Wrapper>
              <Wrapper>
                <label>Email Address: </label>
                <EmailInput 
                  required
                  name='email'
                  onChange={this.handleChange}
                  value={email}
                />
              </Wrapper>
              <Wrapper>
                <label>Phone Number: </label>
                <PhoneInput 
                  required
                  name='phone'
                  onChange={this.handleChange}
                  value={phone}
                />
              </Wrapper>
            </FormRow>
            <Button type='submit'>
              <FiSave />
            </Button>
          </FormWrapper>
        </Wrapper>
      )
    }

    return(
      <div>
        <Output>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{phone}</p>
        </Output>
        <NoPrint>
          <Button onClick={this.handleEdit}>
            <FiEdit />
          </Button>
        </NoPrint>
      </div>
    )
  }
}

export default Info;