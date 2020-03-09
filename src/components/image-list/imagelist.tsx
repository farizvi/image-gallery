import React, { Fragment } from "react";
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
import { IImageListProps } from "../../app/models/IImageListProps";

library.add(faMapMarker);
const imagesLookup: IconLookup = { prefix: "fas", iconName: "map-marker" };
const imagesIconDefinition: IconDefinition = findIconDefinition(imagesLookup);

const CardsCarousel = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-right: 20px;
  flex-shrink: 0;
  width: 350px;

  ::before,
  ::after {
    content: "";
  }
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

export const ImageList = (props: IImageListProps) => {
  const { data, isError, isLoading } = props;

  const renderCardsCarousel = () =>
    !isLoading &&
    !isError &&
    data &&
    data.length > 0 && (
      <CardsCarousel aria-label="popular-images">
        {data.map((item: ICardProps) => (
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
      </CardsCarousel>
    );

  return (
    <Fragment>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <div>{renderCardsCarousel()}</div>
      )}
    </Fragment>
  );
};
