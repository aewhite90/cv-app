import React from 'react';
import styled from 'styled-components';
import Info from './Utils/Info';
import Edu from './Utils/Edu';
import Work from './Utils/Work';
import uniqid from 'uniqid';
import { FiPlus } from 'react-icons/fi';
import { NoPrint } from './Utils/sharedStyle';

const FormWrapper = styled.section`
  border: 1px solid darkgrey;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0.5rem auto;
  background-color: white;
  padding: 5px;
`;

const ContentWrapper = styled.section`
  margin-bottom: 3rem;
`;

const SectionHeader = styled.h1`
  margin-top: -0.1rem;
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

class Content extends React.Component {
  constructor() {
    super();  
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      eduId: uniqid(),
      edu: [],
      workId: uniqid(),
      work: [],
    };
  }

  newEdu = () => {
    this.setState({
      edu: this.state.edu.concat(this.state.eduId),
      eduId: uniqid(),
    })
  }

  newWork = () => {
    this.setState({
      work: this.state.work.concat(this.state.workId),
      workId: uniqid(),
    })
  }

  handleDelete = (list, id) => {
    if (list === 'edu') {
      let newList = this.state.edu.filter(i => i !== id);
      this.setState({
        edu: newList,
      })
    } else if (list === 'work') {
      let newList = this.state.work.filter(i => i !== id);
      this.setState({
        work: newList,
      })
    }
  }

  render() {
    const {edu, work} = this.state;

    return (
      <ContentWrapper>
        <FormWrapper>
          <Info />
        </FormWrapper>
        <FormWrapper>
          <SectionHeader>Education</SectionHeader>
          {edu.map(i => {
            return <Edu key={i} id={i} handleDelete={this.handleDelete}/>;
          })}
          <NoPrint>
            <Button>
              <FiPlus onClick={this.newEdu}/>
            </Button>
          </NoPrint>
        </FormWrapper>
        <FormWrapper>
          <SectionHeader>Experience</SectionHeader>
          {work.map(i => {
            return <Work key={i} id={i} handleDelete={this.handleDelete}/>;
          })}
          <NoPrint>
            <Button>
              <FiPlus onClick={this.newWork}/>
            </Button>
          </NoPrint>
        </FormWrapper>
      </ContentWrapper>
    )
  }
}

export default Content;