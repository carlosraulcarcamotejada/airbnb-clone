import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { close, open } from "../store/rentModal/rentModalSlice";

const useRentModalStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const rentModal = useSelector((state: RootState) => state.rentModal);

  const onOpen = () => {
    dispatch(open());
  };

  const onClose = () => {
    dispatch(close());
  };

  return {
    //PROPERTIES
    ...rentModal,
    //METHODS
    onOpen,
    onClose,
  };
};

export { useRentModalStore };
