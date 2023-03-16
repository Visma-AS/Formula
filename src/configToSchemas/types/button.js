import { defineMessage, FormattedMessage, useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import extendType from './_extendType';
import _dummy from './_dummy';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: '15px',
  },
}));

function ButtonWidget(props) {
  const classes = useStyles();
  const {options} = props;
  const [showSuccessText, setShowSuccessText] = useState(false)
  const assignFormSuccessText = options.element?.meta?.buttonActionProps?.assignFormSuccessText;
  const buttonText = options?.element?.useLabel ? options?.element?.label : options?.element?.title
  const onClickAction = props.schema?.buttonActions && props.schema?.buttonActions[options.element?.meta?.buttonOnClickAction];
  const onClick = () => {
    const response = onClickAction(options.element?.meta?.buttonActionProps)
    console.log(response);
    if (response === true) {
      setShowSuccessText(true)
    }
  }

  return (
    <div>
      {(showSuccessText && assignFormSuccessText) ? <Typography>{assignFormSuccessText}</Typography> :
        <Button
          variant="contained"
          color="Primary"
          size={"small"}
          disabled={props?.schema?.disabled}
          className={classes.button}
          onClick={onClick}
        >
          {buttonText}
        </Button> }
    </div>
  );
}

export default extendType(_dummy,(props) => () => ({
  schema: {
    type: 'string',
    ...(props.buttonActions === undefined ? { default: ''} : undefined),
    buttonActions: props.buttonActions,
    disabled: props?.fillProps?.disableElementButtons
  },
  uiSchema: {
    'ui:widget': ButtonWidget,
  }
}));

export const name = defineMessage({
  defaultMessage: 'Nappi',
});

export const elementType = 'field';