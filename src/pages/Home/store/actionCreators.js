// action 的类型定义为常量，action 的定义也进行统一的调整。

import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';


const changHomeData = (result) => ({
	type: constants.GET_LISTS,
    topicList: result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
});

const addHomeList=(result,page) =>({
	type: constants.GET_MORELISTS,
	newList:fromJS(result),
	page
})
export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}

export const getMoreLIst=(page)=>{
	return (dispatch)=>{
		console.log('click')
		axios.get('/api/homeList.json?page='+page).then(res=>{
			const result = res.data.data;
			dispatch(addHomeList(result,page+1));
		})
	}
}


export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})