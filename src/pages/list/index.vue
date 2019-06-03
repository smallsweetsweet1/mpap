<template>
  <div>
    <i-panel>
      <view>
        <i-card i-class="split" v-for="item in recommand" :key="item" :extra="item.name" :thumb="item.img">
            <view slot="content">评分{{item.score}}</view>
            <view slot="footer">评价{{item.evalu}}</view>
        </i-card>
      </view>
    </i-panel>
  </div>
</template>

<script>

export default {

  data () {
    return {
      recommand: []
    }
  },

  onLoad: function (option) {
    this.setData({
      type: option.type
    })
    console.log(option.type)
  },

  created () {
    const db = wx.cloud.database({env: 'data-1'})
    db.collection('data').where({
      kind: this.setData
    })
      .get().then((res) => {
        console.log(res.data)
        this.top = res.data
      }
      )
  }
}
</script>

<style scoped>
div >>> .split {
  margin-bottom: 10pt;
}
</style>
