Page({
  data: {},
  genMap: function(){
    var context = wx.createMapContext('mymap', this);
    // map 上下文对象
    console.log(context)
  }
})