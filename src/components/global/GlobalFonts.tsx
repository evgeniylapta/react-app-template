import { createGlobalStyle } from 'styled-components'

import IvarDisplayRegularWoff from '../../styles/fonts/IvarDisplay-Regular.woff'
import IvarDisplayRegularWoff2 from '../../styles/fonts/IvarDisplay-Regular.woff2'

import IvarDisplayMediumWoff from '../../styles/fonts/IvarDisplay-Medium.woff'
import IvarDisplayMediumWoff2 from '../../styles/fonts/IvarDisplay-Medium.woff2'

import ATCArquetteExtralightWoff from '../../styles/fonts/ATCArquette-Extralight.woff'
import ATCArquetteExtralightWoff2 from '../../styles/fonts/ATCArquette-Extralight.woff2'

import ATCArquetteLightWoff from '../../styles/fonts/ATCArquette-Light.woff'
import ATCArquetteLightWoff2 from '../../styles/fonts/ATCArquette-Light.woff2'

import ATCArquetteRegularWoff from '../../styles/fonts/ATCArquette-Regular.woff'
import ATCArquetteRegularWoff2 from '../../styles/fonts/ATCArquette-Regular.woff2'

import ATCArquetteMediumWoff from '../../styles/fonts/ATCArquette-Medium.woff'
import ATCArquetteMediumWoff2 from '../../styles/fonts/ATCArquette-Medium.woff2'

import ATCArquetteSemiboldWoff from '../../styles/fonts/ATCArquette-Semibold.woff'
import ATCArquetteSemiboldWoff2 from '../../styles/fonts/ATCArquette-Semibold.woff2'

import ATCArquetteBoldWoff from '../../styles/fonts/ATCArquette-Bold.woff'
import ATCArquetteBoldWoff2 from '../../styles/fonts/ATCArquette-Bold.woff2'

import ATCArquetteBlackWoff from '../../styles/fonts/ATCArquette-Black.woff'
import ATCArquetteBlackWoff2 from '../../styles/fonts/ATCArquette-Black.woff2'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Ivar';
    src: local('Ivar Regular'), local('IvarRegular'),
    url(${IvarDisplayRegularWoff2}) format('woff2'),
    url(${IvarDisplayRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ivar';
    src: local('Ivar Medium'), local('IvarMedium'),
    url(${IvarDisplayMediumWoff2}) format('woff2'),
    url(${IvarDisplayMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'ATC Arquette';
    src: local('ATC Arquette Extralight'), local('ATCArquetteExtralight'),
    url(${ATCArquetteExtralightWoff2}) format('woff2'),
    url(${ATCArquetteExtralightWoff}) format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'ATC Arquette';
    src: local('ATC Arquette Light'), local('ATCArquetteLight'),
    url(${ATCArquetteLightWoff2}) format('woff2'),
    url(${ATCArquetteLightWoff}) format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: 'ATC Arquette';
    src: local('ATC Arquette Regular'), local('ATCArquetteRegular'),
    url(${ATCArquetteRegularWoff2}) format('woff2'),
    url(${ATCArquetteRegularWoff}) format('woff');
    font-weight: 400;
  }
    
  @font-face {
    font-family: 'ATC Arquette';
    src: local('ATC Arquette Medium'), local('ATCArquetteMedium'),
    url(${ATCArquetteMediumWoff2}) format('woff2'),
    url(${ATCArquetteMediumWoff}) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'ATC Arquette';
    src: local('ATC Arquette Semibold'), local('ATCArquetteSemibold'),
    url(${ATCArquetteSemiboldWoff2}) format('woff2'),
    url(${ATCArquetteSemiboldWoff}) format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'ATC Arquette';
    src: local('ATC Arquette Semibold'), local('ATCArquetteSemibold'),
    url(${ATCArquetteBoldWoff2}) format('woff2'),
    url(${ATCArquetteBoldWoff}) format('woff');
    font-weight: 700;
  }
  
  @font-face {
    font-family: 'ATC Arquette';
    src: local('ATC Arquette Semibold'), local('ATCArquetteSemibold'),
    url(${ATCArquetteBlackWoff2}) format('woff2'),
    url(${ATCArquetteBlackWoff}) format('woff');
    font-weight: 900;
  }
`

export default GlobalFonts
