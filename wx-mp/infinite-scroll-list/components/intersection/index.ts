Component({
  properties: {},
  data: {},
  methods: {},
  lifetimes: {
    attached: function () {
      const ob = wx.createIntersectionObserver(this);
      ob.relativeTo('.scroll-view').observe('.ball', res => {
        this.setData({
          appear: res.intersectionRatio > 0
        })
      });
    }
  },
});
