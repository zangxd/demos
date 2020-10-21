
## 实现思路
借助小程序的 [movable-area](https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html) 和 [moveable-view](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html) 标签。

`moveable-area` 的最终高度是根据图片总高度决定，宽度是固定的 100%。

`moveable-view` 的宽高同图片一致，需动态设置，初始状态是隐藏的，图片长摁显示。图片长摁时，记录当前图片的 url 并赋值给 `moveable-view` 的image。

``` wxml
<movable-area class="movable-area" style="min-height:{{imageWidth}}px; height:{{areaHeight}}px">
    <view class="image-list">
        <view class="image-item" bindlongpress="handleLongPress" bindtouchend="handleTouchEnd" catchtouchmove="handleTouchMove" style="width:{{imageWidth}}px; height:{{imageWidth}}px" wx:for="{{images}}" wx:for-item="url" wx:key="url" data-url="{{url}}" data-index="{{index}}">
            <image src="{{url}}" mode="aspectFill" bindtap="previewImage" data-index="{{index}}" data-url="{{url}}" />
            <view class="index">{{index}}</view>
            <view class="close" bindtap="deleteImage" data-index="{{index}}">X</view>
        </view>
        <view class="add-button" bindtap="addImage" style="width:{{imageWidth}}px; height:{{imageWidth}}px" wx:if="{{images.length >= 0 && images.length < 9}}">
            +
        </view>
        <view style="width:{{imageWidth}}px" class="image-item image-placeholder" wx:if="{{images.length%3 === 1}}" />
    </view>
    <movable-view class="movable-view" style="width:{{imageWidth}}px; height:{{imageWidth}}px" hidden="{{hidden}}" x="{{x}}" y="{{y}}" direction="all"  out-of-bounds="false" damping="{{5000}}" friction="{{1}}">
        <image src="{{currentImg}}" wx:if="{{currentImg.length>0}}" />
    </movable-view>
</movable-area>
```

1. 在组件实例初始化后，计算一张图片的宽度，用于增加图片宽高和`moveable-area` 的高度。

```
 computedImageWidth: function () {
    const windowWidth = app.globalData.systemInfo!.windowWidth;
    const width = windowWidth - 16;
    this.setData({
      imageWidth: (width - 16) / 3,
    });
  },
```


2. 在图片上传后需要更新`moveable-area`的高度（即图片列表的高度）

```
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
```

如果组件中有涉及到图片删除的操作，需要在删除的时候也要更新下`moveable-area`的高度。

3. 图片拖拽的触发是通过 `longpress` 触发的，触发后需要计算下每张图片的坐标（便于后期替换图片的范围判断）、记录当前选中的图片在的下标、url，并显示 `moveable-view`，并设置其 x、y 值，将 url 赋值给其下的子元素。

```
handleLongPress: function (e) {
  this.computedCoordinates();
  this.setData({
    x: e.currentTarget.offsetLeft,
    y: e.currentTarget.offsetTop,
    currentImg: e.currentTarget.dataset.url,
    currentIndex: e.currentTarget.dataset.index,
    hidden: false,
    isLongPress: true,
  });
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

```

在拖动过程中需要监听 `moveable-view` 的 catchtouchmove 事件（如果用bindhtouchmove，页面有滚动条时，会引起页面滑动），e.touches[0].pageX和e.touches[0].pageY 是指的手指的坐标。通过设置 `moveable-view` 的 x、y 值，来实现图片的跟着手指一起移动。

```
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
```

通过监听 `moveable-view` 的 bindtouchend 事件，计算出当前的x,y值，从之前记录的图片坐标数组中比对，得出它移动到哪个位置，更新数组。

```
handleTouchEnd: function (e) {
  if (!this.data.isLongPress) {
    return;
  }
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
    isLongPress: false,
  });
},
```