import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd'
import { DraggableItemTypes } from 'constants/constants'

const CenterEverythingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export function SandboxLayout() {
  return (
    <CenterEverythingDiv>
      <DraggableComponent />
      <DroppableComponent />
    </CenterEverythingDiv>
  )
}

function DraggableComponent() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DraggableItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <p>DRAG THIS</p>
    </div>
  )
}

function DroppableComponent() {
  const [collectedProps, drop] = useDrop(() => ({
    accept: DraggableItemTypes.CARD,
  }))

  return (
    <div
      style={{ height: 100, width: 100, backgroundColor: 'rebeccapurple' }}
      ref={drop}
    >
      Drop Target
    </div>
  )
}
