/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useRef, useState } from 'react';

import { FiEdit, FiX } from 'react-icons/fi';

import {
  Container,
  Title,
  Close,
  FormContainer,
  TagsContainer,
  TagItem,
} from './styles';

import Modal from '../Modal';
import ColorPicker from '../ColorPicker'
import { FormHandles } from '@unform/core';
import Input from '../Input';
import Button from '../Button';
import { Form } from '@unform/web';
import { uuid } from 'uuidv4';


interface TagProps {
  id: string;
  value: string;
  label: string;
  defaultChecked?: boolean | false;
  color?: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTag: (newTag: TagProps) => void;
  tags: TagProps[];
}

const ModalTag: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    handleAddTag,
    tags,
  }) => {
  
  const formRef = useRef<FormHandles>(null);
  const [color, setColor] = useState('#eae4e9')

  const handleSubmit = useCallback(
    async (data: TagProps) => {
      
      const code = uuid();
      handleAddTag({
        id: code,
        value: code,
        label: data.label,
        color
      });
      formRef.current?.clearField('name');
    },
    [color, handleAddTag],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          <Title>Tags</Title>
          <Close onClick={setIsOpen}>
            <FiX />
          </Close>
        </header>
        <section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormContainer>
              <Input placeholder="Nova tag" name="label" />
              <ColorPicker setColorHEX={setColor} name="color" />
              <Button type="submit">
                Adicionar
              </Button>
            </FormContainer>
          </Form>
        </section>
        <TagsContainer>
          {tags.map( tag => (
            <TagItem background={tag.color}>
              {tag.label}
              <FiEdit />
            </TagItem>
          ))}
        </TagsContainer>
      </Container>
    </Modal>
  );
};

export default ModalTag;
