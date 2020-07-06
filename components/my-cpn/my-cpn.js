// components/my-cpn/my-cpn.js
Component({
  //定义组件的配置选项
  //multipleSlots：在使用多插槽时，需要设置为true
  //styleIsolation：设置样式的隔离方式
  options: {
    // styleIsolation: 'apply-shared'
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   * 让使用者给组件传入数据
   */
  properties: {
    title: {
      type: String,
      value: '请输入标题',
      observer: function(newVal, oldVal){
        console.log('title改变了')
      }
    },
    content: {
      type: String,
      value: '请输入内容'
    },
    myBnts: {
      type: Array,
      value: [],
      observer: function(newVal,oldVal) {
        // console.log(newVal,oldVal)
      }
    }
  },
  //外界给组件传入多余的样式
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    // title: "我是自定义组建的标题",
    // content: '我是自定义组件的内容'
    currentIndex: 0,
    account: 0
  },
  //可以监听properties和data的改变
  observes:{
    account: function() {

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      this.triggerEvent('incrementNum',{},{})
    },
    changeTab(e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('clickItem',{e: e},{})
    },
    OutputEvent() {
      console.log('OutputEvent');
    }
  },
  // 组件中监听生命周期函数
  //1、监听所在页面的生命周期
  pageLifetimes: {
    //监听组件所在页面的显示
    show(){},
    //监听组件所在页面隐藏起来时
    hide(){},
    //监听组件所在页面的尺寸改变
    resize(){}
  },
  //2、监听组件本身的生命周期
  lifetimes: {
    //监听组件创建的时候
    created(){},
    // 监听组件被添加到页面中
    attached(){},
    //监听组件被渲染出来
    ready(){},
    //监听组件被移动到另外一个节点位置下
    moved(){},
    //监听组件被移除
    detached(){} 
  }
})
