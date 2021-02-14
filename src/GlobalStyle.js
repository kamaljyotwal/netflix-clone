//Resetting styles and applying box-sizing {this is how its done in styled components}

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* ,
*::before,
*::after {
   box-sizing: border-box;
   padding:0;
   margin:0;
}`