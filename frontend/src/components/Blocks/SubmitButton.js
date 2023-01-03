function SubmitButton({label, ...buttonProps}) {
  return (
    <button type="submit" {...buttonProps}>{label}</button>
  )
}
export default SubmitButton;
