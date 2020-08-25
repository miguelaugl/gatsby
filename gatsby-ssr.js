import React from 'react';

export { wrapRootElement } from './gatsby/wrapRootElement';
export { wrapPageElement } from './gatsby/wrapPageElement';

export const onRenderBody = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script type="text/javascript">console.log(`Rendered`)</script>
  ])
};
