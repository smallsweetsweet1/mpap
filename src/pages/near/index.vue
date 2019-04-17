<template>
  <div>
     <map
      id="map"
      longitude="114.347997"
      latitude="30.571331"
      scale="14"
      :controls="controls"
      @controltap="controltap($event)"
      :markers="markers"
      @markertap="markertap($event)"
      :polyline="polyline"
      @regionchange="regionchange($event)"
      show-location
      style="width: 100%; height: 100%;"
    ></map>
  </div>
</template>

<script>

export default {
  data: {
    markers: [{
      iconPath: '/static/images/3.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }]
  },

  methods: {
    regionchange (event) {
      console.log(event)
    },
    markertap (event) {
      console.log(event)
    },
    controltap (event) {
      console.log(event)
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style>
body,html{height:100%}
</style>
