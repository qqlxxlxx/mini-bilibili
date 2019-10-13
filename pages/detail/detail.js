// pages/detail/detail.js
var jsonData = require('../../data/detailData.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
		videoInfo: null,
		othersList: [],
		commentData: null
  },
	
	//根据视频id获取视频详情
	/*getCurrentVideo(videoId) {
		let that = this;
		wx.request({
			url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=" + videoId,
			success(res) {
				if(res.data.code === 0) {
					that.setData({
						videoInfo: res.data.data.videoInfo
					})
					//console.log(that.videoInfo); //undefined?
				}
			}
		})
	},*/
  getCurrentVideo(videoId) {
    this.setData({
      videoInfo: jsonData.dataList.videoInfo[videoId]
    })
  },

	//获取推荐视频
	/*getOthersList(videoId) {
		let that = this;
		wx.request({
			url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=" + videoId,
			success(res) {
				if(res.data.code === 0) {
					that.setData({
						othersList: res.data.data.othersList
					})
				}
			}
		})
	},*/
  getOthersList(videoId) {
    this.setData({
      othersList: jsonData.dataList.othersList
    })
  },

	//获取评论
	/*getCommentData(videoId) {
		let that = this;
		wx.request({
			url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id" + videoId,
			success(res) {
				if(res.data.code === 0) {
					that.setData({
						commentData: res.data.data.commentData
					})
					// console.log(res);
				}
			}
		})
  },*/
  getCommentData(videoId) {
    this.setData({
      commentData: jsonData.dataList.commentData[videoId]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId = 'v' + options.id;
		this.getCurrentVideo(videoId);
		this.getOthersList(videoId);
		this.getCommentData(videoId);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
	
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})