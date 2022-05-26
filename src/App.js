import Header from "./components/Header";
import Home from "./components/Home";
import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <Header />
      <Home />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;
