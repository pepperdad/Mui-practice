import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MyReackHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginData, setLoginData] = useState({});

  const onSubmit = (data) => {
    console.log(data);
    setLoginData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}

        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Please enter a valid email</span>}

        <button type="submit">Submit</button>
      </form>

      <Typography>{loginData.name}</Typography>
      <Typography>{loginData.email}</Typography>
    </>
  );
};

export default MyReackHookForm;
// 위의 코드에서 useForm 훅을 사용하여 폼의 상태와 메소드를 초기화하고, register 메소드를 사용하여 각각의 입력 필드를 등록합니다. handleSubmit 메소드를 폼의 onSubmit 이벤트 핸들러로 설정하여 폼이 제출될 때 호출될 함수를 지정합니다.

// 유효성 검사 및 오류 메시지 표시하기:
// register 메소드를 사용하여 각 입력 필드를 등록할 때 유효성 검사 규칙을 함께 지정할 수 있습니다. errors 객체를 통해 오류 상태를 확인하고, 필요한 경우 오류 메시지를 표시할 수 있습니다.

// 데이터 제출하기:
// handleSubmit 메소드를 폼의 onSubmit 이벤트 핸들러로 설정하여 폼이 제출될 때 호출될 함수를 지정합니다. 데이터가 제출될 때 onSubmit 함수가 호출되며, 해당 함수에서 데이터를 처리하거나 API 요청을 보낼 수 있습니다.

// 이렇게 React Hook Form을 사용하여 간단한 폼을 관리할 수 있습니다. 더 자세한 내용과 고급 사용법은 React Hook Form 공식 문서를 참고하시면 도움이 됩니다.
