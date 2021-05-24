import React, { useState } from 'react';
import { FiArrowLeft, FiPlus, FiTag, FiUsers } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import Kanban from '../../components/Kanban';
import ModalList from '../../components/ModalList';
import ModalTag from '../../components/ModalTag';
import ModalTask from '../../components/ModalTask';
import ModalTeam from '../../components/ModalTeam';

import {
  Container,
  Header,
  Content,
  HeaderContent,
  OptionsContainer,
  Option,
  KanbanContainer,
 } from './styles';

interface ProjectsProps {
  name: string;
  id: string;
}

interface ListProps {
  name: string;
}

export interface TagProps {
  id: string;
  value: string;
  label: string;
  defaultChecked?: boolean | false;
  color?: string;
}

interface TaskProps {
  id: string;
  name: string;
  description: string;
  tags: TagProps[];
  list: string;
}

const Project: React.FC = () => {

  const history = useHistory();
  const { state } = useLocation<ProjectsProps>();
  
  const [project, setProject] = useState<ProjectsProps>(state);
  const [list, setList] = useState<ListProps[]>([
    { name: 'To Do' },
    { name: 'Doing' },
    { name: 'Done'}
  ]);
  const [tags, setTags] = useState<TagProps[]>([
    {
      id: 'f18b7e9c-bc1d-11eb-8529-0242ac130003',
      value: 'f18b7e9c-bc1d-11eb-8529-0242ac130003',
      label: 'Priority',
      color: '#FDFFB6'
    }
  ]);
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: '436e4f68-bc24-11eb-8529-0242ac130003',
      name: 'Nova Tarefa 1',
      description: 'Nova Tarefa descrição',
      list: 'To Do',
      tags: [
        {
          id: 'f18b7e9c-bc1d-11eb-8529-0242ac130003',
          value: 'f18b7e9c-bc1d-11eb-8529-0242ac130003',
          label: 'Priority',
          color: '#FDFFB6'
        }
      ]
    },
    {
      id: '4fa8c75e-bc24-11eb-8529-0242ac130003',
      name: 'Nova Tarefa 2',
      description: 'Nova Tarefa descrição',
      list: 'Doing',
      tags: [
        {
          id: 'f18b7e9c-bc1d-11eb-8529-0242ac130003',
          value: 'f18b7e9c-bc1d-11eb-8529-0242ac130003',
          label: 'Priority',
          color: '#FDFFB6'
        }
      ]
    },
    {
      id: '56c2eaec-bc24-11eb-8529-0242ac130003',
      name: 'Nova Tarefa 3',
      description: 'Nova Tarefa descrição',
      list: 'Done',
      tags: []
    },
  ]);
  
  const [teamModal, setTeamModal] = useState(false);
  const [listaModal, setListaModal] = useState(false);
  const [tagsModal, setTagsModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  function toggleTeamModal(): void {
    setTeamModal(!teamModal);
  }

  function toggleListaModal(): void {
    setListaModal(!listaModal);
  }

  function toggleTagsModal(): void {
    setTagsModal(!tagsModal);
  }

  function toggleTaskModal(): void {
    setTaskModal(!taskModal);
  }

  async function handleAddList(newList: ListProps): Promise<void> {
    try {

      // api add list
      
      setList([...list, newList]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddTag(newTag: TagProps): Promise<void> {
    try {

      // api add Tag
      setTags([...tags, newTag])
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddTask(newTask: TaskProps): Promise<void> {
    try {

      // api add Tag

      setTasks([...tasks, newTask]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>{project.name}</h1>
          <button type="button" onClick={() => history.goBack()}>
            <FiArrowLeft />
            Voltar
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <OptionsContainer>
          <Option onClick={toggleListaModal}>
            <FiPlus />
            Lista
          </Option>
          <Option onClick={toggleTagsModal}>
            <FiTag />
            Tags
          </Option>
          <Option onClick={toggleTaskModal}>
            <FiPlus />
            Task
          </Option>
          <Option onClick={toggleTeamModal}>
            <FiUsers />
            Team
          </Option>
        </OptionsContainer>
        <KanbanContainer>
          <Kanban
            list={list}
            tasks={tasks}
          />
        </KanbanContainer>
      </Content>
      <ModalTeam
        isOpen={teamModal}
        setIsOpen={toggleTeamModal}
      />
      <ModalList
        isOpen={listaModal}
        setIsOpen={toggleListaModal}
        handleAddList={handleAddList}
      />
      <ModalTag
        isOpen={tagsModal}
        setIsOpen={toggleTagsModal}
        handleAddTag={handleAddTag}
        tags={tags}
      />
      <ModalTask
        isOpen={taskModal}
        setIsOpen={toggleTaskModal}
        handleAddTask={handleAddTask}
        tagsCheckBox={tags}
      />
    </Container>
  );
}

export default Project;