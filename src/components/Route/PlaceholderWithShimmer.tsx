import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GradientShimmer from 'react-native-gradient-shimmer';
import {colors} from '../../globalStyles/globalColors.tsx';

interface PlaceholderWithShimmerProps {
  height?: number;
  width?: number;
  style?: any;
}

const PlaceholderWithShimmer: FC<PlaceholderWithShimmerProps> = ({
  height,
  width,
  style,
}) => {
  return (
    <GradientShimmer
      LinearGradientComponent={LinearGradient}
      backgroundColor={colors.lightSurface}
      highlightColor={colors.secondaryContainer}
      height={height}
      width={width}
      style={style}
    />
  );
};

export default PlaceholderWithShimmer;
