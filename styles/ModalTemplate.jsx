import React from 'react';
import { styled } from 'styled-components';

function ModalTemplate({children}) {
    return (
        <FullSCreen>
            <Container>
                {children}
            </Container>
        </FullSCreen>
    );
}

const FullSCreen = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const Container = styled.View`
    margin-top: 10%;
    width: 80%;
    height: 70%;
    background-color: white;
    border-color: #002B85;
    border-width: 5px;
`

export default ModalTemplate;