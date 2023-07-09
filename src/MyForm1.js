import { useForm } from "react-hook-form";

const MyForm1 = () => {
  const { register, handleSubmit, formState } = useForm();

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
      <p>{formState.errors.name?.message}</p>
      <p>
        {formState.touchedFields.name
          ? "이름 필드가 터치되었습니다."
          : "이름 필드가 터치되지 않았습니다."}
      </p>
      <p>
        {formState.dirtyFields.name
          ? "이름 필드가 수정되었습니다."
          : "이름 필드가 수정되지 않았습니다."}
      </p>
      <p>{formState.isSubmitting ? "제출 중입니다..." : "제출 가능합니다."}</p>

      <button type="submit" disabled={formState.isSubmitting}>
        제출
      </button>
    </form>
  );
};

export default MyForm1;
// 위의 예제에서 추가적으로 사용된 formState 속성들은 다음과 같습니다:

// touchedFields: 사용자가 필드에 터치(입력)한 경우에 해당 필드를 true로 표시합니다.
// dirtyFields: 필드가 수정되었을 경우에 해당 필드를 true로 표시합니다.
// isSubmitting: 폼 제출이 진행 중인지 여부를 나타내는 속성입니다. 제출 버튼을 클릭하면 true로 설정되며, 폼 제출이 완료되면 다시 false로 변경됩니다.
// 위의 예제는 몇 가지 속성들을 활용하여 폼 상태 정보를 표시하고, 해당 상태에 따라 화면을 업데이트합니다. 이러한 속성들을 활용하면 사용자에게 폼 상태에 대한 정보를 제공하거나, 폼의 상태에 따라 동적인 동작을 수행할 수 있습니다. 필요에 따라 해당 속성들을 활용하여 폼 상태를 관리하고 사용자에게 피드백을 제공할 수 있습니다.
