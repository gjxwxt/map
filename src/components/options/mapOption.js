export default {
    title: {
      text: 'china',
    },
    tooltip:{},
    toolbox:{},
    // visualMap: {
    //   min: 800,
    //   max: 60000,
    //   text: ['High', 'Low'],
    //   realtime: false,
    //   // calculable: true,
    //   inRange: {
    //     color: ['lightskyblue', 'yellow', 'orangered']
    //   }
    // },
    series: [
      {
        name: '中国地图',
        type: 'map',
        map: 'china',//同 registerMap 方法的第一个参数一致
        // label: {
        //   show: true//每块的名字都会显示在所属的块上
        // },
        label:{
            color:'#fff',
            show:true
        },
        zoom:1.2,
        // itemStyle: {
        //     normal: {
        //         borderWidth: .5, //区域边框宽度
        //         borderColor: '#009fe8', //区域边框颜色
        //         areaColor: "#1a364b", //区域颜色
        //     },
        //     emphasis: {
        //         borderWidth: .5,
        //         borderColor: '#4b0082',
        //         areaColor: "#ffdead",
        //     }
        // },
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#1a364b", //区域颜色
            },
            emphasis: {
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#ffdead",
            }
        },
        // itemStyle:{
        //     areaColor:{
        //       type: "radial",
        //           x: 0.5,
        //           y: 0.5,
        //           r: 0.8,
        //           colorStops: [
        //             {
        //               offset: 0,
        //               color: "rgba(175,238,238, 0)", // 0% 处的颜色
        //             },
        //             {
        //               offset: 1,
        //               color: "rgba(47,79,79, .1)", // 100% 处的颜色
        //             },
        //           ],
        //           globalCoord: true, // 缺省为 false
        //     }
        // },
        roam: true,//能拖拽放大
        emphasis: {},
        //地图内部有各地区的名称，name和地区名一致时自动匹配，如果给的数据name和地图内部默认的name不一致
        //需要自定义名称映射nameMap{},key为地图默认name，value为我们自己数据的name
        // "data": [
        //     { "name": "北京", "value": 20057.34 },
        //     { "name": "天津", "value": 15477.48 },
        //     { "name": "河北", "value": 31686.1 },
        //     { "name": "山西", "value": 6992.6 },
        //     { "name": "内蒙古", "value": 44045.49 },
        //     { "name": "辽宁", "value": 40689.64 },
        //     { "name": "吉林", "value": 37659.78 },
        //     { "name": "黑龙江", "value": 45180.97 },
        //     { "name": "上海", "value": 55204.26 },
        //     { "name": "江苏", "value": 21900.9 },
        //     { "name": "浙江", "value": 4918.26 },
        //     { "name": "安徽", "value": 5881.84 },
        //     { "name": "福建", "value": 4178.01 },
        //     { "name": "江西", "value": 2227.92 },
        //     { "name": "山东", "value": 2180.98 },
        //     { "name": "河南", "value": 9172.94 },
        //     { "name": "湖北", "value": 3368 },
        //     { "name": "湖南", "value": 806.98 },
        //     { "name": "广东", "value": 806.98 },
        //     { "name": "广西", "value": 806.98 },
        //     { "name": "海南", "value": 806.98 },
        //     { "name": "重庆", "value": 806.98 },
        //     { "name": "四川", "value": 806.98 },
        //     { "name": "贵州", "value": 806.98 },
        //     { "name": "新疆", "value": 806.98 },
        //     { "name": "云南", "value": 806.98 },
        //     { "name": "西藏", "value": 806.98 },
        //     { "name": "陕西", "value": 806.98 },
        //     { "name": "甘肃", "value": 806.98 },
        //     { "name": "青海", "value": 806.98 },
        //     { "name": "宁夏", "value": 806.98 },
        //     { "name": "南海诸岛", "value": 806.98 },
        //     { "name": "台湾", "value": 806.98 },
        //   ]
        // 自定义名称映射
        // nameMap: {
        //   'Central and  Western': '中西区',
        //   Eastern: '东区',
        //   Islands: '离岛',
        //   'Kowloon City': '九龙城',
        //   'Kwai Tsing': '葵青',
        //   'Kwun Tong': '观塘',
        //   North: '北区',
        //   'Sai Kung': '西贡',
        //   'Sha Tin': '沙田',
        //   'Sham Shui Po': '深水埗',
        //   Southern: '南区',
        //   'Tai Po': '大埔',
        //   'Tsuen Wan': '荃湾',
        //   'Tuen Mun': '屯门',
        //   'Wan Chai': '湾仔',
        //   'Wong Tai Sin': '黄大仙',
        //   'Yau Tsim Mong': '油尖旺',
        //   'Yuen Long': '元朗'
        // }
      }
    ],
  }