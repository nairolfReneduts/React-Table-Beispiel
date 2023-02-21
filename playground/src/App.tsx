import React from 'react';
import './App.css';
import InfoText from './Components/Table/InfoText/InfoText';
import { ProductPricePoolTableContainer } from './Components/Table/ProductPricePoolTableContainer';

function App() {
  return (
    <div className="App">
      <InfoText></InfoText>
      <ProductPricePoolTableContainer></ProductPricePoolTableContainer>
    </div>
  );
}

export default App;
