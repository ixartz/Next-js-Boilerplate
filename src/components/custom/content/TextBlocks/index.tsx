import React from 'react'

type ContentProps = {
  heading?: string
  headingLevel?: keyof JSX.IntrinsicElements // Ensure headingLevel is a valid HTML tag
  content: Record<string, string>
}

const TextBlocks: React.FC<ContentProps> = ({
  heading,
  headingLevel = 'h2',
  content,
}) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements

  return (
    <div className="">
      {heading && <HeadingTag className={`font-bold`}>{heading}</HeadingTag>}
      {Object.keys(content)
        .filter((key) => key.startsWith('paragraph'))
        .map((key, index) => (
          <p key={index} className="font-normal">
            {content[key]}
          </p>
        ))}
    </div>
  )
}

export default TextBlocks
