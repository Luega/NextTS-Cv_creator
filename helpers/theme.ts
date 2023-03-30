import styled from 'styled-components'

export const colors = {
    light: '#edf7ff',
    dark: '#063B8A',
    transparent: 'rgba(255,255,255,0.4)',
}

export const mediaScreen = {
    small: '600px',
}

export const H1 = styled.h1`
    color: ${colors.dark};
    font-weight: 700;
    font-size: 40px;
    margin: 20px;
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: 450px) {
        font-size: 26px;
        margin: 10px;
        margin-bottom: 20px;
    }
`
export const H2 = styled.h2`
    color: ${colors.dark};
    font-weight: 700;
    font-size: 32px;
    margin: 20px;
    text-align: center;

    @media (max-width: 450px) {
        font-size: 20px;
        margin: 10px;
    }
`

export const Text = styled.p`
    color: ${colors.dark};
    font-weight: 400;
    font-size: 16px;
`

export const Sphere = styled.div`
display: block;
width: 1500px;
height: 800px;
position: absolute;
bottom: -300px;
right: -150px;
border-radius: 50%;
background-color: rgb(148,178,240);
box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.03);
background-image: linear-gradient(
  -120deg,
  rgba(255, 255, 220, 0.3) 0%,
  transparent 100%);
  z-index: -1;
);

@media (max-height: ${mediaScreen.small}) {
  width: 1000px;
  height: 800px;
}
`;
