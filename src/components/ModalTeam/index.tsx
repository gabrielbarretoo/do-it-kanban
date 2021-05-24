/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { FiX } from 'react-icons/fi';

import {
  Container,
  Title,
  Close,
} from './styles';

import Modal from '../Modal';


interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalTeam: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
}) => {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          <Title>Teams</Title>
          <Close onClick={setIsOpen}>
            <FiX />
          </Close>
        </header>
        <section>
          <p>
            Essa funcionalidade ainda não está ativa
            <br />
            Mas fique tranquilo, já já tá no ar.
          </p>
        </section>
      </Container>
    </Modal>
  );
};

export default ModalTeam;
