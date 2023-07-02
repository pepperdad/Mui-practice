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

// 데이터 샘플
const newData = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
};

// MongoDB에 데이터 저장
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");

    DataModel.create(newData)
      .then(() => {
        console.log("데이터가 성공적으로 저장되었습니다.");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("데이터 저장 오류:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("MongoDB 연결 오류:", err);
  });

  
물론입니다! Mongoose는 MongoDB와의 상호작용을 더 쉽게 만들어주는 MongoDB를 위한 ODM(Object Data Modeling) 라이브러리입니다. 아래 예제는 Mongoose를 사용하여 MongoDB에 데이터를 저장하는 코드입니다:

javascript
Copy code
const mongoose = require('mongoose');

// MongoDB 연결 정보
const url = 'mongodb://localhost:27017/mydatabase'; // MongoDB 서버 주소와 데이터베이스 이름

// 스키마 정의
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  name: String,
  age: Number,
  email: String
});

// 모델 생성
const DataModel = mongoose.model('Data', dataSchema);

// 데이터 샘플
const newData = {
  name: 'John Doe',
  age: 25,
  email: 'john@example.com'
};

// MongoDB에 데이터 저장
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB에 연결되었습니다.');

    DataModel.create(newData)
      .then(() => {
        console.log('데이터가 성공적으로 저장되었습니다.');
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error('데이터 저장 오류:', err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error('MongoDB 연결 오류:', err);
  });
  
// 위의 예제에서 mongoose 패키지를 사용하여 MongoDB와의 연결을 설정하고 데이터를 저장하는 과정을 담고 있습니다.

// 먼저, mongoose.Schema를 사용하여 데이터의 스키마를 정의합니다. dataSchema는 name, age, email 필드로 구성된 데이터의 구조를 정의합니다.

// 다음으로 mongoose.model을 사용하여 DataModel이라는 모델을 생성합니다. Data는 모델의 이름이고, dataSchema는 해당 모델에 적용할 스키마입니다.

// mongoose.connect를 사용하여 MongoDB에 연결합니다. 연결이 성공하면 DataModel.create를 사용하여 새 데이터를 생성하고 저장합니다. newData 변수에 저장할 데이터가 포함되어 있습니다.

// 저장이 완료되면 콘솔에 메시지를 출력하고 mongoose.connection.close()를 호출하여 MongoDB 연결을 닫습니다.