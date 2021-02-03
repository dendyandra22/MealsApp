import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if(favMeals.length === 0 || !favMeals){
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found</DefaultText>
        <DefaultText>Please adding some</DefaultText>
      </View>
    );
  } else{
    return (
      <MealList listData={favMeals} navigation={props.navigation} />
    );
  }
  

  
};

const styles = StyleSheet.create({
  content:{
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  }
})

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
