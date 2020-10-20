"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var _this = this;
        wx.getSystemInfo({
            success: function (res) {
                _this.globalData.systemInfo = res;
            },
            fail: function (err) {
                console.log(err);
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFBUixpQkFVQztRQVJDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7fSxcbiAgb25MYXVuY2goKSB7XG4gICAgLy8g6I635Y+W6K6+5aSH5L+h5oGvXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5zeXN0ZW1JbmZvID0gcmVzO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==