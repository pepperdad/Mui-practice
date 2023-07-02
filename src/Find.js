const mongoose = require("mongoose");

// MongoDB 연결 정보
const url = "mongodb://localhost:27017/mydatabase"; // MongoDB 서버 주소와 데이터베이스 이름

// 스키마 정의
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

// 모델 생성
const DataModel = mongoose.model("Data", dataSchema);

// MongoDB에서 데이터 조회
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");

    // 모든 데이터 조회
    DataModel.find()
      .then((data) => {
        console.log("조회된 데이터:", data);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("데이터 조회 오류:", err);
        mongoose.connection.close();
      });

    // 조건에 맞는 데이터 조회
    DataModel.find({ age: { $gt: 20 } })
      .then((data) => {
        console.log("조건에 맞는 데이터:", data);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("데이터 조회 오류:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("MongoDB 연결 오류:", err);
  });

//   위의 예제에서는 DataModel.find()을 사용하여 모든 데이터를 조회하고 DataModel.find({ age: { $gt: 20 } })를 사용하여 나이가 20보다 큰 데이터를 조회합니다.

// mongoose.connect를 사용하여 MongoDB에 연결하고 연결이 성공하면 DataModel.find()를 호출하여 데이터를 조회합니다. 조회된 데이터는 콘솔에 출력됩니다.
