import React from 'react';
import styled from 'styled-components';
import {
    IconLookup,
    IconDefinition,
    findIconDefinition,
    library
  } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  // import { fab } from '@fortawesome/free-brands-svg-icons'
  import {
    faImages
  } from '@fortawesome/free-solid-svg-icons'
  
//   library.add(
//     fab,
//     faCoffee,
//     faCog,
//     faSpinner,
//     faQuoteLeft,
//     faSquare,
//     faCheckSquare
//   )

library.add(faImages)
const imagesLookup: IconLookup = { prefix: 'fas', iconName: 'images' }
const imagesIconDefinition: IconDefinition = findIconDefinition(imagesLookup)

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MyNavbar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'NavbarLink': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

interface INavbarProps {
    backgroundColor?: string;

}

const MyNavbar = styled.div`
    background-color: #46ACC2;
    display: flex;
    padding: 16px;
    font-family: sans-serif;
    color: white;
`;

const NavbarLink = styled.div`
    padding-left: 20px;
    display: flex;
`;

const NavbarTitle = styled.div`
    margin-top: 5px;
    margin-left: 10px;
    font-size: 14pt;
    font-weight: bold;
`;

export const Navbar = () => {
    return (
        <MyNavbar>
            <NavbarLink>
                <FontAwesomeIcon icon={imagesIconDefinition} size="2x" />
                <NavbarTitle>Images Gallery</NavbarTitle>
            </NavbarLink>
        </MyNavbar>
    )
}