const utils = {

  findElementById: function(array, id) {
    return array.find(element => element.id === id)
  },

  findDishById: function(dishes, id) {
    return dishes.find(dish => dish.dish_id === id)
  },

  getCategoryByType: function(dataCategories, type) {
    return dataCategories.filter((category) => {
      return category.category_type === type
    })
  },

  getDishByTypeId: function(dishes, typeId) {
    return dishes.filter((dish) => {
      return dish.dish_type === typeId
    })
  }

}


export default utils