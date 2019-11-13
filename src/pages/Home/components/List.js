import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import { ListItem, ListInfo ,LoadMore} from '../style';
import { Link } from 'react-router-dom';
class List extends PureComponent {
	render() {
        const {articleList,getMoreLIst,page}=this.props
		return (
            <div>
			<ListItem>
                {
                    articleList.map((item, index) => {
						return (
							<Link key={index} to={'/detail/' + item.get('id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
                }
			</ListItem>
                <LoadMore onClick={()=>getMoreLIst(page)}>加载更多</LoadMore>
            </div>
		)
    }
    
}

const mapState = (state) => ({
    articleList:state.home.get('articleList'),
    page:state.home.get('articlePage')
});

const mapDispatch=(dispatch)=>({
	getMoreLIst(page){
		dispatch(actionCreators.getMoreLIst(page))
	}
})
export default connect(mapState, mapDispatch)(List);