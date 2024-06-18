import {Text, View} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { BuilderContentComponent } from '../../components/builder/BuilderContentComponent';

const Category = () => {
    const { category } = useLocalSearchParams();

    return (
        <View>
            <Text>Category: {category}</Text>
            <BuilderContentComponent/>
        </View>
    )
}

export default Category