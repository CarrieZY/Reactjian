import React,{PureComponent} from 'react';
import Topic from './components/Topic/index'
import List from './components/List'
import Recommend from './components/Recommend'
import { connect } from 'react-redux';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import * as actionCreators from './store/actionCreators'

class Home extends PureComponent {

    // shouldComponentUpdate(){
    //     //判断只有和我的这个组件相关的数据，发生改变的时候 我才让这个组件的render()函数重新绚烂

    // }
    // PureComponent实现了这一功能
    handleScrolltop(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                <Topic></Topic>
                <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleScrolltop}>返回顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents()
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow())
    }
    // 组件销毁的时候 删除事件
    componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapState=(state)=>({
    showScroll:state.home.showScroll
})
const mapProps=(dispatch)=>({
	changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
})
export default connect(mapState,mapProps)(Home)