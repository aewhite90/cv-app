import React from 'react';
import styled from 'styled-components';
import { FiSave, FiEdit, FiTrash2 } from 'react-icons/fi';
import {Button, ButtonWrapper, Output, Wrapper, FormWrapper, FormRow, DescInput, NoPrint} from './sharedStyle';

const TextInput = styled.input.attrs(props => ({
  type: "text",

  size: props.size || "1em",
}))`
  font-size: 1em;
  width: 100%;
`;

class Edu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      study: '',
      from: '',
      to: 'Present',
      desc: '',
      eduEdit: true,
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
      eduEdit: false,
    })
  }

  handleEdit = (e) => {
    this.setState({
      eduEdit: true,
    })
  }

  render() {
    const {school, study, from, to, desc, eduEdit} = this.state;
    const {id, handleDelete} = this.props;

    if (eduEdit) {
      return(
        <Wrapper>
          <FormWrapper onSubmit={this.handleSave}>
            <FormRow>
              <Wrapper>
                <label>School: </label>
                <TextInput 
                  required
                  name='school'
                  onChange={this.handleChange}
                  value={school}
                />
              </Wrapper>
              <Wrapper>
                <label>Area of Study: </label>
                <TextInput 
                  required
                  name='study'
                  onChange={this.handleChange}
                  value={study}
                />
              </Wrapper>
              <Wrapper>
                <label>From:</label>
                <input 
                  required
                  type='date' 
                  value={from} 
                  name='from' 
                  onChange={this.handleChange}
                />
                <label>To (Leave blank if still here):</label>
                <input 
                  type='date' 
                  value={to} 
                  name='to' 
                  onChange={this.handleChange}
                />
              </Wrapper>
            </FormRow>
            <label>Additional Details (Optional): </label>
            <DescInput 
              value={desc}
              name='desc'
              onChange={this.handleChange}
            />
            <ButtonWrapper>
              <Button type='submit'>
                <FiSave />
              </Button>
              <Button onClick={() => handleDelete('edu',id)} type='button'>
                <FiTrash2 />
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </Wrapper>
      )
    }

    return(
      <div>
        <Output>
          <h3>{school} || {study}</h3>
          <p>{from} - {to}</p>
          <p>{desc}</p>
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

export default Edu;