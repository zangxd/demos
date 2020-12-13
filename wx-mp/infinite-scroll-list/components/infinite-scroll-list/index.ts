const app = getApp<IAppOption>();

let index = 0;
let wholePageIndex = 0; // 第几屏
let wholeVideoList: any = []; // 所有屏的数据
let currentRenderIndex = 0; // 当前渲染的是哪一屏
let pageHeightArr: any = [];
let windowHeight: number; //当前屏幕的高度;

Component({
  properties: {},
  data: {},
  methods: {
    setHeight: function () {
      const query = wx.createSelectorQuery().in(this);
      query
        .select(`#wrp_${wholePageIndex}`)
        .boundingClientRect((res) => {
          pageHeightArr[wholePageIndex] = res.height;
        })
        .exec();
      this.observePage(wholePageIndex);
    },
    observePage: function (pageIndex) {
      const that = this;
      const observerObj = wx
        .createIntersectionObserver(this)
        .relativeToViewport({
          top: 2 * windowHeight,
          bottom: 2 * windowHeight,
        });
      observerObj.observe(`#wrp_${pageIndex}`, (res) => {
        if (res.intersectionRatio <= 0) {
          that.setData({
            ["list[" + pageIndex + "]"]: {
              height: pageHeightArr[pageIndex],
            },
          });
        } else {
          that.setData({
            ["list[" + pageIndex + "]"]: wholeVideoList[pageIndex],
          });
        }
      });
    },
    onReachBottom: function () {
      this.getData();
    },
    onScroll: function () {
      console.log("onScroll");
    },
    getData: function () {
      const data = mockData();
      wholePageIndex += 1;
      currentRenderIndex = wholePageIndex;
      wholeVideoList[wholePageIndex] = data;
      let datas: any = {};
      let tempList = new Array(wholePageIndex + 1).fill(0);
      if (wholePageIndex > 2) {
        tempList.forEach((item, index) => {
          if (index < tempList.length - 2) {
            tempList[index] = { height: pageHeightArr[index] };
          } else {
            tempList[index] = wholeVideoList[index];
          }
        });
        datas.list = tempList;
      } else {
        datas[`list[${wholePageIndex}]`] = data;
      }
      this.setData(datas, () => {
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
      this.setData({ ["list[" + wholePageIndex + "]"]: mockData() }, () => {
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