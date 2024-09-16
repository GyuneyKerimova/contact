import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { InputData } from '../types';

const EmailInput: React.FC<InputData> = ({ value, onChange }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="email" style={{ minWidth: '80px', textAlign: 'left' }}>Email</InputGroup.Text>
      <Form.Control
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder="example@domain.com"
        className="placeholder-color"
      />
    </InputGroup>
  );
};

export default EmailInput;
