import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';

interface CircleButtonProps {
  imgUrl: ImageSourcePropType;
  handlePress?: any;
  right: number;
  top: number;
}

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...props
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
        // onPress = { handlePress },
      }}
    >
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
