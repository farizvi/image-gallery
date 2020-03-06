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

const CardsCarousel = styled.section`
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
  height: 100%;
  margin-bottom: 5px;
`;

const CardTitle = styled.h3`
  margin-left: 15px;
`;

const CardText = styled.p`
  margin-left: 15px;
`;

export const ImageList = (props: IImageListProps) => {
  const { imageListType, data, isError, isLoading } = props;
//   const [doSearch, setDoSearch] = useState(false);
//   const { response, isLoading, isError } = useFetch(imageListUrl, doSearch);

//   useEffect(() => {
//     setDoSearch(true);
//   }, []);

  const renderCardsList = () =>
    !isLoading &&
    !isError &&
    data &&
    data.length > 0 && (
      <CardsList>
        {data.map((item: ICardProps) => (
          <Card key={Guid.create().toString()}>
            <CardImage src={item.imageUrl} />
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

  const renderCardsCarousel = () =>
    !isLoading &&
    !isError &&
    data &&
    data.length > 0 && (
      <CardsCarousel>
        {data.map((item: ICardProps) => (
          <Card key={Guid.create().toString()}>
            <CardImage src={item.imageUrl} />
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
        <div>Loading ...</div>
      ) : (
        <div>
          { imageListType === "list" ? renderCardsList() : renderCardsCarousel()}
        </div>
      )}
    </Fragment>
  );
};
