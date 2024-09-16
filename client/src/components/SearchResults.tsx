import React from 'react';
import { Card } from 'react-bootstrap';
import { SearchResultProps } from '../types';

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-3 w-100" style={{ maxWidth: '400px' }}>
      <Card>
        <Card.Body className="text-start">
          <Card.Title>Найденные контакты</Card.Title>
          {data.map((user, index) => (
            <Card.Text key={index}>
              <strong>Email:</strong> {user.email}<br />
              <strong>Номер:</strong> {user.number}
            </Card.Text>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchResult;