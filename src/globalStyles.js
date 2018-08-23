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

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
