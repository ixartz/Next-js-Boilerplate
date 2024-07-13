'use client'

import { Disclosure } from '@headlessui/react'
import { Remove, Add, ExpandMore, ExpandLess } from '@mui/icons-material'

export default function CenteredAccordion({ data }) {
  const faqCategories = Object.entries(data)
  const midIndex = Math.ceil(faqCategories.length / 2)
  const firstColumn = faqCategories.slice(0, midIndex)
  const secondColumn = faqCategories.slice(midIndex)

  const renderAccordions = (categories) =>
    categories.map(([category, questions]) => (
      <Disclosure as="div" key={category} className="py-3 px-4 bg-neutral-800">
        {({ open }) => (
          <dl>
            <dt>
              <Disclosure.Button className="flex w-full items-start justify-between text-left">
                <span className="text-sm sm:text-base font-semibold leading-7">
                  {category}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  {open ? (
                    <Remove className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Add className="h-6 w-6" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </dt>
            <Disclosure.Panel as="dd" className="-ml-1 mt-1 pr-3">
              <dl className="mt-0 divide-y divide-gray-900/10">
                {questions.map((item) => (
                  <Disclosure as="div" key={item.question} className="pt-2">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-start text-left">
                            <span className="flex h-5 mr-2 items-center">
                              {open ? (
                                <ExpandLess
                                  className="h-5 w-5 text-green-900"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ExpandMore
                                  className="h-5 w-5 text-green-800"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                            <span className="sm:font-semibold opacity-90 leading-5 sm:pb-1">
                              {item.question}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="ml-7 pb-3">
                          <p className="mt-1 mb-1 text-xs sm:text-sm leading-5">
                            {item.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </Disclosure.Panel>
          </dl>
        )}
      </Disclosure>
    ))

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-x-8">
        <div className="space-y-3 divide-y divide-gray-900/10">
          {renderAccordions(firstColumn)}
        </div>
        <div className="space-y-3 divide-y divide-gray-900/10">
          {renderAccordions(secondColumn)}
        </div>
      </div>
    </div>
  )
}
