// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 获取设备信息
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systemInfo = res;
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },
});
