const app = getApp<IAppOption>();

let index = 0;
let wholePageIndex = 0; // 第几屏
let wholeVideoList = []; // 所有屏的数据
let currentRenderIndex = 0; // 当前渲染的是哪一屏
let pageHeightArr = [];
let windowHeight: string; //当前屏幕的高度;

wholeVideoList: 用来装所有屏的数据;
currentRenderIndex: 当前正在渲染哪一屏;
pageHeightArr: 用来装每一屏的高度;
windowHeight: 当前屏幕的高度;

Component({
  properties: {},
  data: {},
  methods: {
    setHeight: function () {},
    observePage: function () {},
    getVideoInfoData: function () {
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
      wholePageIndex = wholePageIndex + 1;
      this.setData({ ["list[" + wholePageIndex + "]"]: arr });
    },
    onReachBottom: function () {
      console.log("onReachBottom");
      this.getVideoInfoData();
    },
    onScroll: function () {
      console.log("onScroll");
    },
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
      this.setData({ ["list[" + wholePageIndex + "]"]: arr });
    },
  },
});
