<template>
  <div @click="clickHandle">
    <i-notice-bar v-if='show' icon="systemprompt" loop>
    {{notice}}啦啦啦啦
    </i-notice-bar>
    <i-grid i-class="no-border">
    <i-grid-item v-for="item in grids" :key="item" i-class="no-border">
    <i-grid-label>{{item}}</i-grid-label>
    </i-grid-item>
    </i-grid>
    <i-grid i-class="no-border">
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/images/1.png" />
        </i-grid-icon>
        <i-grid-label>lemon</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/images/2.png" />
        </i-grid-icon>
        <i-grid-label>banana</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/images/3.png" />
        </i-grid-icon>
        <i-grid-label>apple</i-grid-label>
    </i-grid-item>
</i-grid>
    <i-panel title="推荐">
      <view class="top-padding">
      <view v-for="item in a" :key="item"></view>
      <view class="top-padding">
      <i-card title="d" extra="d" thumb="cloud://got-1b.676f-got-1b/doge.png">
        <view slot="content">d</view>
        <view slot="footer">d</view>
      </i-card>
    </view>

      </view>
    </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      notice: '2019.04.03',
      grids: ['a', 'b'],
      show: true
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    const db = wx.cloud.database({ env: 'got-1b' })
    db.collection('got-fg3e3').get().then(
      res => {
        console.log(res.data)
        this.a = res.data
      }
    )
    /* wx.cloud.callFunction({ name: 'me' }).then(
      res => { console.log(res) }
    ) */
  }
}
</script>

<style scoped>
div >>> .no-border {
  border-width: 0pt;
}
div >>> .top-padding {
  padding-top: 50rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
