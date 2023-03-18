import classNames from 'classnames'

const TextHeading = ({ text, font = 'h2' }) => {
  const ClassHeading = classNames({
    'font-bold text-gray-800': true,
    'text-xl': font === 'h2'
  })
  const HeadingComponent = () => {
    if (font === 'h2') {
      return <h2 className={ClassHeading}>{text}</h2>
    }
  }
  return <HeadingComponent />
}

export default TextHeading
