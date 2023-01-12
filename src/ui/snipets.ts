export const accordionCode = /* html */ `
 <Accordion>
        <Accordion.Item>
          <Accordion.ItemHeader className="space-x-5 px-2 h-8 hover:bg-primary/20 border-b">
            <h3>Item 1</h3>
          </Accordion.ItemHeader>
          <Accordion.ItemBody className=" text-justify">
          <p className="leading-6 font-light text-justify">
              Dignissimos necessitatibus repudiandae asperiores, pariatur maxime
            </p>
          </Accordion.ItemBody>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.ItemHeader className="space-x-5 px-2 h-8 hover:bg-primary/20 border-b">
            <h3>Item 2</h3>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <p className="leading-6 font-light text-justify">
              Our asked sex point her she seems. New plenty she horses parish
              design you. Stuff sight equal of my woody. Him children bringing
              goodness suitable she entirely put far daughter. 
            </p>
          </Accordion.ItemBody>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.ItemHeader className="space-x-5 px-2 h-8 hover:bg-primary/20 border-b">
            <h3>Item 3</h3>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
           <p className="leading-6 font-light text-justify">
              Our asked sex point her she seems. New plenty she horses parish
              design you. Stuff sight equal of my woody. Him children bringing
              goodness suitable she entirely put far daughter. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </Accordion.ItemBody>
        </Accordion.Item>
      </Accordion>
`;

export const alertCodeSnipet = /* html */ `
 <div className="flex flex-wrap gap-8  p-4">
                <div className="flex-1 flex flex-col justify-center gap-2 py-2">
                  <Alert variant="error">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="success">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="info">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="warning">
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2 py-2">
                  <Alert variant="error" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="success" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="info" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                  <Alert variant="warning" icon closable>
                    <Alert.Header>Warning Title goes Here</Alert.Header>
                    <Alert.Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent et pharetra dui, sed varius tellus.
                      <div>
                        <a
                          className="text-sm tracking-wide hover:underline"
                          href=""
                        >
                          See Detail
                        </a>
                      </div>
                    </Alert.Content>
                  </Alert>
                </div>
              </div>
`;

export const tableCodeSnipet = /* html */ `
 <Table className=" w-full bg-white dark:bg-transparent">
                <TableHead>
                  <TableRow>
                    <TableCell type="th">Date</TableCell>
                    <TableCell type="th">Name</TableCell>
                    <TableCell type="th">Status</TableCell>
                    <TableCell type="th">Ship to</TableCell>
                    <TableCell type="th">Payment method</TableCell>
                    <TableCell type="th">Sale Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, i) => {
                    return (
                      <TableRow hover key={i}>
                        <TableCell>16 Mar, 2019</TableCell>
                        <TableCell>Elvis Presley</TableCell>
                        <TableCell>
                          <div className={\`w-2 h-2 rounded-full \` + item} />
                        </TableCell>
                        <TableCell>Tupelo, MS</TableCell>
                        <TableCell>VISA ⠀•••• 3719</TableCell>
                        <TableCell>$312.44</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
`;
