/* eslint import/no-webpack-loader-syntax: "off" */
/* eslint import/no-unresolved: "off" */
import '!style-loader!css-loader!react-dates/lib/css/_datepicker.css';
import '!style-loader!css-loader!./style.css';
import { sub, add } from 'date-fns';
import moment from 'moment';
import 'moment/locale/fi';
import 'moment/locale/sv';
import { useEffect, useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import { defineMessage, FormattedMessage, useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { mapValues } from 'lodash';
import { DateRangePickerPhrases } from '../../../../lib/configToSchemas/types/date/phrases';
import { getAriaLabel } from '../../../utils.js';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));
const beforeDay = (date) => {
  if(date.type !== undefined) {
    return date.type !== 'date' ? sub(new Date(), { [date.type]: date.numberValue }) : date.dateValue;
  } else {
    return null;
  }
}

const afterDay = (date) => {
  if(date.type !== undefined) {
    return date.type !== 'date' ? add(new Date(), { [date.type]: date.numberValue }) : date.dateValue;
  } else {
    return null;
  }
}

const getDefaultValue = ({type, defaultValue, limitType, limitAmount}) => {
  switch (type) {
    case 'noDefault': return null;
    case 'today': return moment();
    case 'fixed': return moment(defaultValue);
    case 'limit': return limitAmount < 0
      ? moment(beforeDay({type: limitType, numberValue: limitAmount * -1 }))
      : moment(afterDay({type: limitType, numberValue: limitAmount }));
  }
  return undefined;
}

function SingleDatePickerWidget({ id, onChange, options, schema, value, required }) {
  const intl = useIntl();
  const language = intl.locale.split('-')[0] !== 'en';
  const [focused, setFocused] = useState();
  const [dateValue, setDateValue] = useState();
  const { label, list } = options.element;
  const handleFocusChange = ({ focused }) => setFocused(focused);
  const { locale } = intl;
  const classes = useStyles();

  useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  useEffect(() =>{
    setDateValue(value !== undefined ? moment(value) : (options.dateDefault ? getDefaultValue(options.dateDefault) : undefined));
  }, [])

  useEffect(() => {
    if (dateValue) {
      onChange(dateValue.format('YYYY-MM-DD'));
    }
  }, [dateValue, onChange]);

  const onClickEmpty = (value) => {
    setDateValue(undefined);
    if (value && list) {
      onChange([undefined])
    } else {
      onChange(undefined)
    }
  }

  const ariaLabel = getAriaLabel(
    label,
    options,
    required,
    intl.formatMessage({defaultMessage: 'Pakollinen kenttä'})
  );

  return (
    <div>
      <SingleDatePicker
        date={dateValue}
        onDateChange={setDateValue}
        focused={focused}
        {...language ? {phrases : mapValues(DateRangePickerPhrases, message => intl.formatMessage(message))} : {}}
        ariaLabel={ariaLabel}
        onFocusChange={handleFocusChange}
        id={id}
        numberOfMonths={1}
        disabled={schema.readOnly || options.readonly}
        small={true}
        placeholder={intl.formatMessage({defaultMessage: "Päivämäärä"})}
        screenReaderInputMessage={ariaLabel}
        hideKeyboardShortcutsPanel
        isOutsideRange={(m) =>
          (options.disableBefore && options.element.disableBefore.type &&
            m.isBefore(beforeDay(options.element.disableBefore), 'day') && options.element.disableBefore.type !== 'noValue') ||
          (options.disableAfter && options.element.disableAfter.type &&
            m.isAfter(afterDay(options.element.disableAfter), 'day') && options.element.disableAfter.type !== 'noValue')
        }
      />
      {dateValue !== undefined ?
      <Button
        variant="contained"
        color="secondary"
        size={"small"}
        className={classes.button}
        onClick={onClickEmpty}
      >
        <FormattedMessage defaultMessage="Tyhjennä" />
      </Button>
      : <></>}
    </div>
  );
}

export default ({ config: { disableBefore, disableAfter, dateDefault } }) => ({
  schema: {
    format: 'date',
    type: 'string',
  },
  uiSchema: {
    'ui:widget': SingleDatePickerWidget,
    'ui:options': {
      disableBefore,
      disableAfter,
      dateDefault
    }
  }
});

export const name = defineMessage({
  defaultMessage: 'Päivämäärä',
});

export const elementType = 'field';
