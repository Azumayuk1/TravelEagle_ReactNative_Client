import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconDate = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      fill="#40484C"
      fillRule="evenodd"
      d="M12.667 2.667H12V1.333h-1.333v1.334H5.333V1.333H4v1.334h-.667C2.593 2.667 2 3.267 2 4v9.333c0 .734.593 1.334 1.333 1.334h9.334c.733 0 1.333-.6 1.333-1.334V4c0-.733-.6-1.333-1.333-1.333Zm0 10.666H3.333V6h9.334v7.333ZM4.333 8.667a1.667 1.667 0 1 1 3.335 0 1.667 1.667 0 0 1-3.335 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconDate;
