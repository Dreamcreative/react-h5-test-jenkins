import React from 'react';
import styles from './style.less';

import { connect } from 'dva';
import RuleContent from './component/RuleContent'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEnd: false,
      isShow: false,
      isInit: false,
      isFixShow: false,
    };
  }

  componentDidMount() {
    console.log(1);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = document.getElementById('scrollBox').scrollTop;
    if (scrollTop > 88) {
      this.setState({ isFixShow: true, isFixInit: true });
    } else {
      this.setState({ isFixShow: false });
    }
  };

  handleShow = (e, isShow) => {
    e.stopPropagation();
    this.setState({ isShow: isShow, isInit: true });
    // e.preventdefault();
  };

  closeShow = () => {
    this.setState({ isShow: false });
  };

  render() {
    return (
      <div className={styles.box} id="scrollBox" onClick={(e) => this.closeShow(e)} onScroll={this.handleScroll}>
        {<>
          <RuleContent />
        </>}
      </div>
    );
  }
}

export default connect(({ global }) => ({
  global,
}))(Home);
