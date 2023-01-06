
import * as React from 'react';

type Prop = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
    // loading?: boolean
    inputClass ?: string
}

const SearchField: React.FC<Prop> = (prop) => {
 
   
  return (
    <div className={`flex p-1 items-center `+ prop.className}>
      <div className="mr-2">
        {/* <SearchIcon color="primary" /> */}
      </div>
      <input
        {...prop}
        className={`flex-1 h-full ring-0 focus:outline-none focus:ring-0 ${prop.inputClass}`}
        type="search"
      />
      {/* { prop.loading && <CircularProgress  style={{ width: "15px", height:"15px"}}/>} */}
    </div>
  );
};

export default SearchField;