import React from "react";
import styled from "styled-components";
import { ICardProps } from "../../app/models/ICardProps";

// const CardsContainer = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   flex: 0 0 auto;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

const CardsItem = styled.li`
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
`;

const CardObject = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  // box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

const CardImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  // transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
`;

const CardTitle = styled.div`
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

// const CardFlowers = styled.div`
//   background-image: url(https://placeimg.com/640/480/nature);
// `;

// const CardRiver = styled.div`
//   background-image: url(https://unsplash.it/800/600?image=11);
// `;

// const CardRecord = styled.div`
//   background-image: url(https://unsplash.it/800/600?image=39);
// `;

// const CardFence = styled.div`
//   background-image: url(https://unsplash.it/800/600?image=59);
// `;

interface ICardHeaderImageProps {
  imageUrl: string;
}

const CardHeaderImage = styled.div`
  background-image: url(${(props: ICardHeaderImageProps) => props.imageUrl});
  background-position: center center;
`;

export const Card = (props: ICardProps) => {
  const { title, location, imageUrl } = props;
  
  return (
    // <CardsContainer>
      <CardsItem>
        <CardObject>
          <CardImage>
            <CardHeaderImage imageUrl={imageUrl} />
          </CardImage>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardText>
              {location}
            </CardText>
          </CardContent>
        </CardObject>
      </CardsItem>
    //   <CardsItem>
    //     <CardObject>
    //       <CardImage>
    //         <CardRiver />
    //       </CardImage>
    //       <CardContent>
    //         <CardTitle>Flex Grow</CardTitle>
    //         <CardText>
    //           This defines the ability for a flex item to grow if necessary. It
    //           accepts a unitless value that serves as a proportion. It dictates
    //           what amount of the available space inside the flex container the
    //           item should take up.
    //         </CardText>
    //       </CardContent>
    //     </CardObject>
    //   </CardsItem>
    //   <CardsItem>
    //     <CardObject>
    //       <CardImage>
    //         <CardRecord />
    //       </CardImage>
    //       <CardContent>
    //         <CardTitle>Flex Shrink</CardTitle>
    //         <CardText>
    //           This defines the ability for a flex item to shrink if necessary.
    //           Negative numbers are invalid.
    //         </CardText>
    //       </CardContent>
    //     </CardObject>
    //   </CardsItem>
    //   <CardsItem>
    //     <CardObject>
    //       <CardImage>
    //         <CardFlowers />
    //       </CardImage>
    //       <CardContent>
    //         <CardTitle>Flex Basis</CardTitle>
    //         <CardText>
    //           This defines the default size of an element before the remaining
    //           space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or
    //           a keyword. The auto keyword means "look at my width or height
    //           property."
    //         </CardText>
    //       </CardContent>
    //     </CardObject>
    //   </CardsItem>
    // </CardsContainer>
  );
};
