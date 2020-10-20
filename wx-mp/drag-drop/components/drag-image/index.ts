const app = getApp<IAppOption>();

Component({
  properties: {},
  data: {
    images: [],
    imageWidth: 0,
    areaHeight: 0,
    coordinates: [], // images coordinate of point
    x: 0,
    y: 0,
    hidden: true,
    currentImg: "",
    currentIndex: 0,
  },
  methods: {
    computedImageWidth: function () {
      const windowWidth = app.globalData.systemInfo!.windowWidth;
      const width = windowWidth - 16;
      this.setData({
        imageWidth: (width - 16) / 3,
      });
    },

    computedAreaHeight: function () {
      wx.createSelectorQuery()
        .in(this)
        .select(".image-list")
        .boundingClientRect(
          (rect: WechatMiniprogram.BoundingClientRectResult) =>
            this.setData({
              areaHeight: rect.height,
            })
        )
        .exec();
    },

    computedCoordinates() {
      wx.createSelectorQuery()
        .in(this)
        .selectAll(".image-item")
        .fields(
          {
            dataset: true,
            rect: true,
          },
          (result) =>
            this.setData({
              coordinates: result as any,
            })
        )
        .exec();
    },

    addImage: function () {
      wx.chooseImage({
        count: 9 - this.data.images.length,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          let images = this.data.images as any;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            images.push(res.tempFilePaths[i]);
          }
          this.setData(
            {
              images,
            },
            () => this.computedAreaHeight()
          );
        },
        fail: (err) => console.log(err),
      });
    },

    deleteImage: function (e) {
      const index = e.target.dataset.index;
      const images = this.data.images;
      images.splice(index, 1);
      this.setData(
        {
          images,
        },
        () => this.computedAreaHeight()
      );
    },

    previewImage: function (e) {
      const index = e.target.dataset.index;
      const images = this.data.images;
      wx.previewImage({
        current: images[index],
        urls: images,
      });
    },

    handleLongPress: function (e) {
      this.computedCoordinates();
      this.setData({
        x: e.currentTarget.offsetLeft,
        y: e.currentTarget.offsetTop,
        currentImg: e.currentTarget.dataset.url,
        currentIndex: e.currentTarget.dataset.index,
        hidden: false,
        flag: true,
      });
    },

    handleTouchMove: function (e) {
      let { pageX: x, pageY: y } = e.touches[0];
      wx.createSelectorQuery()
        .in(this)
        .select(".image-list")
        .boundingClientRect(
          (rect: WechatMiniprogram.BoundingClientRectResult) => {
            y = y - rect.top;
            this.setData({
              x: x,
              y: y,
            });
          }
        )
        .exec();
    },

    handleTouchEnd: function (e) {
      let { pageX: x, pageY: y } = e.changedTouches[0];
      let { images, coordinates } = this.data;
      for (let i = 0; i < coordinates.length; i++) {
        const item = coordinates[i] as any;
        if (
          x > item.left &&
          x < item.right &&
          y > item.top &&
          y < item.bottom
        ) {
          const endIndex = item.dataset.index;
          const beginIndex = this.data.currentIndex;
          [images[beginIndex], images[endIndex]] = [
            images[endIndex],
            images[beginIndex],
          ];
        }
      }
      this.setData({
        images,
        hidden: true,
        currentImg: "",
      });
    },
  },
  lifetimes: {
    attached: function () {
      this.computedImageWidth();
    },
  },
});
