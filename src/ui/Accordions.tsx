import { FC } from "react";
import { Accordion } from "../components/Accordion";
import { Tab } from "../components/Tab";
import { Code } from "./Code";
import { Heading } from "./Heading";
import { accordionCode } from "./snipets";

const AccordionUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Accordions</Heading>

      <div className="  py-2">
        <Tab
          onTabItemChange={(tab: number) => {
            console.log(tab);
          }}
        >
          <div className="flex">
            <Tab.Header tab={0}> Preview </Tab.Header>
            <Tab.Header tab={1}> Code </Tab.Header>
          </div>
          <div className="flex">
            <Tab.Content tab={0}>
              <Accordion>
                <Accordion.Item>
                  <Accordion.ItemHeader className="space-x-5 px-2 h-8 hover:bg-primary/20 border-b">
                    <h3>Item 1</h3>
                  </Accordion.ItemHeader>
                  <Accordion.ItemBody className=" text-justify">
                    <p className="leading-6 font-light text-justify">
                      Dignissimos necessitatibus repudiandae asperiores,
                      pariatur maxime quos architecto iste! Voluptate omnis
                      harum consequuntur rerum tenetur doloremque quae maiores
                      necessitatibus ab. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Delectus, corrupti excepturi? Quod
                      perferendis quos, labore eum voluptatem, beatae alias
                      dignissimos maiores consequuntur, nobis blanditiis
                      assumenda nulla aut sed nisi nam?
                    </p>
                  </Accordion.ItemBody>
                </Accordion.Item>

                <Accordion.Item>
                  <Accordion.ItemHeader className="space-x-5 px-2 h-8 hover:bg-primary/20 border-b">
                    <h3>Item 2</h3>
                  </Accordion.ItemHeader>
                  <Accordion.ItemBody>
                    <p className="leading-6 font-light text-justify">
                      Our asked sex point her she seems. New plenty she horses
                      parish design you. Stuff sight equal of my woody. Him
                      children bringing goodness suitable she entirely put far
                      daughter. Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Quas doloribus dolorum dicta officiis
                      dolores ratione esse voluptas sequi mollitia cum soluta
                      sint, eaque autem adipisci consequatur necessitatibus quia
                      culpa ipsum? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Est, aliquam. Dignissimos necessitatibus
                      repudiandae asperiores, pariatur maxime quos architecto
                      iste! Voluptate omnis harum consequuntur rerum tenetur
                      doloremque quae maiores necessitatibus ab. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Delectus,
                      corrupti excepturi? Quod perferendis quos, labore eum
                      voluptatem, beatae alias dignissimos maiores consequuntur,
                      nobis blanditiis assumenda nulla aut sed nisi nam?
                    </p>
                  </Accordion.ItemBody>
                </Accordion.Item>

                <Accordion.Item>
                  <Accordion.ItemHeader className="space-x-5 px-2 h-8 hover:bg-primary/20 border-b">
                    <h3>Item 3</h3>
                  </Accordion.ItemHeader>
                  <Accordion.ItemBody>
                    <p className="leading-6 font-light text-justify">
                      Our asked sex point her she seems. New plenty she horses
                      parish design you. Stuff sight equal of my woody. Him
                      children bringing goodness suitable she entirely put far
                      daughter. Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </p>
                  </Accordion.ItemBody>
                </Accordion.Item>
              </Accordion>
            </Tab.Content>
            <Tab.Content tab={1}>
               <Code content={accordionCode} />;
            </Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default AccordionUI;
