import {Text, View} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { BuilderContentComponent } from '../../components/builder/BuilderContentComponent';

const Product = () => {
    const {product} = useLocalSearchParams();

    return (
        <View>
            <Text>Product: {product}</Text>
            <BuilderContentComponent/>
        </View>
    )
}

export default Product