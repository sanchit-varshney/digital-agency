import React, { useEffect } from "react";
import styled from "styled-components";
import { useData } from "../hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { setData, setStatus } from "../store/dataSlice";
import { RootState } from "../store";

// Styled components
const LoadingWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  height:38vh
`;

const ErrorWrapper = styled.div`
  background-color: #ffe0e0;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  color: #f00;
  height:38vh
`;

const DataWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const DataDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state: RootState) => state.data);
  const { data: queryData, isLoading, isError } = useData();

  useEffect(() => {
    if (isLoading) {
      dispatch(setStatus("loading"));
    } else if (isError) {
      dispatch(setStatus("failed"));
    } else if (queryData) {
      dispatch(setData(queryData));
      dispatch(setStatus("succeeded"));
    }
  }, [queryData, isLoading, isError, dispatch]);

  if (status === "loading") {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  if (status === "failed") {
    return <ErrorWrapper>Error fetching data.</ErrorWrapper>;
  }

  return (
    <DataWrapper>
      <Title>Data</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            {item.name}: {item.description}
          </ListItem>
        ))}
      </List>
    </DataWrapper>
  );
};

export default DataDisplay;
