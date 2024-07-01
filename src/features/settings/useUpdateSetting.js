import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isEditing } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("Setting was successfully edited");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateSetting, isEditing };
}
