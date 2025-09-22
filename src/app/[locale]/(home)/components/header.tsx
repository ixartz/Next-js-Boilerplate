'use client';

import { motion } from 'framer-motion';

// import { DonationBanner } from "./donation-banner";

export const Header = () => (
  <motion.header
    className="fixed inset-x-0 top-0 z-20"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } }}
  >
    {/* <DonationBanner /> */}

    <div className="bg-gradient-to-b from-background to-transparent py-3">
      <div className="container flex items-center justify-between">
        {/* <Link href="/">
          <Logo size="lg" />
        </Link> */}
        <div />
      </div>
    </div>
  </motion.header>
);
