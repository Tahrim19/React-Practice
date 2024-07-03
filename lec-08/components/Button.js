const Button = ({imageUrl , btnName , clickHandler}) => {
  return (
   <button title={btnName} onClick={clickHandler}>
        <img src={imageUrl} alt={btnName}/>
   </button>
  )
}

export default Button
