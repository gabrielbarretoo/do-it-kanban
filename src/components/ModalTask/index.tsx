/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useRef, useState } from 'react';

import { FiX } from 'react-icons/fi';

import {
  Container,
  Title,
  Close,
} from './styles';

import Modal from '../Modal';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../Input';
import Button from '../Button';
import { TagProps } from '../../pages/Project';
import CheckboxInput from '../CheckBox';
import TextArea from '../TextArea';
import { uuid } from 'uuidv4';

interface TaskProps {
  id: string;
  name: string;
  description: string;
  tags: TagProps[];
  list: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTask: (newTask: TaskProps) => void;
  tagsCheckBox: TagProps[];
}

const ModalTask: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTask,
  tagsCheckBox
}) => {

  const formRef = useRef<FormHandles>(null);
  const [tags, setTags] = useState<string[]>([]);

  const handleTags = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTag = e.target.value;
      if(tags.findIndex(tag => tag === newTag) >= 0){
        const newArrayTags = tags.filter(tag => tag !== newTag);
        setTags(newArrayTags);
      } else {
        setTags([...tags, newTag]);
      }
    },
    [tags],
  );
  
  const handleSubmit = useCallback(
    async (data: TaskProps) => {

      const filteredTag = tagsCheckBox.filter(tag => tags.includes(tag.id) )

      const id = uuid();

      const newTask = {
        id,
        name: data.name,
        description: data.description,
        tags: filteredTag,
        list: 'To Do', 
      }
      handleAddTask(newTask)
      setIsOpen();
    },
    [handleAddTask, setIsOpen, tags, tagsCheckBox],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          <Title>Nova Tarefa</Title>
          <Close onClick={setIsOpen}>
            <FiX />
          </Close>
        </header>
        <section>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Nova tarefa" name="name" />
            <CheckboxInput 
              name="tags"
              options={tagsCheckBox}
              onChange={handleTags}
            />
            <TextArea placeholder="Descrição" name="description" />
            <Button type="submit">
              Adicionar
            </Button>
          </Form>
        </section>
      </Container>
    </Modal>
  );
};

export default ModalTask;
