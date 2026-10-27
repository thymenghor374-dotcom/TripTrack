import React, {useState} from 'react'
import OptionGroup from './OptionGroup';
import { BAGS } from '../constants/homeConstants';


const BaggageToggles = () => {
  const [bag, setBag] = useState("cabin");
  return <OptionGroup title="Baggage" options={BAGS} value={bag} onChange={setBag} />;
}

export default BaggageToggles
