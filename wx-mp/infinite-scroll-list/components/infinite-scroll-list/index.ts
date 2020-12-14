const app = getApp<IAppOption>();

let index = 0; // data index
let screenIndex = 0; // screen index
let allData: any[] = []; // all data
let currentScreenIndex = 0; // current render screen index
let screenHeights: number[] = []; // screen height list
let windowHeight: number; // current screen height

Component({
  properties: {},
  data: {
    listData: [],
  },
  methods: {
    setHeight: function () {
      const query = wx.createSelectorQuery().in(this);
      query
        .select(`#screen_${screenIndex}`)
        .boundingClientRect((res) => {
          screenHeights[screenIndex] = res.height;
        })
        .exec();
      this.observePage(screenIndex);
    },
    observePage: function (sIndex: number) {
      const ob = wx.createIntersectionObserver(this).relativeToViewport({
        top: 2 * windowHeight,
        bottom: 2 * windowHeight,
      });
      ob.observe(`#screen_${sIndex}`, (res) => {
        if (res.intersectionRatio <= 0) {
          this.setData({
            ["listData[" + sIndex + "]"]: {
              height: screenHeights[sIndex],
            },
          });
        } else {
          this.setData({
            ["listData[" + sIndex + "]"]: allData[sIndex],
          });
        }
      });
    },
    onReachBottom: function () {
      this.getData();
    },
    getData: function () {
      const ary = mockData();
      screenIndex += 1;
      currentScreenIndex = screenIndex;
      allData[screenIndex] = ary;
      let data: Record<string, any> = {};
      let tempList = new Array(screenIndex + 1).fill(0);
      if (screenIndex > 2) {
        tempList.forEach((item, index) => {
          if (index < tempList.length - 2) {
            tempList[index] = { height: screenHeights[index] };
          } else {
            tempList[index] = allData[index];
          }
        });
        data.listData = tempList;
      } else {
        data[`listData[${screenIndex}]`] = ary;
      }
      this.setData(data, () => {
        this.setHeight();
      });
    },
  },
  lifetimes: {
    attached: function () {
      wx.getSystemInfo({
        success: (res) => {
          windowHeight = res.windowHeight;
        },
      });
      const arr = mockData();
      allData[screenIndex] = arr;
      this.setData({ ["listData[" + screenIndex + "]"]: arr }, () => {
        this.setHeight();
      });
    },
  },
});

const mockData = () => {
  return [
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
};
