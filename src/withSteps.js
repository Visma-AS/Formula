import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { mapValues, pick } from 'lodash';
import { forwardRef, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { StepTitle } from './configToSchemas/types/stepTitle';
import CheckIcon from '@material-ui/icons/Check'
import { forceBlur } from "./withOnTouch.js";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  buttonContainer: {
    '& > *': {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      '@media print': {
        display: 'none',
      },
    },
  },
  labelContainer: {
    textAlign: 'start',
  },
  stepIconActive: {
    color: '#0077C7',
    fill: 'currentColor',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.5rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: '0',
    userSelect: 'none'
    },
  stepIcon: {
    color: 'rgba(0, 0, 0, 0.38)',
    fill: 'currentColor',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.5rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: '0',
    userSelect: 'none'
  },

}));

export default function withSteps(Form) {
  const WithSteps = forwardRef(({ onSubmit, onChange, onError, formData, steps, fillProps, onPreSubmit, ...otherProps }, ref) => {
    const intl = useIntl();
    const [activeStep, setActiveStep] = useState(otherProps.dataIsDraft && otherProps.activeStep ? otherProps.activeStep : 0);
    const [maxJump, setMaxJump] = useState(activeStep);
    const [noValidate, setNoValidate] = useState(false);
    const [liveValidate, setLiveValidate] = useState(false);
    const classes = useStyles();
    const formRef = useRef();
    ref ??= formRef;
    const formWrapperRef = useRef();
    const jumpRef = useRef(null);

    function handleStepChange(args) {
      const nextStep = jumpRef.current ?? activeStep + 1;

      if (nextStep < steps.length) {
        setMaxJump((prev) => Math.max(prev, nextStep));
        setActiveStep(nextStep);
        setTimeout(()=> {
          const stepId = 'formula-step-' + steps[nextStep]['ui:options']?.element?.key;
          const selection = formWrapperRef.current?.querySelector('#' + stepId);
          selection.scrollIntoView(true);
          const focusableElements = 'a:not([disabled]), button:not([disabled]), input:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
          const allFocusableElements = formWrapperRef.current?.querySelectorAll(focusableElements)
          const focusableFormElements = Array.prototype.slice.call(allFocusableElements).filter((element) => !element.id.startsWith('formula-step'));
          focusableFormElements[0].focus();
          }, 0 )
        // Prevent submit
        return false;
      }

      // Submit
      return onPreSubmit ? onPreSubmit(args) : true;
    }

    const handleSubmit = () => {
      setNoValidate(false);
    };
    const isLastStep = activeStep === steps.length - 1;

    const elements = otherProps.uiSchema['ui:order'];

      const currentStepElements = [];
      const beforeMaxJumpElements = [];
      let current = -1;
      for (const element of elements) {
        const uiField = otherProps.uiSchema[element]?.['ui:field'];
        if (uiField === StepTitle) {
          current++;
          if (current > maxJump) {
            break;
          } else {
            continue;
          }
        }
        if ((current === -1 && activeStep === 0) || current === activeStep) {
          currentStepElements.push(element);
        }
        beforeMaxJumpElements.push(element);
      }

    const createHandleJump = (step) =>
      function handleJump(event) {
        // If backward button pressed
        forceBlur(event);
        step < activeStep ? setNoValidate(true) : setNoValidate(false);
        setLiveValidate(false);
        jumpRef.current = step;
        ref.current.submit(event);
        // Wait for the submit event to trigger.
        setTimeout(() => {
          // If form has validation errors, jump does not happen and we must clean
          // current value.
          jumpRef.current = null;
        });
      };

    const StepIcon = ({pageNumber, active, completed}) => {
      return (
        <svg
          aria-label={
            completed
              ? intl.formatMessage({defaultMessage: 'Ikoni, sivu {page}: täytetty'}, {page: pageNumber})
              : active
                ? intl.formatMessage({defaultMessage: 'Ikoni, sivu {page}: aktiivinen'}, {page: pageNumber})
                : intl.formatMessage({defaultMessage: 'Ikoni, sivu {page}: täyttämätön'}, {page: pageNumber})
          }
          className={active ? classes.stepIconActive : classes.stepIcon}
          focusable={false}
          viewBox="0 0 24 24">
          <circle cx={12} cy={12} r={12} aria-hidden />
          {completed ?
            <CheckIcon style={{color: 'white'}} aria-hidden/>
            : <text className="MuiStepIcon-text" x={12} y={16} textAnchor="middle" aria-hidden>{pageNumber}</text>}
        </svg>
      )
    };

    return (
      <div ref={formWrapperRef}>
        <Typography component="h2" variant="h5" gutterBottom>
          {otherProps.schema.title}
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
          {steps
            .map(({ 'ui:title': title, 'ui:options': options }) => {return {title, options}})
            .map(({title, options}, index) => {
              const active = index <= maxJump;
              const current = index === activeStep;
              return (
                <Step key={title}>
                  <StepButton
                    id={`formula-step-${options?.element?.key}`}
                    completed={index < activeStep}
                    disabled={current || !active}
                    active={active}
                    onClick={createHandleJump(index)}
                    className={classes.labelContainer}
                    icon={<StepIcon pageNumber={index + 1} active={active} completed={index < activeStep}/>}
                    aria-expanded={current}
                    aria-disabled={current}
                  >
                    <Typography variant="subtitle2" component="h3">{title}</Typography>
                  </StepButton>
                  {current && (
                    <StepContent>
                      <Form
                        {...otherProps}
                        fillProps={isLastStep ? {
                          ...fillProps,
                          actions: (
                            <>
                              <Button
                                onTouchStart={forceBlur}
                                onClick={createHandleJump(activeStep - 1)}
                                aria-label={`${intl.formatMessage({defaultMessage: 'Takaisin'})}: ${steps[index - 1]?.['ui:title']}`}
                              >
                                <FormattedMessage defaultMessage="Takaisin" />
                              </Button>
                              {fillProps?.actions}
                            </>
                          )
                        } : fillProps}
                        onSubmit={isLastStep ? onSubmit : undefined}
                        onPreSubmit={handleStepChange}
                        ref={ref}
                        isLastStep={isLastStep}
                        formData={formData}
                        onChange={(...args) => {
                          onChange?.(...args);
                          setMaxJump(activeStep);
                        }}
                        onError={(...args) => {
                          setLiveValidate(true);
                          onError?.(...args)
                        }}
                        liveValidate={liveValidate}
                        noValidate={noValidate}
                        schema={{
                          ...otherProps.schema,
                          properties: pick(
                            otherProps.schema.properties,
                            isLastStep ? beforeMaxJumpElements : currentStepElements
                          ),
                          title: undefined,
                          required: otherProps.schema.required?.filter((key) =>
                            currentStepElements.includes(key)
                          ),
                        }}
                        uiSchema={{
                          formWithSteps: true,
                          // Hide elements outside current step
                          ...mapValues(
                            otherProps.schema.properties,
                            (value, key) =>
                              currentStepElements.includes(key)
                                ? otherProps.uiSchema[key]
                                : { 'ui:widget': 'hidden' }
                          ),
                          // Include additional schema options
                          ...mapValues(otherProps.uiSchema, (value, key) =>
                            elements.includes(key) &&
                            !currentStepElements.includes(key)
                              ? { 'ui:widget': 'hidden' }
                              : value
                          ),
                        }}
                      >
                        <div className={classes.buttonContainer}>
                          {isLastStep ? (
                            <Button
                              onTouchStart={forceBlur}
                              type="submit"
                              onClick={handleSubmit}
                              variant="contained"
                              color="primary"
                            >
                              {otherProps.customMessages?.submit ?? <FormattedMessage defaultMessage="Lähetä" />}
                            </Button>
                          ) : (
                            <Button
                              onTouchStart={forceBlur}
                              onClick={createHandleJump(activeStep + 1)}
                              variant="contained"
                              color="primary"
                              aria-label={`${intl.formatMessage({defaultMessage: 'Eteenpäin'})}: ${steps[index + 1]?.['ui:title']}`}
                            >
                              <FormattedMessage defaultMessage="Eteenpäin" />
                            </Button>
                          )}
                          {activeStep !== 0 && (
                            <Button
                              onTouchStart={forceBlur}
                              onClick={createHandleJump(activeStep - 1)}
                              aria-label={`${intl.formatMessage({defaultMessage: 'Takaisin'})}: ${steps[index - 1]?.['ui:title']}`}
                            >
                              <FormattedMessage defaultMessage="Takaisin" />
                            </Button>
                          )}
                          {otherProps.draftButton}
                          { fillProps?.actions && fillProps.actions }
                          </div>
                        </Form>
                      </StepContent>
                    )}
                  </Step>
                );
              })}
          </Stepper>
        </div>
      );
    }
  );

  return forwardRef((props, ref) => {
    const uiOrder = props.uiSchema['ui:order'] ?? [];
    const steps = Object.entries(props.uiSchema)
      .sort(([a], [b]) => uiOrder.indexOf(a) - uiOrder.indexOf(b))
      .map(([, value]) => value)
      .filter(Boolean)
      .filter(({ 'ui:field': uiField }) => uiField === StepTitle);

    const steppedProps = {
      ...props,
      // In form step schema & uiSchema is incomplete.
      // This is to access the original/full schema & uiSchema.
      __withStepped_original_props__: props,
    };

    return (!props?.fillProps?.disableSteps && steps.length) ? (
      <WithSteps ref={ref} {...steppedProps} steps={steps} />
    ) : (
      <Form ref={ref} {...steppedProps} />
    );
  });
}
