import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import Info from './Utils/Info';
import Edu from './Utils/Edu';
import Work from './Utils/Work';
import { FiSave, FiEdit, FiPlus } from 'react-icons/fi';

const FormWrapper = styled.section`
  border: 1px solid darkgrey;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0.5rem auto;
  background-color: white;
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
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

const ContentWrapper = styled.section`
  margin-bottom: 3rem;
`;

class Content extends React.Component {
    constructor() {
        super();

        this.handleInfoChange = this.handleInfoChange.bind(this);

        this.state = {
            info: {
              name: '',
              phone: '',
              email: '',
            },
            infoEdit: true,
            school: {
                school: '',
                major: '',
                start: '',
                finish: '',
                id: uniqid(),
            },
            education: [],
            eduEdit: true,
            work: {
                company: '',
                position: '',
                desc: '',
                start: '',
                end: '',
                id: uniqid(),
            },
            experience: [],
            workEdit: true,
        };
    }

    handleInfoChange = (e) => {
      this.setState({
        infoEdit: !this.state.infoEdit,
      });
      console.log(this.state);
      console.log(e);
    }

    // handleInfoEdit = (e) => {
    //   this.setState({
    //     infoEdit: true,
    //   });
    // }

    render() {
      const {info, infoEdit} = this.state;

        return (
            <ContentWrapper>
                <FormWrapper>
                    <Info info={info} edit={infoEdit} action={this.handleInfoChange}/>
                </FormWrapper>
                <FormWrapper>
                    <Edu />
                    <ButtonWrapper>
                      <Button>
                        <FiSave />
                      </Button>
                      <Button>
                        <FiPlus />
                      </Button>
                      <Button>
                        <FiEdit />
                      </Button>
                    </ButtonWrapper>
                </FormWrapper>
                <FormWrapper>
                    <Work />
                    <ButtonWrapper>
                      <Button>
                        <FiSave />
                      </Button>
                      <Button>
                        <FiPlus />
                      </Button>
                      <Button>
                        <FiEdit />
                      </Button>
                    </ButtonWrapper>
                </FormWrapper>
            </ContentWrapper>
        );
    }
}

export default Content;