import React from "react";

import { contactInfo } from "../_data/homepageData";

export function ContactSpiel() {
  return (
    <>
      <h4 className="mt-8 uppercase text-sm mb-2 tracking-wide">
        Get in touch
      </h4>
      <p>
        Email{" "}
        <a href="mailto:sam.stephenson@hey.com" title="Email me">
          sam.stephenson@hey.com
        </a>
        , or find me on{" "}
        {contactInfo.map((item, i) => (
          <>
            {contactInfo.length === i + 1 && "or "}
            <a href={item.url} title={item.title}>
              {item.title}
            </a>
            {contactInfo.length !== i + 1 && ", "}
          </>
        ))}
        . I'm open to freelance and like out-the-blue emails from strangers.
      </p>
    </>
  );
}
