import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {
  
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if(displayedMeals.length === 0){
    return (
      <View style={styles.content}>
        <DefaultText>No meals found</DefaultText>
        <DefaultText>Please change your filters</DefaultText>
      </View>
    );
  } else{
    return (
      <MealList listData={displayedMeals} navigation={props.navigation} />
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

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealScreen;
