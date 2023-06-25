import { IApi } from '@umijs/max';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append([
      `<script src="https://gw.alipayobjects.com/os/lib/react/18.1.0/umd/react.development.js"></script>`,
      `<script src="https://gw.alipayobjects.com/os/lib/react-dom/18.1.0/umd/react-dom.development.js"></script>`,
    ]);
    return $;
  });
};
