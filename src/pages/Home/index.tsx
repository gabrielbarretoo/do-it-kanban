import { FormHandles } from '@unform/core';
import React, { useCallback, useRef, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as Yup from 'yup';
import getValidationError from '../../utils/getValidationError'

import {
  Container,
  Header,
  Content,
  TitleProject,
  HeaderContent,
  Projects,
  ProjectContainer
 } from './styles';
import { Form } from '@unform/web';
import ModalProject from '../../components/ModalProject';
import { uuid } from 'uuidv4';

interface ProjectsProps {
  name: string;
  id: string;
}

interface SearchData {
  name: string;
}

interface ProjectProps {
  name: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  
  const [projects, setProjects] = useState<ProjectsProps[]>([
    {name: "Projeto 1", id: "01"},
    {name: "Projeto 2", id: "02"},
    {name: "Projeto 3", id: "03"},  
  ]);
  const [projectModal, setProjectModal] = useState(false);

  function toggleProjectModal(): void {
    setProjectModal(!projectModal);
  }

  const handleProject = useCallback((project: ProjectsProps) => {
    history.push(
      project.id,
      project
    )
  }, [history]);

  const handleSubmit = useCallback(
    async (data: SearchData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);

          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [],
  );

  async function handleAddProject(newProject: ProjectProps): Promise<void> {
    try {

      // api add Project

      const newProjectFormatted = {
        name: newProject.name,
        id: uuid()
      }
      
      setProjects([...projects, newProjectFormatted]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>Do it!</h1>
          <button onClick={toggleProjectModal} type="button">
            <FiPlus />
            Novo Projeto
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiSearch} placeholder="Pesquisar" />
          <Button>Pesquisar</Button>
        </Form>
        <Projects>
          {projects.map( project => (
            <ProjectContainer key={project.id} onClick={() => handleProject(project)} >
              <TitleProject>{project.name}</TitleProject>
            </ProjectContainer>
          ))}
        </Projects>
        
      </Content>
      <ModalProject
        isOpen={projectModal}
        setIsOpen={toggleProjectModal}
        handleAddProject={handleAddProject}
      />
    </Container>
  );
}

export default Home;
