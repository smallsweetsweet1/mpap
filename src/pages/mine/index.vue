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
      <i-input :value="score" @change="changeScore($event)" title="视频评价" placeholder="评分：" maxlength="5" />
      <i-input :value="link" @change="changeLink($event)" title="视频链接" placeholder="链接：" maxlength="200" />
    </i-panel>
    <i-button @click="handleClick" type="warning" size="default">分享</i-button>
    <i-toast id="toast"/>
  </div>
</template>

<script>
const { $Toast } = require('../../../static/dist/base/index')
export default {

  data () {
    return {
      name: '',
      link: '',
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
    changeLink (event) {
      this.link = event.mp.detail.detail.value
    },
    handleClick () {
      if (this.name && this.score && this.link) {
        let event = {
          name: this.name,
          score: this.score,
          link: this.link
        }
        wx.cloud.callFunctiopn({ name: 'new_video', data: event }).then(
          res => {
            console.log(res)
          }
        )
        $Toast({
          content: '数据已提交',
          type: 'success'
        })
      } else {
        $Toast({
          content: '数据不完整',
          type: 'warning'
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
