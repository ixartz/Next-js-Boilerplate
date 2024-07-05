"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    // <div className="embla" ref={emblaRef}>
    //   <div className="embla__container">
    //     <div className="embla__slide">Slide 1</div>
    //     <div className="embla__slide">Slide 2</div>
    //     <div className="embla__slide">Slide 3</div>
    //   </div>
    // </div>
    <div>TEST</div>
  )
}
