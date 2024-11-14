import React, { useState } from "react";
import type { ChangeEvent, FC } from "react";
import { Input } from "antd";

const { Search } = Input;

const ListSearch: FC = () => {
  const [value, setValue] = useState("");
  const handleSearch = (value: string) => {
    console.log("value", value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <Search
      placeholder="请输入要搜索的内容"
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: "200px" }}
    />
  );
};

export default ListSearch;
