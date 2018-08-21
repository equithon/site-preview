import { injectGlobal } from 'styled-components';
import SfProTextMediumOTF from "../static/fonts/SF-Pro-Text-Medium.otf";
import SfProTextRegularOTF from "../static/fonts/SF-Pro-Text-Regular.otf";
import SfProTextBoldOTF from "../static/fonts/SF-Pro-Text-Heavy.otf";


injectGlobal`
  @font-face {
    font-family: "SF Pro Text Medium";
    font-style: normal;
    font-weight: normal;
    src: url(${SfProTextMediumOTF}) format("opentype");
  }

  @font-face {
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: normal;
    src: url(${SfProTextRegularOTF}) format("opentype");
  }

  @font-face {
    font-family: "SF Pro Text Bold";
    font-style: bold;
    font-weight: bold;
    src: url(${SfProTextBoldOTF}) format("opentype");
  }
`;
