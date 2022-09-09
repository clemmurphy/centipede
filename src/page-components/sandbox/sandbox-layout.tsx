import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd'
import { DraggableItemTypes } from 'constants/constants'
import { useState } from 'react'

const CenterEverythingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  height: 100vh;
  width: 100vw;
`

export function SandboxLayout() {
  return (
    <CenterEverythingDiv>
      <DraggableComponent />
      <DroppableComponent />
      <DraggableComponent2 />
    </CenterEverythingDiv>
  )
}

function DraggableComponent() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DraggableItemTypes.CARD,
    item: { value: 2 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    options: {
      dropEffect: 'copy',
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
  }))

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        background: 'lightblue',
        padding: 20,
      }}
    >
      <p>+ 2</p>
    </div>
  )
}

function DraggableComponent2() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DraggableItemTypes.CARD,
    item: { value: -1 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    options: {
      dropEffect: 'copy',
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
  }))

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        background: 'lightblue',
        padding: 20,
      }}
    >
      <p>- 1</p>
    </div>
  )
}

let dropCount = 0

function DroppableComponent() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableItemTypes.CARD,
    drop: (props: any, monitor: any) => {
      const item = monitor.getItem()
      dropCount = dropCount + item.value
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }))

  const color = isOver ? 'lightgreen' : 'lightpink'

  return (
    <div
      style={{
        height: 200,
        width: 200,
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
      }}
      ref={drop}
    >
      <p>{dropCount}</p>
    </div>
  )
}
