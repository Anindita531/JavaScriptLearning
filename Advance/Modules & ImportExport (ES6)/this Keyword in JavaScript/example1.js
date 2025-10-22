const car = {
  brand: "Tesla",
  showBrand: function() {
     console.log(this.brand);
  }
};
car.showBrand();