import ProductContainer from "./components/ProductContainer";
import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <ProductContainer />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;
