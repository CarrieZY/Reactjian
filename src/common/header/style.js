import styled from 'styled-components';
import logopic from '../../static/logo.png'
 
export const HeaderWrapper = styled.div`
  height: 56px;
  background: #fff;
  border-bottom:1px solid #f5f5f5;
  display:flex;
  flex-flow:row;
`;

export const Logo  = styled.a `
    margin-left:10%;
    width: 100px;
    height: 56px;
    background: url(${logopic});
    background-size: contain;
`

export const Nav=styled.div`
    flex:1;
    height: 100%;
    margin: 0 auto;
    display:flex;
    flex-flow:row;
`
export const NavItem=styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.active{
        color:#ea6f5a
    }
`
export const SearchWrapper = styled.div`
  position: relative;
  .iconfont {
    position: absolute;
    right:10px;
    font-size:20px;
    top:9px;
    line-height: 38px;
    border-radius: 15px;
    text-align: center;
    &.foused{
        color:#fff;
        transition: all .3s;
    }
  }
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
    }
    &.foused{
        width:200px;
        transition: all .3s;
    }
`;

export const Addition = styled.div`
    margin-right:10%;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`


export const SearchInfo=styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`

export const SearchInfoTitle =styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch =styled.div`
  float:right;
  font-size:10px;
`

export const SearchInfoItem=styled.div`
display: block;
float: left;
border: 1px solid #ddd;
border-radius: 3px;
margin-right: 10px;
margin-bottom: 10px;
padding: 0 5px;
line-height: 20px;
font-size: 12px;
color: #969696;
`