import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // 데이터를 가져오는 비동기 함수를 호출합니다.
    const fetchData = async () => {
      try {
        // 데이터를 가져오는 로직을 구현합니다.
        // 예시로 3초 후에 데이터를 설정합니다.
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const fetchedData = "Hello, World!";
        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <CircularProgress />; // 로딩 중인 경우 로딩 스피너를 표시합니다.
  }

  return (
    <div>
      <h2>Data Page</h2>
      <p>Data: {data}</p>
    </div>
  );
};

export default MyComponent;
