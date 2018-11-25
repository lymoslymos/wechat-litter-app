
Page({
  data: {

  },
  scanCode: function(){
    wx.scanCode({
      success: function(res){
        console.log(res)
      }
    })
  }
})