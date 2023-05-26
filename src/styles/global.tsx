'use client'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  //-------------- glogal
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //-------------- root
  :root{
    font-size: 62.5%;
  }

  //-------------- body and tags
  body {
    background-color: #000000;
    color: #D3D3D3;
    -webkit-font-smoothing: antialised;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`

// -------------- theme color
export const darkTheme = {
  purple: '#7C05F2',
  rose: '#FE6D79',
  yellow: '#FFC03C',
  green: '#00C39A',

  textColor: '#F5F5F5',
  textColorSoft: '#D3D3D3',
  placeholder: '#b9b9b9',

  links: '#202020',
  bg: '#000000',
  bgSoft: '#151515',
}
