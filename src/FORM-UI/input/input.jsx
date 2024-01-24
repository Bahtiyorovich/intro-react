
const Input = ({id, type, classes, state, placeholder, setState}) => {
  return (
      <input 
        type={type} 
        id={id} 
        className={classes} 
        value={state}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      />
  )
}

export default Input