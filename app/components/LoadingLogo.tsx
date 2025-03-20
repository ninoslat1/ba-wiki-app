import LoadingIcon from '../assets/Prime_Student_Council_Icon.webp'

const LoadingLogo = () => {
  return (
    <div
      className=
        "fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50"
    >
      <img src={LoadingIcon} alt="Loading..." className="w-24 h-24 animate-bounce" />
    </div>
  )
}

export default LoadingLogo