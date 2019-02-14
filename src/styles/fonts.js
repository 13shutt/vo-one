import { injectGlobal } from 'styled-components'
import HelveticaNeueCyrBold from '../assets/fonts/HelveticaNeueCyr-Black.ttf'
import HelveticaNeueCyrMedium from '../assets/fonts/HelveticaNeueCyr-Medium.ttf'
import HelveticaNeueCyrLight from 'assets/fonts/HelveticaNeueCyr-Light.ttf'

const fonts = () => {
  injectGlobal`
    @font-face {
      font-family: "HelveticaNeueCyrBold";
      src: url(${HelveticaNeueCyrBold});
    }
    @font-face {
      font-family: "HelveticaNeueCyrMedium";
      src: url(${HelveticaNeueCyrMedium});
    }
    @font-face {
      font-family: "HelveticaNeueCyrLight";
      src: url(${HelveticaNeueCyrLight});
    } 
  `
}

export default fonts