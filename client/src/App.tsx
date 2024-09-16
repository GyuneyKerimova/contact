import { useState } from 'react';
import SearchForm from './components/SearchForm';
import { Container, Alert, Spinner } from 'react-bootstrap';
import './css/bootstrap.min.css';
import './css/style.css';
import { ResultData } from './types';
import SearchResult from './components/SearchResults';

function App() {
  const [data, setData] = useState<ResultData[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  return (
    <Container className="App mt-5 mb-5 d-flex flex-column align-items-center">
      <h1 className='text display-4 text-secondary mb-3'>Contact Finder</h1>
      <SearchForm 
        setData={setData} 
        setError={setError} 
        setLoading={setLoading} 
      />
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {loading && (
        <Spinner animation="border" variant="secondary" role="status" className="mt-3"/>
      )}
      {!loading && data && <SearchResult data={data} />}
    </Container>
  );
}

export default App;
