
// incomplete page haii
import React, { useState } from 'react';
import './LearnAbout.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h3 className="accordion-title" onClick={handleClick}>
        {title}
        <span className="accordion-arrow">{isOpen ? '▲' : '▼'}</span>
      </h3>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const LearnAbout = () => {
  const accordionData = [
    {
      title: 'What is Organ Donation?',
      content:
        'Organ donation is the entire practice of retrieving a human organ from a living or deceased person, who is referred to as a Donor, and transplanting it into a recipient. The recipient will be a patient who is suffering from organ failure and who will not survive unless she/he receives an organ replacement. The process of recovering organs is called Retrieval.'
    },
    {
      title: 'what is Tissue Donations',

      content: 'Tissue Donation is the process of Retrieving or Procuring tissues from a living or deceased persons, called a Donor, and transplanted into the Recipient who needs it.Medical Science has made tremendous progress in recent times in the field of organ donation and transplantation, with organ donation from one person capable of saving up to 9 lives and improving the lives of many others.However, due to the prevalence of myths about organ donation, and the lack of awareness about the topic in India, a majority of people do not take up this noble cause for the benefit of others.'
    },
    {
      title: 'Which Organs Can Be Donated?',
      content: ' Let’s take a closer look at the different organs that can be donated by a person after death and while the person is still alive. There are eight organs that can be donated and transplanted:Kidneys:<br/> Both kidneys can be donated by a deceased donor. On average the lifespan of a transplanted kidney is around nine years, but it varies from individual to individual. Of all organs in the human body, the demand for kidneys is the highest, and kidneys are the most frequently donated organs. A kidney disease most likely affects both kidneys at the same time. A living donor can easily donate one kidney to someone and function well for the rest of their lives.iver: The liver is an important organ with primary functions of bile production & excretion; excretion of bilirubin, cholesterol, hormones, and drugs; metabolism of fats, proteins and carbohydrates; enzyme activation; storage of glycogen, vitamins and minerals; synthesis of plasma proteins; blood detoxification and purification. The liver is the only organ in the human body that can grow cells and regenerate. A donated liver from someone who has died (a deceased donor) can further be split into two pieces and transplanted into two different people to save their lives. A living donor can have a portion of her/his liver removed to donate to someone, and the remaining portion will regenerate to almost its full previous size.Heart: A heart is a muscular organ which pumps blood through the human body. In a person’s life, the heart will beat around 2.5 billion times on average and keep the blood running in the body. After being retrieved from the donor, a heart can survive for 4-6 hours only.Lungs: Single or double-lung transplants can be performed from deceased donors. Additionally, living donors can donate a single lobe from the lungs, though it will not regenerate.Pancreas: A deceased donor pancreas can be transplanted into an ailing patient. A living donor can also donate a portion of the pancreas and still retain pancreas functionality.Intestine: After death, a donor can donate their intestine. Although quite rare, a living donor can donate a portion of the intestine.In addition to organs, you can also donate tissues such as corneas, skin, bones, ligaments, heart valves etc.'
    },
    {
      title: 'Types of Organ Donations',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'What is the process of Organ Donation?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum.'
    },
    {
      title: 'Law Governing Organ Donation in India',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Brain Death and Organ Donation',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum.'
    },
    {
      title: 'What happens once Brain Stem Death is Declared?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'How long can an organ survive inside and outside the body in a Deceased Organ Donation?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'How to register as an organ donor?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <>
      <div className="container flex-center">
        <h1 className="section-title-01">&nbsp;</h1>
        <h2 className="section-title-02">Learn&nbsp; About &nbsp; Organ &nbsp; Donation &nbsp; System</h2>
      </div>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
};

export default LearnAbout;