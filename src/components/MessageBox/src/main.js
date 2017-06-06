import Vue from 'vue';
let MessageBoxConstructor = Vue.extend(require('./main.vue'));

let instance;
var MessageBox = function (options) {
    instance = new MessageBoxConstructor({
        data: options
    });
    instance.vm = instance.$mount();                // 跟 vue 的基础属性保持一致
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    return instance.vm;
};

MessageBox.show = function () {
    instance.show();
};

MessageBox.hide = function () {
    instance.hide();
}

export default MessageBox;