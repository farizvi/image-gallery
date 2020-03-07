import React, { useContext } from "react";
import styled from "styled-components";
import { SearchBox } from "../search/searchbox";
import { ImageList } from "../image-list/imagelist";
import { ImagesContext } from "../../app/context/imagesContext";
import { FeaturedImages } from "../featured/featuredImages";

const ContainerComponent = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 10px;
`;

const Title = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 14pt;
`;

export const HomePage = React.memo(() => {
  const context = useContext(ImagesContext);
  const { isLoading, isError, searchResults, handleChange } = context;

  return (
    <ContainerComponent>
      <SearchBox TextChanged={handleChange} />
      <Title>Popular around you</Title>
      <ImageList
        imageListType="carousel"
        imageListUrl=""
        data={searchResults}
        isError={isError}
        isLoading={isLoading}
      />
      <Title>Featured</Title>
      <FeaturedImages />
    </ContainerComponent>
  );
});
