import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';      
import EmailInput from './EmailInput';
import NumberInput from './NumberInput';
import axios from 'axios';
import { SearchData, SearchResultData } from '../types';
import { cleanNumber } from '../utils';
import { SearchFormProps } from '../types';

const SearchForm: React.FC<SearchFormProps> = ({ setData, setError, setLoading }) => {
  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [abortController, setAbortController] = useState<AbortController | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    
    setLoading(true);
    e.preventDefault();
    setError(null); 
    setData(undefined);
  
    if (abortController) {
      abortController.abort();
    }
  
    const controller = new AbortController();
    setAbortController(controller);
    setLoading(true); 


    try {
      const requestData: SearchData = { email };

      if (number) {
        const cleanedNumber = cleanNumber(number);
        requestData.number = cleanedNumber;
      }
      console.log(process.env.REACT_APP_API_URL)

      const response = await axios.post<SearchResultData>(`${process.env.REACT_APP_API_URL}`,
        requestData,
        { signal: controller.signal }
      );

      if (!response.data.data) {
        setError(response.data.message);
      } else {
        setData(Array.isArray(response.data.data) ? response.data.data : [response.data.data]); 
  }

      setLoading(false);
  
    } catch (err) {
        setLoading(false);
      if (axios.isAxiosError(err)) {
        if (err.code === 'ERR_CANCELED') {
            setLoading(true)
        } else {
          setError(`${err.response?.data?.message}: ${err.response?.data?.errors}` || err.message || 'Произошла ошибка при запросе');
        }
      } 
      else {
        console.log(err)
        setError('Произошла ошибка');
      }
    } 
  };

  return (
      <Form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
        <EmailInput value={email} onChange={setEmail} />
        <NumberInput value={number} onChange={setNumber} />
        <Button variant="secondary" type="submit" className="w-100">Поиск</Button>
      </Form>
  );
};

export default SearchForm;