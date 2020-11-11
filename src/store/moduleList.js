import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        tipsTitle: "如何查看iphone X手机型号？",
        tips: "方法一：打开手机后盖可以看得到，方法二：打开手机设置手机方式",
        noImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604508924285&di=21a131d6d7982694d7f5252e604ddbc1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fdbfaad8aed38c49805b16e7b2afdb441ab2813b68895-ihqaSI_fw658",
        noList: [{ brandName: "暂无数据", id: 9999, }],
    },
    mutations: {
    },
    actions: {
    }
};