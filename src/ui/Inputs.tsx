import React, { useEffect } from "react";
import { FC } from "react";
import { SearchField } from "../components/SearchField/";
import { SelectField } from "../components/SelectField/";
import { NumericField, TextField } from "../components/TextField/";
import { Dropdown } from "../components/Dropdown";
import { Heading } from "./Heading";
import { Tab } from "../components/Tab";
import { TextArea } from "../components/TextArea";
import { Select } from "../components/Select";

const InputUI: FC<{ className?: string }> = (prop) => {
  const [countries, setCountries] = React.useState<{ name: string }[]>([]);
  const [city, setCity] = React.useState("");
  const [city2, setCity2] = React.useState("");

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
                  <NumericField placeholder="only numeric" />
                  <TextField error placeholder="error" />
                </div>
                <div className="flex items-center flex-wrap gap-8">
                  <Select placeholder="select country">
                    {countries?.map((country, i) => (
                      <option key={i} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                    )
                  </Select>

                  <Select error placeholder="select country">
                    {countries?.map((country, i) => (
                      <option key={i} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                    )
                  </Select>

    

                </div>
                <div className="flex items-center flex-wrap gap-8 my-5">
                  <SelectField
                    placeholder="select country"
                    searchPlaceholder="search country"
                    items={countries.map((country) => {
                      return { value: country.name, title: country.name };
                    })}
                    value={city}
                    onChange={setCity}
                  />
                  <SelectField
                    placeholder="select country"
                    error
                    items={countries.map((country) => {
                      return { value: country.name, title: country.name };
                    })}
                    value={city2}
                    onChange={setCity2}
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
