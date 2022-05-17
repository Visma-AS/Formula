export const hasCaptcha = (props) =>
  props.config.publicForm && (props.config.requireCaptcha ?? true);

export const hasConfirmDefault = true;

export const hasConfirm = (props) =>
  // Override prop?
  props.confirm ??
  // Derived/computed value?
  (hasCaptcha(props) ||
    hasConsent(props) ||
    // Form config?
    (props.config.meta?.confirm ??
      // Default
      hasConfirmDefault));

export const hasConsentDefault = !false;

export const hasConsent = (props) =>
  // Form config?
  props.config.meta?.consent ??
  // Default
  hasConsentDefault;