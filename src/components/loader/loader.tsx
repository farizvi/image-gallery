import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const LoaderGrid = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const LoaderContainer = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

export const Loader = () => {
    return (
        <div>
            <LoaderGrid>
                <LoaderContainer>
                    <ContentLoader>
                        <rect x="0" y="0" rx="5" ry="5" width="350" height="115" />
                        <rect x="0" y="120" rx="4" ry="4" width="300" height="13" />
                        <rect x="0" y="140" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </LoaderContainer>
                <LoaderContainer>
                    <ContentLoader>
                        <rect x="0" y="0" rx="5" ry="5" width="350" height="115" />
                        <rect x="0" y="120" rx="4" ry="4" width="300" height="13" />
                        <rect x="0" y="140" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </LoaderContainer>
                <LoaderContainer>
                    <ContentLoader>
                        <rect x="0" y="0" rx="5" ry="5" width="350" height="115" />
                        <rect x="0" y="120" rx="4" ry="4" width="300" height="13" />
                        <rect x="0" y="140" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </LoaderContainer>
                <LoaderContainer>
                    <ContentLoader>
                        <rect x="0" y="0" rx="5" ry="5" width="350" height="115" />
                        <rect x="0" y="120" rx="4" ry="4" width="300" height="13" />
                        <rect x="0" y="140" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </LoaderContainer>
            </LoaderGrid>
        </div>
    );
};
