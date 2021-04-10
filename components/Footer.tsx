import React from 'react';

import { Config } from '../utils/Config';

export default function Footer() {
  return (
    <div>
      © Copyright {new Date().getFullYear()} {Config.title}
    </div>
  );
}
