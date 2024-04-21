import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconClose: React.FC = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#0B2228"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 7 10 10M7 17 17 7"
    />
  </Svg>
);
export default IconClose;
