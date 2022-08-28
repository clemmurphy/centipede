import styled from 'styled-components'

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
      <div>
        <h1>Sandbox</h1>
        <p>
          This is a sandbox page. You can use it to experiment with new
          components and features.
        </p>
      </div>
    </CenterEverythingDiv>
  )
}
