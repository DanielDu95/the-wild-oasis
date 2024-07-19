import { useMutation, useQueryClient } from "react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success(`booking is successfully deleted `);
      queryClient.invalidateQueries({ queryKey: "bookings" });
    },
    onError: () => {
      toast.error("There was an error while deleting the booking");
    },
  });
  return { deleteBooking, isDeletingBooking };
}
