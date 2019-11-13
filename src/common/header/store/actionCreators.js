// action 的类型定义为常量，action 的定义也进行统一的调整。

import * as constants from './constants'
import { fromJS } from 'immutable';
import axios from 'axios'
// actionCreators返回的是一个对象

export const changLIst=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),//当列表的数据过多的时候 前端需要做分页处理
    totalPage:Math.ceil(data.length / 10)   //函数返回大于或等于一个给定数字的最小整数。
})
export const SearchInput=()=>({
    type:constants.SEARCH_FOCUS
})

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})

export const searchChange=(value)=>({
    type:constants.SEARCH_CHANGE,
    value
})

// 在actionCreators里面定义一个函数  函数返回一个异步请求的数据
export const getListDate=()=>{
    return (dispatch)=>{
        axios.get('/api/headerlist.json',{}).then(res=>{
            const list=res.data
            //修改store里面的数据  一定要action给store  封装一个函数对象  来装接口返回的数据
            dispatch(changLIst(list.data))
        }).catch(()=>{
            console.log('error')
        })
    }
}