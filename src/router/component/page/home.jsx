import React, { Component } from 'react';
import { connect } from 'react-redux';
import { list, add, del, request } from '../../../store/actions';
import './home.css';

const Info = (props) => {
  if (props.foo.status !== 'FETCHING') {
    return (<div className="info">{JSON.stringify(props.foo)}</div>)
  } else {
    return (<div className="loading"></div>);
  }
}
class Home extends Component {
  render() {
    const props = this.props;
    const id = props.list.length + 1;
    const item = {
      id,
      title: `React + Redux + React-Router 单页面实现-${id}`,
      summary: '基于 React + easywebpack 工程骨架项目',
      hits: 550 + id,
      url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
    };
    return <div className="redux-nav-item">
      <div className="container">
        <h1>React + Redux + React-Router</h1>
        <Info foo={props.foo}/>
        <div className="redux-btn-add" onClick={() => props.request({service: '//api.github.com/users/lquixada', params: {}})}>Request</div>
        <br />
        <div className="redux-btn-add" onClick={() => props.add(item)}>Add</div>
        <ul className="smart-artiles" id="articleList">
          {props.list.map(function(item) {
            return <li key={item.id}>
              <div className="point">+{item.hits}<span className="redux-btn-del" onClick={() => props.del(item.id)}>Delete</span></div>
              <div className="card">
                <h2><a href={item.url} target="_blank">{item.title}</a></h2>
                <div>
                  <ul className="actions">
                    <li>
                      <time className="timeago">{item.moduleName}</time>
                    </li>
                    <li className="tauthor">
                      <a href="#" target="_blank" className="get">XYZ</a>
                    </li>
                    <li><a>+ Mark</a></li>
                    <li>
                      <span className="timeago">{item.summary}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>;
          })}
        </ul>
      </div>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    foo: state.foo,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    request(data) {
      return dispatch(request(data));
    },
    add(data) {
      return dispatch(add(data));
    },
    del(data) {
      return dispatch(del(data));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
