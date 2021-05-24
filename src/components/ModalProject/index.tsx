/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useRef } from 'react';

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

interface ProjectProps {
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddProject: (newProject: ProjectProps) => void;
}

const ModalProject: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    handleAddProject,
  }) => {

  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(
    async (data: ProjectProps) => {
      handleAddProject(data);
      setIsOpen();
    },
    [handleAddProject, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          <Title>Novo Projeto</Title>
          <Close onClick={setIsOpen}>
            <FiX />
          </Close>
        </header>
        <section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Novo projeto" name="name" />
            <Button type="submit">
              Adicionar
            </Button>
          </Form>
        </section>
      </Container>
    </Modal>
  );
};

export default ModalProject;
