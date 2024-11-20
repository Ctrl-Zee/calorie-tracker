import IconButton from '@/components/IconButton';
import { Text, View, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Index() {
  return (
    <View className='flex flex-1 items-center justify-center'>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <IconButton variant={'rounded'} onPress={() => alert('test')}>
        <MaterialCommunityIcons name='plus' size={24} />
      </IconButton>
    </View>
  );
}
