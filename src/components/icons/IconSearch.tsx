import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconSearch: React.FC = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#0B2228"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m20 20-3.86-3.86m0 0A7.112 7.112 0 1 0 6.08 6.08 7.112 7.112 0 0 0 16.14 16.14Z"
    />
  </Svg>
);
export default React.memo(IconSearch);