const MongoClient = require("mongodb").MongoClient;

// MongoDB 연결 정보
const url = "mongodb://localhost:27017"; // MongoDB 서버 주소
const dbName = "mydatabase"; // 사용할 데이터베이스 이름

// 데이터 샘플
const newData = { name: "John Doe", age: 25, email: "john@example.com" };

// MongoDB에 데이터 저장
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error("MongoDB 연결 오류:", err);
    return;
  }

  console.log("MongoDB에 연결되었습니다.");

  const db = client.db(dbName);
  const collection = db.collection("mycollection"); // 사용할 컬렉션 이름

  collection.insertOne(newData, (err, result) => {
    if (err) {
      console.error("데이터 저장 오류:", err);
      client.close();
      return;
    }

    console.log("데이터가 성공적으로 저장되었습니다.");
    client.close();
  });
});
// 위의 예제에서 url 변수에는 MongoDB 서버의 주소가 입력되어 있습니다. dbName 변수에는 사용할 데이터베이스의 이름을 지정해야 합니다. newData 변수에는 저장할 데이터가 포함되어 있습니다.

// MongoClient.connect 메서드를 사용하여 MongoDB에 연결합니다. 연결이 성공하면 db 변수에 데이터베이스 객체를 얻을 수 있습니다. collection 변수에는 데이터를 저장할 컬렉션 이름이 입력됩니다.

// collection.insertOne 메서드를 사용하여 데이터를 저장합니다. 첫 번째 인수로 저장할 데이터를 전달하고, 두 번째 인수로 콜백 함수를 제공합니다. 콜백 함수는 데이터 저장이 완료되면 호출되며, 에러 발생 시 오류 정보를 포함합니다.

// 저장이 성공하면 콘솔에 메시지를 출력하고 client.close()를 호출하여 MongoDB 연결을 닫습니다.
