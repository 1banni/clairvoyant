function SubmitButton({label, ...props}) {
  return (
    <div className="btn-container">
      <button type="submit" {...props}>
        {label}
      </button>
    </div>
  )
}
export default SubmitButton;
