export default {
    title: {
      text: 'Stacked Line',
      subtext:"子标题",
          //子标题带的链接，点击进入
          sublink:'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12',
          left: '50',
      top: 0,
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['Email', 'Union Ads']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },//切换成折线图或者饼图
        restore: {},//变完之后还原
        saveAsImage: {}//保存成图片
      }
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true//在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
      },
          axisLabel: {   //修改该轴线上的label
          rotate: 30//旋转30°
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {//对y轴的label进行格式修改
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: 'Email',
        type: 'bar',
        // smooth: true，让此数据折线图平滑
        // stack: 'Total',//让此数据数据堆叠
        emphasis: {
          focus: 'item'
        },
        showBackground: true,//柱状图每个柱本身后面的颜色
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        data: [120, {//对单个数据进行样式设定
            value: 200,
            itemStyle: {
              color: '#a90000'
            }
          }, 101, 134, 90, 230, 210],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },//对该email中所有数据中最大的进行标记
            { type: 'min', name: 'Min' }//对最小的进行标记
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]//该email中平均数据进行标记
        }
      },
      {
        name: 'Union Ads',
        type: 'bar',
        // stack: 'Total',
        emphasis: {
          focus: 'series'
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
    ]
  };