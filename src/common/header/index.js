import React ,{Component} from 'react'
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
  } from './style';

import '../../static/iconfont/iconfont.css';
import { connect } from 'react-redux';
// import {actionCreators} from './store'
import * as actionCreators from './store/actionCreators'; //as是es6的一个语法  可以把*取成别名

class Header extends  Component {
    render(){
        console.log(this.props)
        const { foused, inputFouse,show, inputBlur,inputValue ,inputChange} = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                <Logo></Logo>
                </Link>
                <Nav>
                    <NavItem className='active'>首页</NavItem>
                    <NavItem>下载</NavItem>
                    <SearchWrapper>
                        <NavSearch className={foused?'foused':''} 
                        value={inputValue}
                        onChange={inputChange}
                        onFocus={inputFouse} 
                        onBlur={inputBlur}>
                        </NavSearch>
                        {/* 当导航栏开始聚焦的时候  开始获取ajax数据 */}
                        <span className={foused?'foused iconfont':'iconfont'}>&#xe614;</span>
                        {/* 然后根据input是否点击来显示这个框 */}
                        {this.getList(show)}
                    </SearchWrapper>
                    <NavItem>Aa</NavItem>
                    <Link to='/login'>
                    <NavItem>登录</NavItem>
                    </Link>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <span className='iconfont'>&#xe615;</span>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getList(show){
        if(show){
            return(
                <SearchInfo>
                <SearchInfoTitle>热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch></SearchInfoTitle>
                {this.props.list.map((item)=>{
                    return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                })}
            </SearchInfo>
            )
        }else{
            return null
        }
    }
}

// 将接收redux的state数据
const mapStateToProps = (state) => {
    return {
        foused: state.header.get('foused'),
        show:state.header.get('show'),
        list: state.header.get('list'),
        page:state.header.get('page')
    }
  }
//   需要改变的方法  派发给redux
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        inputChange(e){
            dispatch(actionCreators.searchChange(e.target.value))
        },
        inputFouse(){
            //将请求接口的数据  放在redux里面
          dispatch(actionCreators.getListDate())   
          dispatch(actionCreators.SearchInput());
        },
        inputBlur(){
         dispatch(actionCreators.searchBlur())
        }
    }
  }  
export default connect(mapStateToProps,mapDispatchToProps)(Header)