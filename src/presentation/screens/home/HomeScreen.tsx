import { View } from 'react-native'
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()  

  return (
    <View style={ globalStyles.container }>
      <HamburgerMenu />
      <PrimaryButton
        label="Products"
        onPress={ () => navigation.navigate('Products') }
      />

      <PrimaryButton
        label="Settings"
        onPress={ () => navigation.navigate('Settings') }
      />
    </View>
  )
}
