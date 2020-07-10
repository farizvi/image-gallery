import React, { Fragment } from "react";
import styled from "styled-components";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faChevronLeft, faChevronRight, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { Guid } from "guid-typescript";
import { ICardProps } from "../../app/models/ICardProps";
import { IImageListProps } from "../../app/models/IImageListProps";
import FadeIn from "react-fade-in";
import { Loader } from "../loader/loader";

library.add(faMapMarker);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faDotCircle);

const imagesLookup: IconLookup = { prefix: "fas", iconName: "map-marker" };
const imagesIconDefinition: IconDefinition = findIconDefinition(imagesLookup);

const chevronLeftLookup: IconLookup = { prefix: "fas", iconName: "chevron-left" };
const chevronLeftDefinition: IconDefinition = findIconDefinition(chevronLeftLookup);

const chevronRightLookup: IconLookup = { prefix: "fas", iconName: "chevron-right" };
const chevronRightDefinition: IconDefinition = findIconDefinition(chevronRightLookup);

const dotLookup: IconLookup = { prefix: "fas", iconName: "dot-circle"};
const dotDefinition: IconDefinition = findIconDefinition(dotLookup);

const CarouselContainer = styled.div`
  display: flex;
`;

const ChevronLeft = styled.div`
  margin-top: 10px;
  margin-right: 5px;
  float: left;
  cursor: pointer;
`;

const DotCircle = styled.div`
   margin-top: 10px;
   margin-right: 5px;
  float: left;
`;

const ChevronRight = styled.div`
  margin-top: 10px;
  float: left;
  cursor: pointer;
`;

const CardsCarousel = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;

  // Hide scrollbar for Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar from IE and Edge
  -ms-overflow-style: none;

  // Hide scrollbar from Firefox
  scrollbar-width: none
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

// const Loader = styled.div`
//   margin: 0 auto;
//   position: fixed;
//   left: 50%;
// `;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageList = (props: IImageListProps) => {
  const { data, isError, isLoading } = props;
  const carouselRef = React.createRef<HTMLDivElement>();

  const scroll = (direction: number) => {
    const carouselDiv = carouselRef.current;

    if (carouselDiv) {
      let far = +(carouselDiv.offsetWidth)/2*direction;
      let position = carouselDiv.scrollLeft + far;  
      carouselDiv.scrollTo({left: position, behavior: "smooth"});
    }
  }

  const renderCardsCarousel = () =>
    !isLoading &&
    !isError &&
    data &&
    data.length > 0 && (
      <div>
        <CarouselContainer>
            <CardsCarousel aria-label="popular-images" ref={carouselRef}>
              {data.map((item: ICardProps) => (
                <FadeIn key={Guid.create().toString()}>
                      <Card>
                      <CardImage src={item.img} />
                      <CardTitle>{item.title}</CardTitle>
                      <CardText>
                        <FontAwesomeIcon icon={imagesIconDefinition} size="1x" />
                        &nbsp;
                        {item.location}
                      </CardText>
                      <p>&nbsp;</p>
                    </Card>
                </FadeIn>
              ))}
            </CardsCarousel>
        </CarouselContainer>
        <NavControls>
            <ChevronLeft onClick={() => scroll(-1)}><FontAwesomeIcon icon={chevronLeftDefinition} size="1x" /></ChevronLeft>
            <DotCircle><FontAwesomeIcon icon={dotDefinition} size="1x" /></DotCircle>
            <ChevronRight onClick={() => scroll(1)}><FontAwesomeIcon icon={chevronRightDefinition} size="1x" /></ChevronRight>
        </NavControls>
      </div>
    );

  return (
    <Fragment>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>{renderCardsCarousel()}</div>
      )}
    </Fragment>
  );
};
