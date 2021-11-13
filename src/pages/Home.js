import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY_LIST_OF_COUNTRIES = gql `
  {
      countries {
          name
      }
  }
`
const Home = () => {
    const { data, loading, error } = useQuery(QUERY_LIST_OF_COUNTRIES);
    return (
        <div className="home">
          <h1>List of Countries</h1>
        </div>
    )
}

export default Home
