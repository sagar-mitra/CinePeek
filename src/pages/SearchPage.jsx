import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage