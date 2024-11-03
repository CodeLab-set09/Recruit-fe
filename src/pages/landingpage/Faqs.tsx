"use client";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    question: "Does Codify offer certificate?",
    answer:
      "Yes, Codify offers certificate. Codify's certificate are given to players for every programming language they complete",
  },
  {
    question: "Does codify have a YouTube channel?",
    answer:
      "Yes it does. The name of our YouTube channel is called just_Codify and it is aimed at providing expert-led video tutorials on programming languages to enhnace and support your learning while playing to have fun also.",
  },
  {
    question: "Is Codify an earning platform?",
    answer:
      "Yes, Codify is an earning platform. Our players can start earning when they get to a particular level",
  },

  // {
  //   question: "Is my data secure?",
  //   answer:
  //     "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  // },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold cursor-pointer">
          {question}
        </span>
        {isOpen ? (
          <p className="cursor-pointer">Close</p>
        ) : (
          <p className="cursor-pointer">Open</p>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#141B26] to-black ">
      <div className="container">
        <h2 className="text-[30px] font-semibold sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, i) => (
            <div key={i}>
              <AccordinationItem question={question} answer={answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
