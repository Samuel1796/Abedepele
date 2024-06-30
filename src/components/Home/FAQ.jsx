import React from 'react';
import Image1 from "../../assets/Main Home Pge/12781055_5071716 1.png";

const FAQ = () => {
  const faqData = [
    {
      question: "How can I receive election date reminders?",
      answer: "We will notify you through the school's WhatsApp pages when elections are almost due, so you can cast your vote. Please be on guard and ensure your WhatsApp notifications are enabled to receive these important updates promptly."
    },
    {
      question: "How long does it take for my vote to be counted?",
      answer: "Once you submit your vote through our online voting system, it is counted immediately. However, the results will be finalized and announced only after the voting period closes to ensure every vote is properly accounted for and verified. We strive to maintain transparency and accuracy, so rest assured that every vote is important and contributes to the final outcome."
    },
    {
      question: "Would my vote be kept private and secure?",
      answer: "Your privacy and the security of your vote are our top priorities. Our online voting system is designed with state-of-the-art security measures to ensure that your vote is recorded anonymously and kept confidential. We employ encryption and other security protocols to protect against unauthorized access and to guarantee the integrity of the voting process. You can cast your vote with confidence, knowing that it will remain private and secure."
    },
    {
        question: "Can I change my vote after submitting it?",
        answer: "Once you have submitted your vote, it cannot be changed. This is to ensure the integrity and finality of the voting process. Please review your choices carefully before confirming your vote. If you believe there has been an error or if you have any concerns, please contact our support team immediately for assistance."
    },
    {
        question: "Who can I contact for more information or assistance?",
        answer: "If you need help or require more information about the online voting process, please do not hesitate to contact our support team. You can reach us via email at registrar@umat.edu.gh, or through the official whatsapp pages of the school. Our dedicated team is available to assist you with any questions or issues you may encounter."
    }
  ];

  return (
    <section className="py-12 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        {/* FAQ Image */}
        <div className="mb-8 text-center">
          <img src={Image1} alt="FAQ" className="w-1/2 md:w-full h-auto mx-auto" />
        </div>

        <h2 className="text-3xl font-bold text-center text-[#074a7d] mb-8">Frequently Asked Questions</h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[2.375rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 before:to-transparent">
          {faqData.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-3 md:flex-row">
                <div className=" md:ml-4  flex items-center justify-center w-12 h-12  rounded-full bg-blue-500 text-white font-bold shadow z-10 px-2 ">
                  {index + 1}
                </div>
                <div className="text-slate-500">
                  <h3 className=" ml-6 text-xl font-semibold text-blue-900">{item.question}</h3>
                </div>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200 text-gray-500 shadow ml-14 md:ml-0">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
