"use strict";
var app = getApp();
var index = 0;
var screenIndex = 0;
var allData = [];
var currentScreenIndex = 0;
var screenHeights = [];
var windowHeight;
Component({
    properties: {},
    data: {
        listData: [],
    },
    methods: {
        setHeight: function () {
            var query = wx.createSelectorQuery().in(this);
            query
                .select("#screen_" + screenIndex)
                .boundingClientRect(function (res) {
                screenHeights[screenIndex] = res.height;
            })
                .exec();
            this.observePage(screenIndex);
        },
        observePage: function (sIndex) {
            var _this = this;
            var ob = wx.createIntersectionObserver(this).relativeToViewport({
                top: 2 * windowHeight,
                bottom: 2 * windowHeight,
            });
            ob.observe("#screen_" + sIndex, function (res) {
                var _a, _b;
                if (res.intersectionRatio <= 0) {
                    _this.setData((_a = {},
                        _a["listData[" + sIndex + "]"] = {
                            height: screenHeights[sIndex],
                        },
                        _a));
                }
                else {
                    _this.setData((_b = {},
                        _b["listData[" + sIndex + "]"] = allData[sIndex],
                        _b));
                }
            });
        },
        onReachBottom: function () {
            this.getData();
        },
        getData: function () {
            var _this = this;
            var ary = mockData();
            screenIndex += 1;
            currentScreenIndex = screenIndex;
            allData[screenIndex] = ary;
            var data = {};
            var tempList = new Array(screenIndex + 1).fill(0);
            if (screenIndex > 2) {
                tempList.forEach(function (item, index) {
                    if (index < tempList.length - 2) {
                        tempList[index] = { height: screenHeights[index] };
                    }
                    else {
                        tempList[index] = allData[index];
                    }
                });
                data.listData = tempList;
            }
            else {
                data["listData[" + screenIndex + "]"] = ary;
            }
            this.setData(data, function () {
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
            var arr = mockData();
            allData[screenIndex] = arr;
            this.setData((_a = {}, _a["listData[" + screenIndex + "]"] = arr, _a), function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLElBQUksT0FBTyxHQUFVLEVBQUUsQ0FBQztBQUN4QixJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUMzQixJQUFJLGFBQWEsR0FBYSxFQUFFLENBQUM7QUFDakMsSUFBSSxZQUFvQixDQUFDO0FBRXpCLFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBRSxFQUFFO0lBQ2QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRTtZQUNULElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxLQUFLO2lCQUNGLE1BQU0sQ0FBQyxhQUFXLFdBQWEsQ0FBQztpQkFDaEMsa0JBQWtCLENBQUMsVUFBQyxHQUFHO2dCQUN0QixhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxDQUFDLENBQUM7aUJBQ0QsSUFBSSxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxXQUFXLEVBQUUsVUFBVSxNQUFjO1lBQXhCLGlCQWtCWjtZQWpCQyxJQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2hFLEdBQUcsRUFBRSxDQUFDLEdBQUcsWUFBWTtnQkFDckIsTUFBTSxFQUFFLENBQUMsR0FBRyxZQUFZO2FBQ3pCLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBVyxNQUFRLEVBQUUsVUFBQyxHQUFHOztnQkFDbEMsSUFBSSxHQUFHLENBQUMsaUJBQWlCLElBQUksQ0FBQyxFQUFFO29CQUM5QixLQUFJLENBQUMsT0FBTzt3QkFDVixHQUFDLFdBQVcsR0FBRyxNQUFNLEdBQUcsR0FBRyxJQUFHOzRCQUM1QixNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQzt5QkFDOUI7NEJBQ0QsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsT0FBTzt3QkFDVixHQUFDLFdBQVcsR0FBRyxNQUFNLEdBQUcsR0FBRyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQzdDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUNELE9BQU8sRUFBRTtZQUFBLGlCQXNCUjtZQXJCQyxJQUFNLEdBQUcsR0FBRyxRQUFRLEVBQUUsQ0FBQztZQUN2QixXQUFXLElBQUksQ0FBQyxDQUFDO1lBQ2pCLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztZQUNqQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzNCLElBQUksSUFBSSxHQUF3QixFQUFFLENBQUM7WUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztvQkFDM0IsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztxQkFDcEQ7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbEM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQVksV0FBVyxNQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDeEM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFOztZQUFBLGlCQVdUO1lBVkMsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDZixPQUFPLEVBQUUsVUFBQyxHQUFHO29CQUNYLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUNsQyxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsSUFBTSxHQUFHLEdBQUcsUUFBUSxFQUFFLENBQUM7WUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxXQUFHLEdBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLElBQUcsR0FBRyxPQUFJO2dCQUN2RCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFNLFFBQVEsR0FBRztJQUNmLE9BQU87UUFDTDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUVEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFFRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBRUQ7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7UUFDRDtZQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDYjtRQUNEO1lBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtTQUNiO1FBRUQ7WUFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQ2I7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XG5cbmxldCBpbmRleCA9IDA7IC8vIGRhdGEgaW5kZXhcbmxldCBzY3JlZW5JbmRleCA9IDA7IC8vIHNjcmVlbiBpbmRleFxubGV0IGFsbERhdGE6IGFueVtdID0gW107IC8vIGFsbCBkYXRhXG5sZXQgY3VycmVudFNjcmVlbkluZGV4ID0gMDsgLy8gY3VycmVudCByZW5kZXIgc2NyZWVuIGluZGV4XG5sZXQgc2NyZWVuSGVpZ2h0czogbnVtYmVyW10gPSBbXTsgLy8gc2NyZWVuIGhlaWdodCBsaXN0XG5sZXQgd2luZG93SGVpZ2h0OiBudW1iZXI7IC8vIGN1cnJlbnQgc2NyZWVuIGhlaWdodFxuXG5Db21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7fSxcbiAgZGF0YToge1xuICAgIGxpc3REYXRhOiBbXSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNldEhlaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XG4gICAgICBxdWVyeVxuICAgICAgICAuc2VsZWN0KGAjc2NyZWVuXyR7c2NyZWVuSW5kZXh9YClcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVzKSA9PiB7XG4gICAgICAgICAgc2NyZWVuSGVpZ2h0c1tzY3JlZW5JbmRleF0gPSByZXMuaGVpZ2h0O1xuICAgICAgICB9KVxuICAgICAgICAuZXhlYygpO1xuICAgICAgdGhpcy5vYnNlcnZlUGFnZShzY3JlZW5JbmRleCk7XG4gICAgfSxcbiAgICBvYnNlcnZlUGFnZTogZnVuY3Rpb24gKHNJbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBvYiA9IHd4LmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMpLnJlbGF0aXZlVG9WaWV3cG9ydCh7XG4gICAgICAgIHRvcDogMiAqIHdpbmRvd0hlaWdodCxcbiAgICAgICAgYm90dG9tOiAyICogd2luZG93SGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBvYi5vYnNlcnZlKGAjc2NyZWVuXyR7c0luZGV4fWAsIChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5pbnRlcnNlY3Rpb25SYXRpbyA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIFtcImxpc3REYXRhW1wiICsgc0luZGV4ICsgXCJdXCJdOiB7XG4gICAgICAgICAgICAgIGhlaWdodDogc2NyZWVuSGVpZ2h0c1tzSW5kZXhdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgW1wibGlzdERhdGFbXCIgKyBzSW5kZXggKyBcIl1cIl06IGFsbERhdGFbc0luZGV4XSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICB9LFxuICAgIGdldERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGFyeSA9IG1vY2tEYXRhKCk7XG4gICAgICBzY3JlZW5JbmRleCArPSAxO1xuICAgICAgY3VycmVudFNjcmVlbkluZGV4ID0gc2NyZWVuSW5kZXg7XG4gICAgICBhbGxEYXRhW3NjcmVlbkluZGV4XSA9IGFyeTtcbiAgICAgIGxldCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICBsZXQgdGVtcExpc3QgPSBuZXcgQXJyYXkoc2NyZWVuSW5kZXggKyAxKS5maWxsKDApO1xuICAgICAgaWYgKHNjcmVlbkluZGV4ID4gMikge1xuICAgICAgICB0ZW1wTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA8IHRlbXBMaXN0Lmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgIHRlbXBMaXN0W2luZGV4XSA9IHsgaGVpZ2h0OiBzY3JlZW5IZWlnaHRzW2luZGV4XSB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wTGlzdFtpbmRleF0gPSBhbGxEYXRhW2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLmxpc3REYXRhID0gdGVtcExpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhW2BsaXN0RGF0YVske3NjcmVlbkluZGV4fV1gXSA9IGFyeTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0RGF0YShkYXRhLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICB3aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBhcnIgPSBtb2NrRGF0YSgpO1xuICAgICAgYWxsRGF0YVtzY3JlZW5JbmRleF0gPSBhcnI7XG4gICAgICB0aGlzLnNldERhdGEoeyBbXCJsaXN0RGF0YVtcIiArIHNjcmVlbkluZGV4ICsgXCJdXCJdOiBhcnIgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldEhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBtb2NrRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG4gICAge1xuICAgICAgaWR4OiBpbmRleCsrLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcbiAgICB7XG4gICAgICBpZHg6IGluZGV4KyssXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkeDogaW5kZXgrKyxcbiAgICB9LFxuICBdO1xufTtcbiJdfQ==