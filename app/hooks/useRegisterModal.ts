import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { close, open } from "../store/registerModal/registerModalSlice";

const useRegisterModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const registerModal = useSelector((state: RootState) => state.registerModal);

  const onOpen = () => {
    dispatch(open());
  };

  const onClose = () => {
    dispatch(close());
  };

  return {
    //PROPERTIES
    ...registerModal,
    //METHODS
    onOpen,
    onClose,
  };
};

export { useRegisterModal };
