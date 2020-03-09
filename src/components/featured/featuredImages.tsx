import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Guid } from "guid-typescript";
import { ICardProps } from "../../app/models/ICardProps";
import useFetch from "../../app/hooks/useFetch";

library.add(faMapMarker);
const imagesLookup: IconLookup = { prefix: "fas", iconName: "map-marker" };
const imagesIconDefinition: IconDefinition = findIconDefinition(imagesLookup);

const CardsList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 40px;
  margin-left: 15px;

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 5px;
`;

const CardTitle = styled.h3`
  margin-left: 15px;
`;

const CardText = styled.p`
  margin-left: 15px;
`;

const Loader = styled.div`
  margin: 0 auto;
  position: fixed;
  left: 50%;
`;

export const FeaturedImages = () => {
  const imageListUrl = "https://demo3136867.mockable.io/featured";
  const [doSearch, setDoSearch] = useState(false);
  const { response, isLoading, isError } = useFetch(imageListUrl, doSearch);

  useEffect(() => {
    setDoSearch(true);
  }, []);

  const renderCardsList = () =>
    !isLoading &&
    !isError &&
    response.data &&
    response.data.length > 0 && (
      <CardsList>
        {response.data.map((item: ICardProps) => (
          <Card key={Guid.create().toString()}>
            <CardImage src={item.img} />
            <CardTitle>{item.title}</CardTitle>
            <CardText>
              <FontAwesomeIcon icon={imagesIconDefinition} size="1x" />
              &nbsp;
              {item.location}
            </CardText>
          </Card>
        ))}
      </CardsList>
    );

  return (
    <Fragment>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <Loader>Loading...</Loader> : <div>{renderCardsList()}</div>}
    </Fragment>
  );
};
