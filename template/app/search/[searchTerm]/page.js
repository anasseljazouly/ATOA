import React from "react";

const search = async (searchTerm) => {
  const response = await fetch(
    `http://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const searchResults = await response.json();
  return searchResults;
};

async function SearchResults(props) {
  const searchResults = await search(props.params.searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">
        you searched for the term {props.params.searchTerm}
      </p>
      <ol>
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
