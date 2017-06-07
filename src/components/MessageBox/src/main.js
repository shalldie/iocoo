import Vue from 'vue';
import MessageBoxMain from './main.vue';  // .vue文件返回的对象

let MessageBoxConstructor = Vue.extend(MessageBoxMain);  // 获取该对象的构造函数

// z-index 值，用来保证当多个messagebox显示的时候，新的总在最上面
let zindex = 999;

/**
 * 工厂方法，返回一个 MessageBox 对象
 * 
 * @param {any} options 
 * @returns 
 */
var MessageBox = function (options) {
    let instance = new MessageBoxConstructor({
        data: options
    });
    let vm = instance.$mount();              // vue 实例
    document.body.appendChild(vm.$el);       // 将 vue 对象中存在于内存的dom，挂载到页面
    vm.visible = true;                       // 初始化之后就默认显示
    vm.$el.style.zindex = zindex++;          // 设置z-index，保证新的在最上方
    return vm;
};

export default MessageBox;