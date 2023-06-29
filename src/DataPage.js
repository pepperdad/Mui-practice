// import React from "react";

// const DataPage = ({ data }) => {
//   return (
//     <div>
//       <h2>Data Page</h2>
//       <p>Data: {data}</p>
//     </div>
//   );
// };

// export default DataPage;

import React from "react";
import { useParams } from "react-router-dom";

const DataPage = () => {
  const { data } = useParams();
  console.log(data + " 데이터");

  return (
    <div>
      <h2>Data Page</h2>
      <p>Data: {data}</p>
    </div>
  );
};

export default DataPage;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const DataPage = () => {
//   const { dataId } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // 데이터를 가져오는 비동기 함수를 호출합니다.
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/data/${dataId}`);
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [dataId]);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Data Page</h2>
//       <p>Data: {data}</p>
//     </div>
//   );
// };

// export default DataPage; // DB에서 데이터 가져옴 위의 코드에서는 useEffect 훅을 사용하여 페이지가 로드될 때 데이터를 가져오도록 설정합니다. 비동기 함수 fetchData를 정의하고, 해당 함수에서 API를 호출하여 데이터를 가져옵니다. 그리고 데이터가 로딩 중인 동안에는 "Loading..."이라는 메시지를 보여주도록 처리합니다. 데이터가 준비되면 해당 데이터를 화

// 코드에서 비동기 처리를 사용하는 이유는 데이터를 서버로부터 가져오는 작업이 시간이 걸릴 수 있기 때문입니다.

// 만약 데이터를 동기적으로 가져오는 방식을 사용한다면, 데이터를 가져오는 동안 화면이 멈추게 되어 사용자는 대기 상태에 머물러야 합니다. 이는 사용자 경험을 저하시키고, 응답이 느리거나 데이터 양이 많을 경우 화면이 응답하지 않는 것처럼 보일 수 있습니다.

// 비동기 처리를 사용하면 데이터를 가져오는 동안 화면이 멈추지 않고 다른 작업을 수행할 수 있습니다. 이는 사용자 경험을 향상시키고, 응답이 오래 걸리는 작업에서도 화면이 응답하고 사용자는 다른 작업을 수행할 수 있게 됩니다.

// 따라서 데이터를 서버로부터 가져오는 작업은 주로 비동기 처리를 사용하여 수행하며, 위의 코드에서는 비동기 함수를 사용하여 데이터를 가져오고, 데이터가 준비되면 화면에 표시하는 방식을 채택하고 있습니다. 이를 통해 사용자 경험을 향상시킬 수 있습니다.
