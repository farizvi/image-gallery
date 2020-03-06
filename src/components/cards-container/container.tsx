import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { Card } from "../card/card";
import { Guid } from "guid-typescript";
import { ICardProps } from "../../app/models/ICardProps";
import useFetch from "../../app/hooks/useFetch";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Title = styled.div`
    display: flex;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14pt;
`;

export const Container = () => {
  const [doSearch, setDoSearch] = useState(false);
  const { response, isLoading, isError } = useFetch(
    "http://demo3136867.mockable.io/featured",
    doSearch
  );

  useEffect(() => {
    setDoSearch(true);
  }, []);

  const renderCards = () =>
    !isLoading &&
    !isError &&
    response &&
    response.data.length > 0 && (
      <CardsContainer>
        {response.data.map((item: ICardProps) => (
          <Card
            key={Guid.create().toString()}
            title={item.title}
            location={item.location}
            imageUrl={item.imageUrl}
          />
        ))}
      </CardsContainer>
    );

  return (
    <Fragment>
      <Title>Featured</Title>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <div>Loading ...</div> : <div>{renderCards()}</div>}
    </Fragment>
  );
};
