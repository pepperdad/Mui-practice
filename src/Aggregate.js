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

// MongoDB에서 데이터 집계
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");

    DataModel.aggregate([
      {
        $group: {
          _id: null,
          totalAge: { $sum: "$age" },
          count: { $sum: 1 },
        },
      },
    ])
      .then((result) => {
        console.log("집계 결과:", result);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("집계 오류:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("MongoDB 연결 오류:", err);
  });

//   위의 예제에서는 DataModel.aggregate를 사용하여 MongoDB에서 데이터를 집계합니다. aggregate 메서드의 파이프라인 단계를 배열로 정의하여 집계 작업을 수행합니다. 이 예제에서는 $group 연산자를 사용하여 모든 데이터의 나이 총합과 데이터 수를 계산합니다.

// mongoose.connect를 사용하여 MongoDB에 연결하고 연결이 성공하면 DataModel.aggregate를 호출하여 데이터를 집계합니다. 집계 결과는 result 변수에 저장되고 콘솔에 출력됩니다.
