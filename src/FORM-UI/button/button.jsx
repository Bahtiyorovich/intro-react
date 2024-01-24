const Button = ({type, children, className, method}) => {
  return (
    <button 
      type={type} 
      className={className} 
      onClick={method}
    >
        {children}
    </button>
  )
}

export default Button