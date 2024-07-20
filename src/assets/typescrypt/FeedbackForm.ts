type FeedbackForm = {
  title: string,
  alternateTitle: string,
  inputs: FeedbackFormInput[],
  message: FeedbackFormMessage,
  checkboxes: FeedbackFormCheckboxes[],
  additionalText: string,
  button: FeedbackFormButton,
}