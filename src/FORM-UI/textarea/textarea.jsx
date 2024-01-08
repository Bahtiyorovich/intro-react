
const Textarea = ({rows, cols,classes,placeholder}) => {
  return (
      <textarea 
        className={classes}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      >
      </textarea>
  )
}

export default Textarea