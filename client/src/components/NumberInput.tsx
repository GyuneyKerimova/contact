import React from 'react';
import InputMask from 'react-input-mask';
import { InputGroup } from 'react-bootstrap';
import { InputData } from '../types';


const NumberInput: React.FC<InputData> = ({ value, onChange }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="number" style={{ minWidth: '80px', textAlign: 'left' }}>Номер</InputGroup.Text>
      <InputMask
        className="form-control placeholder-color"
        mask="99-99-99"
        placeholder="__-__-__"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default NumberInput;
