import React, { useEffect } from "react";
import { FC } from "react";
import { SearchField } from "../components/SearchField/";
import { SelectField } from "../components/SelectField/";
import { TextField } from "../components/TextField/";
import { Dropdown } from "../components/Dropdown";
import { Heading } from "./Heading";
import { Tab } from "../components/Tab";
import { TextArea } from "../components/TextArea";

const InputUI: FC<{ className?: string }> = (prop) => {
  const [countries, setCountries] = React.useState<{ name: string }[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  function handleSelect(t: string) {
    console.log(t);
  }
  return (
    <div className={prop.className}>
      <Heading>TextField</Heading>

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
              <div className="p-4">
                <div className="flex items-center flex-wrap gap-8 py-2">
                  <SearchField placeholder="search" />
                  <TextField placeholder="normal" />
                  <TextField error placeholder="error" />
                </div>
                <div className="flex items-center flex-wrap gap-8">
                  <SelectField placeholder="select country">
                    {countries?.map((country, i) => (
                      <option key={i} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                    )
                  </SelectField>

                  <SelectField error placeholder="select country">
                    {countries?.map((country, i) => (
                      <option key={i} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                    )
                  </SelectField>
                </div>
                <div className="flex items-center flex-wrap gap-8 my-5">
                  <Dropdown
                    placeholder="select country"
                    items={countries.map((country) => {
                      return { value: country.name, title: country.name };
                    })}
                  />
                  <Dropdown
                    placeholder="select country"
                    error
                    items={countries.map((country) => {
                      return { value: country.name, title: country.name };
                    })}
                  />
                </div>

                <div className="flex items-center flex-wrap gap-8">
                   <TextArea rows={5} cols={300} placeholder="TextArea"/>
                </div>
              </div>
            </Tab.Content>
            <Tab.Content tab={1}>Code will be here</Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default InputUI;
