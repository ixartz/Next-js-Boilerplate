import React from 'react'

const Button = ({
  size,
  variant,
  bgColor,
  hoverColor,
  textColor,
  hoverTextColor,
  children,
  href,
  leftImage = '',
  leftImageAlt = '',
  responsive = true,
}) => {
  // Define base and variant classes
  const baseClasses = `flex items-center justify-center uppercase rounded-full text-xs ${responsive && 'lg:text-sm'} shadow-sm focus:outline-none`

  let bgClass = `bg-${bgColor}`
  let hoverBgClass = `hover:bg-${hoverColor}`
  let textClass = `text-${textColor}`
  let hoverTextClass = `hover:text-${hoverTextColor}`

  // Handle outline variant
  if (variant === 'outline') {
    bgClass = `border border-${bgColor} ${textClass} ${hoverTextClass}`
    hoverBgClass = `hover:border-${hoverColor} ${hoverTextClass} ${textClass}`
    textClass = ''
    hoverTextClass = ''
  }

  // Define size classes
  let sizeClasses = ''
  switch (size) {
    case 'xs':
      sizeClasses = 'p0 py-2 px-2 font-light'
      break
    case 'sm':
      sizeClasses = 'px-2.5 py-1.5'
      break
    case 'md':
      sizeClasses = 'px-3 py-2'
      break
    case 'lg':
      sizeClasses = 'px-4 py-2 font-bold'
      break
    default:
      sizeClasses = 'px-3 py-2'
      break
  }

  // Combine all classes
  const buttonClasses = `${baseClasses} ${bgClass} ${hoverBgClass} ${textClass} ${hoverTextClass} ${sizeClasses}`

  return (
    <a className={buttonClasses} href={href}>
      {leftImage && (
        <img
          src={leftImage}
          alt={leftImageAlt}
          height="20"
          width="auto"
          className="inline-block h-4 w-4 mr-2"
        />
      )}
      {children}
    </a>
  )
}

export default Button
