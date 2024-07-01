import { useQuery } from "react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isloading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isloading, error, settings };
}
