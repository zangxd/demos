const app = getApp<IAppOption>();

let index = 0;
const wholePageIndex = 0;
const wholeVideoList = [];
const currentRenderIndex = 0;
const pageHeightArr = [];

Component({
  properties: {},
  data: {},
  methods: {
    setHeight: function () {},
    observePage: function () {},
    getVideoInfoData: function () {},
    onScroll: function() {}
  },
  lifetimes: {
    attached: function () {
      wx.getSystemInfo({
        success: (res) => {
          let { windowHeight } = res;
          windowHeight = windowHeight;
        },
      });

      const arr = [
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },

        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },

        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },

        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },
        {
          idx: index++,
        },

        {
          idx: index++,
        },
      ];
      wholeVideoList[wholePageIndex] = arr;
      this.setData({ ["list[" + wholePageIndex + "]"]: arr }, () => {
        this.setHeight();
      });
    },
  },
});
