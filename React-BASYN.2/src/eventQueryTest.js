import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_EVENTS = gql`
  {
    economicResources {
      id
      name
    }
  }
`;

export default function eventsTest() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.economicResources.map(er => (
        <li key={er.id}>{er.id}</li>
      ))}
    </ul>
  );
}
