<template>
  <div>
    <view class="userinfo">
    <view class="userinfo-avatar">
    <open-data type="userAvatarUrl"></open-data>
    </view>
    <open-data type="userNickName"></open-data>
    </view>
    <i-panel title="分享视频">
      <i-input :value="name" @change="changeName($event)" title="名称" autofocus placeholder="请输入视频名称" maxlength="20" />
      <i-input :value="address" @change="changeScore($event)" title="视频评价" placeholder="评分：" maxlength="5" />
      <i-input :value="address" @change="changeAddress($event)" title="视频链接" placeholder="链接：" maxlength="200" />
    </i-panel>
    <i-button @click="handleClick" type="warning" size="default">分享</i-button>
  </div>
</template>

<script>

export default {

  data () {
    return {
      name: '',
      address: '',
      score: ''
    }
  },

  methods: {
    changeName (event) {
      this.name = event.mp.detail.detail.value
    },
    changeScore (event) {
      this.score = event.mp.detail.detail.value
    },
    changeAddress (event) {
      this.address = event.mp.detail.detail.value
    },
    handleClick () {
      if (this.name && this.score) {
        wx.showToast({
          title: '推荐了' + this.name,
          icon: 'success',
          duration: 2000
        })
        // TODO:将推荐数据提交到云数据库
      } else {
        wx.showToast({
          title: '信息不完整',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },

  created () {
  }
}
</script>

<style scoped>
.userinfo {
  position: relative;
  width: 750rpx;
  height: 320rpx;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.userinfo-avatar {
  overflow:hidden;
  display: block;
  width: 160rpx;
  height: 160rpx;
  margin: 20rpx;
  margin-top: 50rpx;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.tips {
  padding: 20pt;
  font-size: 10pt;
  color:darkorange;
}
</style>
