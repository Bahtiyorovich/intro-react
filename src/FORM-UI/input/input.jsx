
const Input = ({id, type, classes, name, placeholder, onChange}) => {
  return (
      <input 
        type={type} 
        id={id} 
        className={classes} 
        name={name} 
        placeholder={placeholder}
        onChange={onChange}
      />
  )
}

export default Input