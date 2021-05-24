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

interface ListProps {
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddList: (newList: ListProps) => void;
}

const ModalList: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    handleAddList,
  }) => {

  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(
    async (data: ListProps) => {
      handleAddList(data);
      setIsOpen();
    },
    [handleAddList],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          <Title>Lista</Title>
          <Close onClick={setIsOpen}>
            <FiX />
          </Close>
        </header>
        <section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Nova lista" name="name" />
            <Button type="submit">
              Adicionar
            </Button>
          </Form>
        </section>
      </Container>
    </Modal>
  );
};

export default ModalList;
