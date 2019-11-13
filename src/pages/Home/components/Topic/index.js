import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../../style';
import * as actionCreators from '../../store/actionCreators';
class Topic extends PureComponent {
	render() {
		const { topicList } = this.props;
		console.log(topicList)
		return (
			<TopicWrapper>
				{
					topicList.map((item) => (
						<TopicItem key={item.get('id')}>
							<img
								className='topic-pic'
								src={item.get('imgUrl')}
								alt=''
							/>
							{item.get('title')}
						</TopicItem>
					))
				}
			</TopicWrapper>
		)
	}
	//组件绚烂后调用
	componentDidMount(){
		this.props.changeHomeData()
	}
}

const mapState = (state) => ({
	topicList: state.home.get('topicList')
});


const mapProps=(dispatch)=>({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
})
export default connect(mapState, mapProps)(Topic);