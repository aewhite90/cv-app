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

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      from: '',
      to: 'Present',
      desc: '',
      workEdit: true,
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
      workEdit: false,
    })
  }

  handleEdit = (e) => {
    this.setState({
      workEdit: true,
    })
  }

  render() {
    const {company, position, from, to, desc, workEdit} = this.state;
    const {id, handleDelete} = this.props;

    if (workEdit) {
      return(
        <Wrapper>
          <FormWrapper onSubmit={this.handleSave}>
            <FormRow>
              <Wrapper>
                <label>Company/Organization: </label>
                <TextInput 
                  required
                  name='company'
                  onChange={this.handleChange}
                  value={company}
                />
              </Wrapper>
              <Wrapper>
                <label>Position: </label>
                <TextInput 
                  required
                  name='position'
                  onChange={this.handleChange}
                  value={position}
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
            <label>Description of Responsibilities: </label>
            <DescInput 
              value={desc}
              name='desc'
              onChange={this.handleChange}
            />
            <ButtonWrapper>
              <Button type='submit'>
                <FiSave />
              </Button>
              <Button onClick={() => handleDelete('work',id)} type='button'>
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
          <h3>{company} || {position}</h3>
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

export default Work;