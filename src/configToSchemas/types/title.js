import { defineMessage } from 'react-intl';
import extendType from './_extendType';
import _dummy from './_dummy';

export default extendType(_dummy, ({ config: { content } }) => (props) => {
  props.uiSchema ??= {};
  props.uiSchema['ui:field'] = () => <h4>{content}</h4>;
  props.uiSchema['ui:should-update'] = content;
});

export const name = defineMessage({
  defaultMessage: 'Otsikko',
});

export const elementType = 'element';
