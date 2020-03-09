import React, { useState, useEffect } from "react";
import { ICardProps } from "../models/ICardProps";
import useFetch from "../hooks/useFetch";

export interface IImagesProvider {
  isLoading: boolean;
  isError: boolean;
  searchResults: any;
  handleChange: any;
}

const ImagesContext = React.createContext<IImagesProvider>({
  isLoading: false,
  isError: false,
  searchResults: [],
  handleChange: null
});

const featuredImagesUrl = "https://demo3136867.mockable.io/carousel";

const ImagesProvider: React.FC = props => {
  const [searchString, setSearchString] = useState("");

  const [doSearch, setDoSearch] = useState(false);
  const { response, isLoading, isError } = useFetch(
    featuredImagesUrl,
    doSearch
  );
  const [searchResults, setSearchResults] = useState(); 

  useEffect(() => {
    setDoSearch(true);

    if (!isLoading && !isError && response && response.data.length > 0)
      setSearchResults(response.data);
  }, [isError, isLoading, response]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    if (searchText.trim() !== "") {
      setSearchString(e.target.value);
      var filteredRecords = searchResults.filter(
        (x: ICardProps) => x.title.toLowerCase().indexOf(searchString) > -1
      );
      setSearchResults(filteredRecords);
    } else {
      setSearchResults(response.data);
    }
  };

  return (
    <ImagesContext.Provider
      value={{
        isLoading,
        isError,
        searchResults,
        handleChange
      }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};

const ImagesConsumer = ImagesContext.Consumer;
export {
  ImagesProvider,
  ImagesConsumer,
  ImagesContext
};
