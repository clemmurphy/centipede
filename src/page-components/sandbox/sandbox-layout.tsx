import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd'
import { DraggableItemTypes } from 'constants/constants'
import { ReactElement, ReactNode, useState } from 'react'

const CenterEverythingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  height: 100vh;
  width: 100vw;
`

const ValueElement = styled.p`
  background-color: white;
  color: black;
`
let itemList: { id: number; item: ReactElement }[] = []

export function SandboxLayout() {
  const [nextItemId, setNextItemId] = useState(0)

  function addItemToList(item: ReactElement) {
    itemList.push({
      id: nextItemId,
      item: DeletableComponent({ id: nextItemId, children: item }),
    })
    setNextItemId(nextItemId + 1)
  }

  function removeItemFromList(id: number) {
    const itemToDeleteIndex = itemList.findIndex((item) => item.id === id)
    itemList = itemList.splice(itemToDeleteIndex, 1)
  }

  return (
    <CenterEverythingDiv>
      <DraggableComponent />
      <DroppableComponent />
      <DraggableComponent2 />
    </CenterEverythingDiv>
  )
}

function DeletableComponent({
  id,
  children,
}: {
  id: number
  children: ReactNode
}) {
  return (
    <div>
      <button onClick={() => removeItemFromList(id)}>Delete</button>
      {children}
    </div>
  )
}

function DraggableComponent() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DraggableItemTypes.CARD,
    item: { value: <ValueElement>Element one</ValueElement> },
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
    item: { value: <ValueElement>Element 2</ValueElement> },
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

function DroppableComponent() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableItemTypes.CARD,
    drop: (props: any, monitor: any) => {
      const item = monitor.getItem()
      addItemToList(item.value)
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
        minHeight: 200,
        width: 200,
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
      }}
      ref={drop}
    >
      {itemList.map((item) => {
        return item.item
      })}
    </div>
  )
}
