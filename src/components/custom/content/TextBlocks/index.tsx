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
    <div className="container text-center mx-auto">
      <div className="mx-auto inline-block text-left">
        {heading && (
          <HeadingTag className={`uppercase text-3xl font-bold`}>
            {heading}
          </HeadingTag>
        )}
        {Object.keys(content)
          .filter((key) => key.startsWith('paragraph'))
          .map((key, index) => (
            <p key={index} className="text-sm md:text-base font-normal">
              {content[key]}
            </p>
          ))}
      </div>
    </div>
  )
}

export default TextBlocks
