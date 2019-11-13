
import * as constants from './constants';

import { fromJS } from 'immutable';
const defaultState=fromJS({
    topicList:[],
    articleList:[],
    articlePage:1,
    recommendList:[],
    recommendauthor:[],
    newList:[],
    showScroll:false,
})

const changeHomeData = (state, action) => {
	return state.merge({
        topicList: fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        recommendauthor:fromJS(action.recommendauthor),
    });
};
export default(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_LISTS:
            return changeHomeData(state, action);
        case constants.GET_MORELISTS:
            return state.merge({
                'articleList':state.get('articleList').concat(action.newList),
                'articlePage':action.page
            })
        case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
        default:
            return state;        
    }
}