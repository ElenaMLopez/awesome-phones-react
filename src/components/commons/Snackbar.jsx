
const Snackbar = ({ isActive, message }) => {
  return (
      <div className={`snackbar ${isActive ? 'fadeIn' : 'fadeOut'}`}>
          {message}
      </div>
  )
    
}
export default Snackbar;