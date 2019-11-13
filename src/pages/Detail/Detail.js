import React, { PureComponent } from 'react';
import {DetailWrapper,Header,Content} from './style'
import { connect } from 'react-redux';
import * as actionCreators from '../Detail/store/actionCreators'
class Detail extends PureComponent {
	render() {
        console.log(this.props)
        const { title,content} =this.props
		return (
			<DetailWrapper>
                <Header>
                {title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: content}}>
                </Content>
            </DetailWrapper>
		)
    }
    componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}
const mapState=(state)=>({
    title:state.Detail.get('title'),
    content:state.Detail.get('content')
})

const mapDispach =(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})


export default connect(mapState,mapDispach)(Detail);
