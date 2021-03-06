import { connect } from 'dva';
import React, { FC, useEffect } from 'react';
<% if (isTypeScript) { %>
import { <%= componentName %>ModelState, ConnectProps } from '@/models/connect';
<% } %>
import styles from './index.less';

<% if (isTypeScript) { %>
interface PageProps extends ConnectProps {
  <%= name %>: <%= componentName %>ModelState;
}

<% } %>
const <%= componentName %>Page: FC<% if (isTypeScript) { %><PageProps><% } %> = ({ <%= name %>, dispatch }) => {
  // 这里发起了初始化请求
  useEffect(() => {
    dispatch!({
      type: '<%= name %>/query',
    });
    return () => {
      // 这里写一些需要消除副作用的代码
      // 如: 声明周期中写在 componentWillUnmount
    };
  }, []);
  // 注意，上面这里写空数组，表示初始化，如果需要监听某个字段变化再发起请求，可以在这里写明
  const { name } = <%= name %>;
  return <div className={styles.center}>Hello {name}</div>;
};

export default connect(({ <%= name %> }:{ <%= name %>: <%= componentName %>ModelState; }) => ({ <%= name %> }))(<%= componentName %>Page);
