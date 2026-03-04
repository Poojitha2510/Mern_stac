const stock = {
  name: "wipro",
  lastprice: 200,
  currprice: 250,
  growth:function(){
    console.log(this.currprice-this.lastprice)
  },
  growthper:function(){
    console.log(this.growth()*100/this.lastprice)
  }

}
stock.growth()
stock.growthper()


