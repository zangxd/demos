Page({
  data: {
    list: [],
  },
  onLoad: function () {
    this.wholePageIndex = 0;
    this.wholeVideoList = [];
    this.currentRenderIndex = 0;
    this.index = 0;
    this.pageHeightArr = [];

    wx.getSystemInfo({
      success: (res) => {
        let { windowHeight } = res;
        this.windowHeight = windowHeight;
      },
    });

    const arr = [
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
    ];
    this.wholeVideoList[this.wholePageIndex] = arr;
    this.setData({ ["list[" + this.wholePageIndex + "]"]: arr }, () => {
      this.setHeight();
    });
  },

  setHeight: function () {
    const that = this;
    const wholePageIndex = this.wholePageIndex;
    this.query = wx.createSelectorQuery();
    this.query.select(`#wrp_${wholePageIndex}`).boundingClientRect();
    this.query.exec(function (res) {
      that.pageHeightArr[wholePageIndex] = res[0] && res[0].height;
    });
    this.observePage(wholePageIndex);
  },

  observePage: function (pageIndex) {
    const that = this;
    const { hasShowAlreadySaw, showMoreVideosIcon } = this.data;
    const observerObj = wx.createIntersectionObserver(this).relativeToViewport({
      top: 2 * this.windowHeight,
      bottom: 2 * this.windowHeight,
    });
    observerObj.observe(`#wrp_${pageIndex}`, (res) => {
      if (res.intersectionRatio <= 0) {
        that.setData({
          ["list[" + pageIndex + "]"]: {
            height: that.pageHeightArr[pageIndex],
          },
        });
      } else {
        that.setData({
          ["list[" + pageIndex + "]"]: that.wholeVideoList[pageIndex],
        });
      }
    });
  },

  getVideoInfoData: function () {
    const arr = [
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },
      {
        idx: this.index++,
      },

      {
        idx: this.index++,
      },
    ];
    this.wholePageIndex = this.wholePageIndex + 1;

    const wholePageIndex = this.wholePageIndex;
    this.currentRenderIndex = wholePageIndex;
    this.wholeVideoList[wholePageIndex] = arr;
    let datas = {};
    datas["list[" + wholePageIndex + "]"] = arr;

    this.setData(datas, () => {
      this.setHeight();
    });
  },

  /**
   * 页面下拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getVideoInfoData();
  },
});
