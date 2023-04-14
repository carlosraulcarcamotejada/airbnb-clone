import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { onClose, onOpen } from "../store/registerModal/registerModalSlice";

const useRegisterModalStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const registerModal = useSelector((state: RootState) => state.registerModal);

  const open = () => {
    dispatch(onOpen());
  };

  const close = () => {
    dispatch(onClose());
  };

  return {
    //PROPERTIES
    ...registerModal,
    //METHODS
    open,
    close,
  };
};

export { useRegisterModalStore };
