import styled from "styled-components";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Body/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
