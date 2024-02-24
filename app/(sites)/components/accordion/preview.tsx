import { Accordion, AccordionItem } from "@/components/ui";

const Preview = () => {
  return (
    <div className="w-1/2">
      <Accordion>
        <AccordionItem label="First Label">
          <p>Content of the first label</p>
        </AccordionItem>
        <AccordionItem label="Second Label">
          <p>Content of the second label</p>
        </AccordionItem>
        <AccordionItem label="Third Label">
          <p>Content of the third label</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Preview;
