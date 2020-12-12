"use strict";
var app = getApp();
var index = 0;
var wholePageIndex = 0;
var wholeVideoList = [];
var currentRenderIndex = 0;
var pageHeightArr = [];
Component({
    properties: {},
    data: {},
    methods: {
        setHeight: function () { },
        observePage: function () { },
        getVideoInfoData: function () {
            var _a;
            var arr = [
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
            this.setData((_a = {}, _a["list[" + wholePageIndex + "]"] = arr, _a));
        },
        onReachBottom: function () {
            console.log("onReachBottom");
            this.getVideoInfoData();
        },
        onScroll: function () {
            console.log('onScroll');
        }
    },
    lifetimes: {
        attached: function () {
            var _a;
            wx.getSystemInfo({
                success: function (res) {
                    var windowHeight = res.windowHeight;
                    windowHeight = windowHeight;
                },
            });
            var arr = [
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
            this.setData((_a = {}, _a["list[" + wholePageIndex + "]"] = arr, _a));
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUM3QixJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFFekIsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFLEVBQUU7SUFDZCxJQUFJLEVBQUUsRUFBRTtJQUNSLE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxjQUFhLENBQUM7UUFDekIsV0FBVyxFQUFFLGNBQWEsQ0FBQztRQUMzQixnQkFBZ0IsRUFBRTs7WUFDZixJQUFNLEdBQUcsR0FBRztnQkFDVjtvQkFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO2lCQUNiO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtpQkFDYjtnQkFDRDtvQkFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO2lCQUNiO2dCQUVEO29CQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtpQkFDYjtnQkFDRDtvQkFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO2lCQUNiO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtpQkFDYjtnQkFFRDtvQkFDRSxHQUFHLEVBQUUsS0FBSyxFQUFFO2lCQUNiO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxLQUFLLEVBQUU7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLEtBQUssRUFBRTtpQkFD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bj4oKTtcblxubGV0IGluZGV4ID0gMDtcbmxldCB3aG9sZVBhZ2VJbmRleCA9IDA7IC8vIOesrOWHoOWxj1xuY29uc3Qgd2hvbGVWaWRlb0xpc3QgPSBbXTtcbmNvbnN0IGN1cnJlbnRSZW5kZXJJbmRleCA9IDA7XG5jb25zdCBwYWdlSGVpZ2h0QXJyID0gW107XG5cbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHt9LFxuICBkYXRhOiB7fSxcbiAgbWV0aG9kczoge1xuICAgIHNldEhlaWdodDogZnVuY3Rpb24gKCkge30sXG4gICAgb2JzZXJ2ZVBhZ2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgIGdldFZpZGVvSW5mb0RhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICBjb25zdCBhcnIgPSBbXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG5cbiAgICAgICAgIHtcbiAgICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICAgfSxcblxuICAgICAgICAge1xuICAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgICB9LFxuXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgIH0sXG5cbiAgICAgICAgIHtcbiAgICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICAgfSxcbiAgICAgICBdO1xuICAgICAgIHdob2xlUGFnZUluZGV4ID0gd2hvbGVQYWdlSW5kZXggKyAxO1xuICAgICAgIHRoaXMuc2V0RGF0YSh7IFtcImxpc3RbXCIgKyB3aG9sZVBhZ2VJbmRleCArIFwiXVwiXTogYXJyIH0pO1xuICAgIH0sXG4gICAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVhY2hCb3R0b21cIik7XG4gICAgICAgdGhpcy5nZXRWaWRlb0luZm9EYXRhKCk7XG4gICAgfSxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25TY3JvbGwnKVxuICAgIH1cbiAgfSxcbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgbGV0IHsgd2luZG93SGVpZ2h0IH0gPSByZXM7XG4gICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFyciA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZHg6IGluZGV4KyssXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkeDogaW5kZXgrKyxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgaWR4OiBpbmRleCsrLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IFtcImxpc3RbXCIgKyB3aG9sZVBhZ2VJbmRleCArIFwiXVwiXTogYXJyIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdfQ==