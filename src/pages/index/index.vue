<template>
  <div>
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
    <block v-for="item in imgUrls" :key="item">
      <swiper-item>
        <image :src="item" style="width:100%;"/>
      </swiper-item>
    </block>
  </swiper>
  <i-grid i-class="no-border">
      <i-grid-item @click="goList(item.url)" i-class="no-border" v-for="item in grids" :key="item">
          <i-grid-icon>
              <image :src="item.img" />
          </i-grid-icon>
          <i-grid-label>{{item.type}}</i-grid-label>
      </i-grid-item>
  </i-grid>
  <i-panel title="热门资源">
    <view>
      <i-card @click="goType(item.type)" i-class="split" v-for="item in recommand" :key="item" :extra="item.name" :thumb="item.img">
          <view slot="content">简介{{item.remark}}</view>
          <view slot="footer">链接{{item.address}}</view>
      </i-card>
    </view>
  </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'
import top from '@/data/top.json'

export default {
  data () {
    return {
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
        {type: '美剧', 'url': '../list/main?type=1'},
        {type: '英剧', 'url': '../list/main?type=2'},
        {type: '日剧', 'url': '../list/main?type=3'}
      ],
      recommand: top
    }
  },

  components: {
    card
  },

  methods: {
    goList (url) {
      mpvue.navigateTo({ url })
    },
    goType (type) {
      let url = '../list/main?type=' + type
      mpvue.navigateTo({ url })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>div >>> .no-border {
  border-width: 0pt;
}
div >>> .split {
  margin-bottom: 10pt;
}
</style>