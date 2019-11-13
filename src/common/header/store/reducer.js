
import * as constants from './constants';

import { fromJS } from 'immutable';
const defaultState=fromJS({
    inputValue:'',
    foused:false,
    show:false,//是否显示热门搜索的框
    list:[],
    page:1,//当前只有1页
    totalPage:1,//总页数
})

export default(state=defaultState,action)=>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.merge({'foused':true,'show':true});
        case constants.SEARCH_BLUR:
            return state.merge({'foused':false,'show':false});  
        case constants.SEARCH_CHANGE:
            return state.set('inputValue',action.value);
        case constants.CHANGE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage)    
        default:
            return state;        
    }
}