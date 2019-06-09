<template>
  <div>
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      style="height: 550rpx"
    >
    <block v-for="item in imgUrls" :key="item">
      <swiper-item>
        <image :src="item" style="width:100%;hight:100%"/>
      </swiper-item>
    </block>
  </swiper>
  <i-grid i-class="border">
      <i-grid-item @click="goList(item.url)" i-class="border" v-for="item in grids" :key="item">
          <i-grid-label>{{item.type}}</i-grid-label>
      </i-grid-item>
  </i-grid>
  <i-panel title="热门资源">
    <view>
      <i-card i-class="split" v-for="item in top" :key="item" :extra="item.name" :thumb="item.img">
          <view slot="footer">评价:{{item.evalu}}</view>
      </i-card>
    </view>
  </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      top: [],
      imgUrls: [
        'https://puui.qpic.cn/vcover_vt_pic/0/nilk5fd4bkqdk3a1557023984/350',
        'https://puui.qpic.cn/vcover_vt_pic/0/tmyhttuwxw9ifza1556087236/260',
        'https://puui.qpic.cn/vcover_vt_pic/0/zmfj41ian3z6rbl1543634205/260'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      grids: [
        {type: '美剧', 'url': '../list1/main'},
        {type: '英剧', 'url': '../list2/main'},
        {type: '日剧', 'url': '../list3/main'}
      ]
    }
  },

  components: {
    card
  },
  methods: {
    goList (url) {
      mpvue.navigateTo({ url })
    }
  },

  created () {
    const db = wx.cloud.database({env: 'data-1'})
    db.collection('data').get().then(
      res => {
        console.log(res.data)
        this.top = res.data
      }
    )
  }
}
</script>

<style scoped>
div >>> .border {
  border-width: 10pt;
}
div >>> .split {
  margin-bottom: 10pt;
}
div >>> .swiper {
  margin-left: 10pt;
  margin-right: 10pt;
}
</style>