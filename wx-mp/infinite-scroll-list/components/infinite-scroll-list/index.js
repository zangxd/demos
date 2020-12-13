"use strict";
var app = getApp();
var index = 0;
var wholePageIndex = 0;
var wholeVideoList = [];
var currentRenderIndex = 0;
var pageHeightArr = [];
var windowHeight;
Component({
    properties: {},
    data: {},
    methods: {
        setHeight: function () {
            var query = wx.createSelectorQuery().in(this);
            query
                .select("#wrp_" + wholePageIndex)
                .boundingClientRect(function (res) {
                pageHeightArr[wholePageIndex] = res.height;
            })
                .exec();
            this.observePage(wholePageIndex);
        },
        observePage: function (pageIndex) {
            var that = this;
            var observerObj = wx
                .createIntersectionObserver(this)
                .relativeToViewport({
                top: 2 * windowHeight,
                bottom: 2 * windowHeight,
            });
            observerObj.observe("#wrp_" + pageIndex, function (res) {
                var _a, _b;
                if (res.intersectionRatio <= 0) {
                    that.setData((_a = {},
                        _a["list[" + pageIndex + "]"] = {
                            height: pageHeightArr[pageIndex],
                        },
                        _a));
                }
                else {
                    that.setData((_b = {},
                        _b["list[" + pageIndex + "]"] = wholeVideoList[pageIndex],
                        _b));
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
            var _this = this;
            var data = mockData();
            wholePageIndex += 1;
            currentRenderIndex = wholePageIndex;
            wholeVideoList[wholePageIndex] = data;
            var datas = {};
            var tempList = new Array(wholePageIndex + 1).fill(0);
            if (wholePageIndex > 2) {
                tempList.forEach(function (item, index) {
                    if (index < tempList.length - 2) {
                        tempList[index] = { height: pageHeightArr[index] };
                    }
                    else {
                        tempList[index] = wholeVideoList[index];
                    }
                });
                datas.list = tempList;
            }
            else {
                datas["list[" + wholePageIndex + "]"] = data;
            }
            this.setData(datas, function () {
                _this.setHeight();
            });
        },
    },
    lifetimes: {
        attached: function () {
            var _a;
            var _this = this;
            wx.getSystemInfo({
                success: function (res) {
                    windowHeight = res.windowHeight;
                },
            });
            this.setData((_a = {}, _a["list[" + wholePageIndex + "]"] = mockData(), _a), function () {
                _this.setHeight();
            });
        },
    },
});
var mockData = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQUksY0FBYyxHQUFRLEVBQUUsQ0FBQztBQUM3QixJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUMzQixJQUFJLGFBQWEsR0FBUSxFQUFFLENBQUM7QUFDNUIsSUFBSSxZQUFvQixDQUFDO0FBRXpCLFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBRSxFQUFFO0lBQ2QsSUFBSSxFQUFFLEVBQUU7SUFDUixPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUU7WUFDVCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsS0FBSztpQkFDRixNQUFNLENBQUMsVUFBUSxjQUFnQixDQUFDO2lCQUNoQyxrQkFBa0IsQ0FBQyxVQUFDLEdBQUc7Z0JBQ3RCLGFBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzdDLENBQUMsQ0FBQztpQkFDRCxJQUFJLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELFdBQVcsRUFBRSxVQUFVLFNBQVM7WUFDOUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQU0sV0FBVyxHQUFHLEVBQUU7aUJBQ25CLDBCQUEwQixDQUFDLElBQUksQ0FBQztpQkFDaEMsa0JBQWtCLENBQUM7Z0JBQ2xCLEdBQUcsRUFBRSxDQUFDLEdBQUcsWUFBWTtnQkFDckIsTUFBTSxFQUFFLENBQUMsR0FBRyxZQUFZO2FBQ3pCLENBQUMsQ0FBQztZQUNMLFdBQVcsQ0FB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U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUVEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFFRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFFRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcblxubGV0IGluZGV4ID0gMDtcbmxldCB3aG9sZVBhZ2VJbmRleCA9IDA7IC8vIOesrOWHoOWxj1xubGV0IHdob2xlVmlkZW9MaXN0OiBhbnkgPSBbXTsgLy8g5omA5pyJ5bGP55qE5pWw5o2uXG5sZXQgY3VycmVudFJlbmRlckluZGV4ID0gMDsgLy8g5b2T5YmN5riy5p+T55qE5piv5ZOq5LiA5bGPXG5sZXQgcGFnZUhlaWdodEFycjogYW55ID0gW107XG5sZXQgd2luZG93SGVpZ2h0OiBudW1iZXI7IC8v5b2T5YmN5bGP5bmV55qE6auY5bqmO1xuXG5Db21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7fSxcbiAgZGF0YToge30sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xuICAgICAgcXVlcnlcbiAgICAgICAgLnNlbGVjdChgI3dycF8ke3dob2xlUGFnZUluZGV4fWApXG4gICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QoKHJlcykgPT4ge1xuICAgICAgICAgIHBhZ2VIZWlnaHRBcnJbd2hvbGVQYWdlSW5kZXhdID0gcmVzLmhlaWdodDtcbiAgICAgICAgfSlcbiAgICAgICAgLmV4ZWMoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZVBhZ2Uod2hvbGVQYWdlSW5kZXgpO1xuICAgIH0sXG4gICAgb2JzZXJ2ZVBhZ2U6IGZ1bmN0aW9uIChwYWdlSW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXJPYmogPSB3eFxuICAgICAgICAuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcylcbiAgICAgICAgLnJlbGF0aXZlVG9WaWV3cG9ydCh7XG4gICAgICAgICAgdG9wOiAyICogd2luZG93SGVpZ2h0LFxuICAgICAgICAgIGJvdHRvbTogMiAqIHdpbmRvd0hlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICBvYnNlcnZlck9iai5vYnNlcnZlKGAjd3JwXyR7cGFnZUluZGV4fWAsIChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5pbnRlcnNlY3Rpb25SYXRpbyA8PSAwKSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgIFtcImxpc3RbXCIgKyBwYWdlSW5kZXggKyBcIl1cIl06IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0QXJyW3BhZ2VJbmRleF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBbXCJsaXN0W1wiICsgcGFnZUluZGV4ICsgXCJdXCJdOiB3aG9sZVZpZGVvTGlzdFtwYWdlSW5kZXhdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIH0sXG4gICAgb25TY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25TY3JvbGxcIik7XG4gICAgfSxcbiAgICBnZXREYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gbW9ja0RhdGEoKTtcbiAgICAgIHdob2xlUGFnZUluZGV4ICs9IDE7XG4gICAgICBjdXJyZW50UmVuZGVySW5kZXggPSB3aG9sZVBhZ2VJbmRleDtcbiAgICAgIHdob2xlVmlkZW9MaXN0W3dob2xlUGFnZUluZGV4XSA9IGRhdGE7XG4gICAgICBsZXQgZGF0YXM6IGFueSA9IHt9O1xuICAgICAgbGV0IHRlbXBMaXN0ID0gbmV3IEFycmF5KHdob2xlUGFnZUluZGV4ICsgMSkuZmlsbCgwKTtcbiAgICAgIGlmICh3aG9sZVBhZ2VJbmRleCA+IDIpIHtcbiAgICAgICAgdGVtcExpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPCB0ZW1wTGlzdC5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICB0ZW1wTGlzdFtpbmRleF0gPSB7IGhlaWdodDogcGFnZUhlaWdodEFycltpbmRleF0gfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcExpc3RbaW5kZXhdID0gd2hvbGVWaWRlb0xpc3RbaW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGFzLmxpc3QgPSB0ZW1wTGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzW2BsaXN0WyR7d2hvbGVQYWdlSW5kZXh9XWBdID0gZGF0YTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0RGF0YShkYXRhcywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldEhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgd2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXREYXRhKHsgW1wibGlzdFtcIiArIHdob2xlUGFnZUluZGV4ICsgXCJdXCJdOiBtb2NrRGF0YSgpIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcblxuXG5jb25zdCBtb2NrRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICBdO1xufTsiXX0=