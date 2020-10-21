"use strict";
var app = getApp();
Component({
    properties: {},
    data: {
        images: [],
        imageWidth: 0,
        areaHeight: 0,
        coordinates: [],
        x: 0,
        y: 0,
        hidden: true,
        currentImg: "",
        currentIndex: 0,
        isLongPress: false,
    },
    methods: {
        computedImageWidth: function () {
            var windowWidth = app.globalData.systemInfo.windowWidth;
            var width = windowWidth - 16;
            this.setData({
                imageWidth: (width - 16) / 3,
            });
        },
        computedAreaHeight: function () {
            var _this = this;
            wx.createSelectorQuery()
                .in(this)
                .select(".image-list")
                .boundingClientRect(function (rect) {
                return _this.setData({
                    areaHeight: rect.height,
                });
            })
                .exec();
        },
        computedCoordinates: function () {
            var _this = this;
            wx.createSelectorQuery()
                .in(this)
                .selectAll(".image-item")
                .fields({
                dataset: true,
                rect: true,
            }, function (result) {
                return _this.setData({
                    coordinates: result,
                });
            })
                .exec();
        },
        addImage: function () {
            var _this = this;
            wx.chooseImage({
                count: 9 - this.data.images.length,
                sizeType: ["compressed"],
                sourceType: ["album", "camera"],
                success: function (res) {
                    var images = _this.data.images;
                    for (var i = 0; i < res.tempFilePaths.length; i++) {
                        images.push(res.tempFilePaths[i]);
                    }
                    _this.setData({
                        images: images,
                    }, function () { return _this.computedAreaHeight(); });
                },
                fail: function (err) { return console.log(err); },
            });
        },
        deleteImage: function (e) {
            var _this = this;
            var index = e.target.dataset.index;
            var images = this.data.images;
            images.splice(index, 1);
            this.setData({
                images: images,
            }, function () { return _this.computedAreaHeight(); });
        },
        previewImage: function (e) {
            var index = e.target.dataset.index;
            var images = this.data.images;
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
                isLongPress: true,
            });
        },
        handleTouchMove: function (e) {
            var _this = this;
            var _a = e.touches[0], x = _a.pageX, y = _a.pageY;
            wx.createSelectorQuery()
                .in(this)
                .select(".image-list")
                .boundingClientRect(function (rect) {
                y = y - rect.top;
                _this.setData({
                    x: x,
                    y: y,
                });
            })
                .exec();
        },
        handleTouchEnd: function (e) {
            var _a;
            if (!this.data.isLongPress) {
                return;
            }
            var _b = e.changedTouches[0], x = _b.pageX, y = _b.pageY;
            var _c = this.data, images = _c.images, coordinates = _c.coordinates;
            for (var i = 0; i < coordinates.length; i++) {
                var item = coordinates[i];
                if (x > item.left &&
                    x < item.right &&
                    y > item.top &&
                    y < item.bottom) {
                    var endIndex = item.dataset.index;
                    var beginIndex = this.data.currentIndex;
                    _a = [
                        images[endIndex],
                        images[beginIndex],
                    ], images[beginIndex] = _a[0], images[endIndex] = _a[1];
                }
            }
            this.setData({
                images: images,
                hidden: true,
                currentImg: "",
                isLongPress: false,
            });
        },
    },
    lifetimes: {
        attached: function () {
            this.computedImageWidth();
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFLEVBQUU7SUFDZCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxDQUFDO1FBQ2IsVUFBVSxFQUFFLENBQUM7UUFDYixXQUFXLEVBQUUsRUFBRTtRQUNmLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDSixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxFQUFFO1FBQ2QsWUFBWSxFQUFFLENBQUM7UUFDZixXQUFXLEVBQUUsS0FBSztLQUNuQjtJQUNELE9BQU8sRUFBRTtRQUNQLGtCQUFrQixFQUFFO1lBQ2xCLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVyxDQUFDLFdBQVcsQ0FBQztZQUMzRCxJQUFNLEtBQUssR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7YUFDN0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELGtCQUFrQixFQUFFO1lBQUEsaUJBV25CO1lBVkMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO2lCQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNSLE1BQU0sQ0FBQyxhQUFhLENBQUM7aUJBQ3JCLGtCQUFrQixDQUNqQixVQUFDLElBQWdEO2dCQUMvQyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUN4QixDQUFDO1lBRkYsQ0FFRSxDQUNMO2lCQUNBLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELG1CQUFtQixFQUFu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LElBQUksQ0FBQyxHQUFHO29CQUNaLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUNmO29CQUNBLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNwQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDMUMsS0FBeUM7d0JBQ3ZDLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQyxVQUFVLENBQUM7cUJBQ25CLEVBSEEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFBLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFBLENBR25DO2lCQUNIO2FBQ0Y7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE1BQU0sUUFBQTtnQkFDTixNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsRUFBRTtnQkFDZCxXQUFXLEVBQUUsS0FBSzthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcblxuQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge30sXG4gIGRhdGE6IHtcbiAgICBpbWFnZXM6IFtdLFxuICAgIGltYWdlV2lkdGg6IDAsXG4gICAgYXJlYUhlaWdodDogMCxcbiAgICBjb29yZGluYXRlczogW10sIC8vIGltYWdlcyBjb29yZGluYXRlIG9mIHBvaW50XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICBjdXJyZW50SW1nOiBcIlwiLFxuICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICBpc0xvbmdQcmVzczogZmFsc2UsXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjb21wdXRlZEltYWdlV2lkdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gYXBwLmdsb2JhbERhdGEuc3lzdGVtSW5mbyEud2luZG93V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd1dpZHRoIC0gMTY7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbWFnZVdpZHRoOiAod2lkdGggLSAxNikgLyAzLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNvbXB1dGVkQXJlYUhlaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAgIC5pbih0aGlzKVxuICAgICAgICAuc2VsZWN0KFwiLmltYWdlLWxpc3RcIilcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChcbiAgICAgICAgICAocmVjdDogV2VjaGF0TWluaXByb2dyYW0uQm91bmRpbmdDbGllbnRSZWN0UmVzdWx0KSA9PlxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgYXJlYUhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5leGVjKCk7XG4gICAgfSxcblxuICAgIGNvbXB1dGVkQ29vcmRpbmF0ZXMoKSB7XG4gICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgICAgLmluKHRoaXMpXG4gICAgICAgIC5zZWxlY3RBbGwoXCIuaW1hZ2UtaXRlbVwiKVxuICAgICAgICAuZmllbGRzKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGFzZXQ6IHRydWUsXG4gICAgICAgICAgICByZWN0OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgKHJlc3VsdCkgPT5cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiByZXN1bHQgYXMgYW55LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuZXhlYygpO1xuICAgIH0sXG5cbiAgICBhZGRJbWFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogOSAtIHRoaXMuZGF0YS5pbWFnZXMubGVuZ3RoLFxuICAgICAgICBzaXplVHlwZTogW1wiY29tcHJlc3NlZFwiXSxcbiAgICAgICAgc291cmNlVHlwZTogW1wiYWxidW1cIiwgXCJjYW1lcmFcIl0sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBsZXQgaW1hZ2VzID0gdGhpcy5kYXRhLmltYWdlcyBhcyBhbnk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMudGVtcEZpbGVQYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW1hZ2VzLnB1c2gocmVzLnRlbXBGaWxlUGF0aHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldERhdGEoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNvbXB1dGVkQXJlYUhlaWdodCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycikgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkZWxldGVJbWFnZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuZGF0YS5pbWFnZXM7XG4gICAgICBpbWFnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2V0RGF0YShcbiAgICAgICAge1xuICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gdGhpcy5jb21wdXRlZEFyZWFIZWlnaHQoKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcHJldmlld0ltYWdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5kYXRhLmltYWdlcztcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IGltYWdlc1tpbmRleF0sXG4gICAgICAgIHVybHM6IGltYWdlcyxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVMb25nUHJlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLmNvbXB1dGVkQ29vcmRpbmF0ZXMoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHg6IGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0LFxuICAgICAgICB5OiBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wLFxuICAgICAgICBjdXJyZW50SW1nOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC51cmwsXG4gICAgICAgIGN1cnJlbnRJbmRleDogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgsXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgIGlzTG9uZ1ByZXNzOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxldCB7IHBhZ2VYOiB4LCBwYWdlWTogeSB9ID0gZS50b3VjaGVzWzBdO1xuICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAgIC5pbih0aGlzKVxuICAgICAgICAuc2VsZWN0KFwiLmltYWdlLWxpc3RcIilcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChcbiAgICAgICAgICAocmVjdDogV2VjaGF0TWluaXByb2dyYW0uQm91bmRpbmdDbGllbnRSZWN0UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB5ID0geSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAuZXhlYygpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaEVuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmlzTG9uZ1ByZXNzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB7IHBhZ2VYOiB4LCBwYWdlWTogeSB9ID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgIGxldCB7IGltYWdlcywgY29vcmRpbmF0ZXMgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGNvb3JkaW5hdGVzW2ldIGFzIGFueTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHggPiBpdGVtLmxlZnQgJiZcbiAgICAgICAgICB4IDwgaXRlbS5yaWdodCAmJlxuICAgICAgICAgIHkgPiBpdGVtLnRvcCAmJlxuICAgICAgICAgIHkgPCBpdGVtLmJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IGl0ZW0uZGF0YXNldC5pbmRleDtcbiAgICAgICAgICBjb25zdCBiZWdpbkluZGV4ID0gdGhpcy5kYXRhLmN1cnJlbnRJbmRleDtcbiAgICAgICAgICBbaW1hZ2VzW2JlZ2luSW5kZXhdLCBpbWFnZXNbZW5kSW5kZXhdXSA9IFtcbiAgICAgICAgICAgIGltYWdlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICBpbWFnZXNbYmVnaW5JbmRleF0sXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW1hZ2VzLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIGN1cnJlbnRJbWc6IFwiXCIsXG4gICAgICAgIGlzTG9uZ1ByZXNzOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG4gIGxpZmV0aW1lczoge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNvbXB1dGVkSW1hZ2VXaWR0aCgpO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdfQ==