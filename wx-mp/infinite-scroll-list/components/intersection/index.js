"use strict";
Component({
    properties: {},
    data: {},
    methods: {},
    lifetimes: {
        attached: function () {
            var _this = this;
            var ob = wx.createIntersectionObserver(this);
            ob.relativeTo('.scroll-view').observe('.ball', function (res) {
                console.log(res);
                _this.setData({
                    appear: res.intersectionRatio > 0
                });
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFLEVBQUU7SUFDZCxJQUFJLEVBQUUsRUFBRTtJQUNSLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQUEsaUJBUVQ7WUFQQyxJQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxNQUFNLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUM7aUJBQ2xDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge30sXG4gIGRhdGE6IHt9LFxuICBtZXRob2RzOiB7fSxcbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IG9iID0gd3guY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcyk7XG4gICAgICBvYi5yZWxhdGl2ZVRvKCcuc2Nyb2xsLXZpZXcnKS5vYnNlcnZlKCcuYmFsbCcsIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYXBwZWFyOiByZXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==