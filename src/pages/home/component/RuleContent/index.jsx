import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import { connect } from 'dva';

class RuleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        '1.适用范围': [
          '1.1 为维护平台与消费者的合法权益及8号会员平台经营秩序，特制定本规则。',
          '1.2 本规则适用于8号会员对非虚拟类、服务类商品或其他类别评价信息的管理。'
        ],
        '2.评价晒单宗旨': [
          '2.1 消费者应基于真实交易作出合法、公正、客观、真实的评价晒单，反映商品或服务的真实情况，鼓励原创，杜绝剽窃、违反法律法规、无意义的评价晒单内容行为，为其他消费者在购物决策和平台经营过程提供有效参考。'
        ],
        '3.晒单评价的时效': ['3.1 消费者可在完成支付后30日内且确认收货后对所购商品作出首次评价晒单，在180天内可进行追加评论。'],
        '4.评价晒单说明': [
          '4.1 为保证评价的客观性，评价内容一经发表后无法进行修改和删除。',
          '4.2 评价成功后您的评价内容除了会展示在商品详情页和评价中心外，平台有权将其展示在App首页、搜索、发现频道等其他位置。'
        ],
        '5.评价市场管理规范': [
          '5.1 平台会根据消费者评价违规情节严重处程度采取屏蔽全部或部分评价内容、限制违规/异常交易的评价工具使用等措施。违规情形如下；',
          '(1)发布违禁信息、骗钱他人财物、虚假交易、滥发信息等；',
          '(2)消费者、同行竞争者等角色被发现以给予负面评论内容等方式谋取额外利益或其他不当利益的恶意行为；',
          '(3)包括辱骂、泄露信息、污言秽语、广告信息、无实际意义信息、色情低俗个人信息内容或其他有违公序良俗的不当评价；',
          '5.2 对于存在以上评价内容的消费者，平台将对其进行限时封禁警告，严重者将查账封号。'
        ],
        '6.附则': [
          '6.1 8号会员有权根据经营需要随时变更平台的各项规则，并在平台系统等渠道进行公示以通知消费者。',
          '6.2 消费者应根据国家法律、行政法规、部门规章等规范性文件。对任何涉嫌违反国家法律、行政法规、部门规章等规范性文件的行为，本规则尚无规定的，依照法律法规处理。因消费者自身原因违反国家法律、政策或侵犯他人合法权益的，消费者应独立承担全部法律或赔偿责任，8号会员平台不承担责任。',
          '6.3 本规则于2020年12月11日首次发布，于2020年12月11日生效。'
        ]
      },
    };
  }

  componentDidMount() {
  }

  render() {
    const { content } = this.state;
    return (
      <div className={styles.ruleContent}>
        {
          Object.keys(content).map((key, index) => {
            const item = content[key];
            return (
              <React.Fragment key={`ruleContent${index}`}>
                <h2 className={styles['ruleContent-title']}>{key}</h2>
                {
                  item.map((item, index) => {
                    const innerOrderReg = /^\(\d\)/ig;
                    const isInnerOrder = innerOrderReg.test(item);
                    return (
                      <p className={
                        classNames(
                          styles['ruleContent-content'],
                          isInnerOrder ? styles['ruleContent-innerOrder'] : '')}
                        key={`content${index}`}
                      >
                        {item}
                      </p>
                    )
                  })
                }
              </React.Fragment>
            )
          })
        }
      </div>
    );
  }
}

export default connect(({ global }) => ({
  global,
}))(RuleContent);
