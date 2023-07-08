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
// useEffect 훅을 사용하여 컴포넌트가 마운트되었을 때 데이터를 가져오는 비동기 함수를 호출합니다. 데이터를 가져오는 로직은 프로젝트의 요구사항에 맞게 구현해야 합니다. 이 예시에서는 3초 후에 데이터를 설정하는 비동기 처리를 예시로 사용하였습니다.

// isLoading 상태를 확인하여 로딩 중인 경우에는 CircularProgress 컴포넌트를 표시합니다. 데이터가 로딩되어 isLoading이 false로 변경되면, 실제 데이터를 화면에 표시합니다.

// 위의 코드 예시에서는 CircularProgress 컴포넌트를 사용하여 MUI에서 제공하는 로딩 스피너를 활용하였습니다. 로딩 중에는 로딩 스피너가 보여지고, 데이터가 로딩되면 데이터가 화면에 표시됩니다. 이렇게 구현하면 사용자에게 로딩 상태를 시각적으로 보여주고, 데이터가 불러와진 후에 화면을 보여줄 수 있습니다.
