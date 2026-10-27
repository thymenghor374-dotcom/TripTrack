import React from 'react'
import OptionGroup from './OptionGroup';
import { TRIP_TYPES } from '../constants/homeConstants';

const TripTypeSelector = ({ value, onChange }) => {
  return <OptionGroup title="Trip Type" options={TRIP_TYPES} value={value} onChange={onChange} />;
}

export default TripTypeSelector
