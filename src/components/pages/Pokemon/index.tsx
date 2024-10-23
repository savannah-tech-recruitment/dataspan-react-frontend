import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import { useGetPokemon } from "queries/pokemon";
import { Container } from "./styled";
import { PokeMonData } from "types";

const { Search } = Input;

const PokeMon = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading } = useGetPokemon((currentPage - 1) * limit, limit);
  const [filteredData, setFilteredData] = useState<PokeMonData[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
  ];

  useEffect(() => {
    if (data?.data?.results) {
      setFilteredData(data.data.results);
    }
  }, [data]);

  const handleSearch = (value: string) => {
    const result = data?.data?.results.filter((x: PokeMonData) =>
      x.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(result || []);
  };

  const paginationConfig = {
    current: currentPage,
    pageSize: limit,
    total: data?.data?.count || 0,
    onChange: (page: number) => {
      setCurrentPage(page);
    },
    showSizeChanger: false,
  };

  return (
    <Container>
      <Search
        placeholder="Input search text"
        enterButton="Search"
        size="large"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        loading={isLoading}
        rowKey="name"
        pagination={paginationConfig}
      />
    </Container>
  );
};

export default PokeMon;
