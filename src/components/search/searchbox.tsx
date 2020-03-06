import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    height: 40px;
    background-color: #FFFFFF;
    display: flex;
    margin-left: 15px;
`;

const TextBoxContainer = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid #46ACC2;
    border-radius: 5px;
    display: flex;

    @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
    }
`;

const TextBox = styled.input`
    width: 100%;
    height: 28px;
    font-size: 14pt;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 3px;
    border: 0px;

    @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
        font-size: 14pt;
        margin-left: 5px;
        margin-top: 5px;
        margin-bottom: 3px;
    }
`;

interface ITextboxProps {
    TextChanged: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox = (props: ITextboxProps) => {
    return (
        <SearchContainer>
            <TextBoxContainer>
                <TextBox placeholder="Search..." onChange={e => props.TextChanged(e)} />
            </TextBoxContainer>
        </SearchContainer>
        
    )
}