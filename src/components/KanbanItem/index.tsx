import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash2 } from 'react-icons/fi';
import { TagProps } from '../../pages/Project';

import {
    Container,
    Header,
    TagsContainer,
    TagItem,
    DescriptionContainer,
    HeaderDescription,
    Description,
} from './styles';

interface TaskProps {
    id: string;
    name: string;
    description: string;
    tags: TagProps[];
    list: string;
  }

interface KanbanItemProps {
    task: TaskProps;
    isDragging: boolean;
    deleteItem: () => void;
}

const KanbanItem: React.FC<KanbanItemProps> = ({ task, isDragging, deleteItem }) => {

    const [ retract, setRetract ] = useState(true)

  return (
    <Container key={task.id} isDragging={isDragging}>
        <Header>
            <p>{task.name}</p>
            <div onClick={deleteItem}>
                <FiTrash2 />
            </div>
        </Header>
        <TagsContainer>
            {task.tags.map( tag => (
                <TagItem background={tag.color}>
                    {tag.label}
                </TagItem>
            ))}
        </TagsContainer>
        <DescriptionContainer>
            <HeaderDescription  onClick={() => setRetract(!retract)}>
                <p>Descrição</p>
                {retract ? (
                    <>
                    <FiChevronDown />
                    </>
                ) : (
                    <>
                    <FiChevronUp />
                    </>
                )}
            </HeaderDescription>
            {!retract && (
                <Description>
                    {task.description}
                </Description>
            )}
        </DescriptionContainer>
    </Container>
  );
}

export default KanbanItem;