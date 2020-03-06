import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchBox } from '../search/searchbox';
import { ImageList } from '../image-list/imagelist';
import { ImagesContext } from '../../app/context/imagesContext';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ContainerComponent': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'Container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

interface IContainerProps {
    children: any;

}

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
  
export const HomePage  = React.memo(() => {
    const context = useContext(ImagesContext);
    const { isLoading, isError, searchResults, handleChange } = context;
    
    return (
        <ContainerComponent>
            <SearchBox TextChanged={handleChange} />
            <Title>Popular around you</Title>
            {/* <ImageList imageListType="carousel" imageListUrl="http://demo3136867.mockable.io/carousel" /> */}
            <ImageList imageListType="carousel" imageListUrl="" data={searchResults} isError={isError} isLoading={isLoading} />
            <Title>Featured</Title>
            <ImageList imageListType="list" imageListUrl="" data={searchResults} isError={isError} isLoading={isLoading} />
        </ContainerComponent>
    )
})