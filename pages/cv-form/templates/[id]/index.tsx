import Layout from '../../../../components/layout';
import { useSession } from 'next-auth/react';
import useNoSession from '../../../../helpers/useNoSession';
import TemplateA from '../../../../components/templates/template-a';
import TemplateB from '../../../../components/templates/template-b';
import TemplateC from '../../../../components/templates/template-c';
import TemplateD from '../../../../components/templates/template-d';
import React, { useState } from 'react';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

import { Button, ButtonContainer } from '../../../../helpers/button';
import useWindowWidth from '../../../../helpers/useWindowWidth';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  ThemeContainer,
  ThemeButton,
} from '../../../../components/themes/ThemeSwitching.styled';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../../components/themes/Global';
import { Theme } from '../../../../shared-types';
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from '../../../../components/themes/Theme.styled';
import CvNameModal from '../../../../components/cv-name/modal';
import { H3 } from '../../../../helpers/theme';
export default function TemplatePage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();
  const pdfExportComponent = React.useRef<PDFExport>(null);
  const container = React.useRef(null);

  const [selectedTheme, setSelectedTheme] = useState(light);
  const HandleThemeChange = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  useNoSession();
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const getFormValues = async () => {
    const response = await fetch(
      '/api/users/cv-form',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.ok) {
      const newData = await response.json();
      return newData;
    } else {
      return {};
    }
  };

  const width = useWindowWidth();

  return (
    <Layout>
      {session?.user && (
        <>
          <GlobalStyles
            name={''}
            colors={{
              primaryBackground: '',
              secondaryBackground: '',
              primaryTitle: '',
              secondayTitle: '',
              primaryBgTitle: '',
              secondayBgTitle: '',
              primaryText: '',
              secondaryText: '',
              border: '',
            }}
          />
          <TopContainer>
            <ButtonContainer>
              <Button onClick={exportPDFWithComponent}>Download as PDF</Button>

              <CvNameModal />
            </ButtonContainer>
          </TopContainer>
          <ContentContainer>
            <ThemeProvider theme={selectedTheme}>
              <ThemeHeader>Choose a theme</ThemeHeader>
              <ThemeContainer>
                <ThemeButton
                  className={`light ${selectedTheme === light ? 'active' : ''}`}
                  onClick={() => HandleThemeChange(light)}
                ></ThemeButton>
                <ThemeButton
                  className={`dark ${selectedTheme === dark ? 'active' : ''}`}
                  onClick={() => HandleThemeChange(dark)}
                ></ThemeButton>
                <ThemeButton
                  className={`blue ${selectedTheme === blue ? 'active' : ''}`}
                  onClick={() => HandleThemeChange(blue)}
                ></ThemeButton>
                <ThemeButton
                  className={`green ${selectedTheme === green ? 'active' : ''}`}
                  onClick={() => HandleThemeChange(green)}
                ></ThemeButton>
                <ThemeButton
                  className={`brown ${selectedTheme === brown ? 'active' : ''}`}
                  onClick={() => HandleThemeChange(brown)}
                ></ThemeButton>
                <ThemeButton
                  className={`pink ${selectedTheme === pink ? 'active' : ''}`}
                  onClick={() => HandleThemeChange(pink)}
                ></ThemeButton>
              </ThemeContainer>

              <PDFExport
                ref={pdfExportComponent}
                paperSize="A4"
                margin={0}
                scale={width > 600 ? 0.999 : 1.99}
                // fileName={`Report for ${new Date().getFullYear()}`}
              >
                <div ref={container}>
                  {id === 'template-a' && <TemplateA />}
                  {id === 'template-b' && <TemplateB />}
                  {id === 'template-c' && <TemplateC />}
                  {id === 'template-d' && <TemplateD />}
                </div>
              </PDFExport>
            </ThemeProvider>
          </ContentContainer>
          
            <EditForm>
              <Button onClick={() => router.push('/cv-form')}>Edit form</Button>
              </EditForm>
        </>
      )}
    </Layout>
  );
}

const EditForm = styled.div`
 display: flex;
 justify-content: center;
align-items: center;
`

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  margin-bottom: 20px;
`;

const ThemeHeader = styled(H3)`
  text-align: center;
  margin-bottom: 10px;
`;
