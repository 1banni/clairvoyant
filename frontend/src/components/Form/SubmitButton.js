function SubmitButton({label, ...buttonProps}) {
  return (
    <div className="btn-container">
      <button type="submit" {...buttonProps}>
        {label}
      </button>
    </div>
  )
}
export default SubmitButton;
