import { useForm } from "react-hook-form";

const MyForm2 = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, dirtyFields },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 폼 필드 등록 */}
      <input type="text" {...register("name")} />
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />

      {/* 폼 상태 정보 사용 */}
      <p>{errors.name?.message}</p>
      <p>
        {dirtyFields.name
          ? "이름 필드가 수정되었습니다."
          : "이름 필드가 수정되지 않았습니다."}
      </p>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "제출 중..." : "제출"}
      </button>
    </form>
  );
};

export default MyForm2;
// 위의 예제에서 formState 객체의 속성들을 활용하여 다음과 같은 작업을 수행합니다:

// isSubmitting: 폼 제출 중인지 여부를 나타내는 변수입니다. 제출 버튼을 클릭하면 true로 설정되어 제출이 진행되는 동안 버튼이 비활성화됩니다.
// errors: 유효성 검사 에러 객체입니다. 각 필드에 대한 에러 메시지가 포함되어 있습니다. 예제에서는 errors.name?.message를 사용하여 이름 필드의 에러 메시지를 표시합니다.
// dirtyFields: 수정된 필드를 나타내는 객체입니다. 예제에서는 dirtyFields.name을 사용하여 이름 필드가 수정되었는지 여부를 확인하고 메시지를 표시합니다.
// 이러한 속성들을 활용하여 폼 상태를 추적하고, 에러 메시지를 표시하고, 필드의 수정 여부를 확인할 수 있습니다. 또한, 제출 버튼의 활성화 여부를 isSubmitting 속성을 통해 제어할 수 있습니다.
