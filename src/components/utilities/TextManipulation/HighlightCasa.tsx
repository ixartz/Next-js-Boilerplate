'use client'

import React, { useEffect } from 'react'

const HighlightCasa = ({ children }) => {
  useEffect(() => {
    // Regular expression to match "casa dourada" case insensitive
    const regex = /\bcasa\s+(dourada)\b/gi // \b for word boundary, gi for global and case-insensitive

    // Function to apply highlighting
    const highlightText = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        let content = node.textContent
        const matches = content.match(regex)

        // Replace matches with highlighted spans
        if (matches) {
          matches.forEach((match) => {
            const highlighted = match.replace(
              /casa/gi,
              '<span class="text-green-800">casa</span>'
            )
            content = content.replace(match, highlighted)
          })
          node.parentNode.innerHTML = content
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Recursively process child nodes
        node.childNodes.forEach(highlightText)
      }
    }

    // Select specific heading elements
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5')

    // Apply highlighting to each heading
    headings.forEach((heading) => {
      highlightText(heading)
    })
  }, [])

  return <>{children}</>
}

export default HighlightCasa
