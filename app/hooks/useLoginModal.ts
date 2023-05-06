import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { close, open } from "../store/loginModal/loginModalSlice";

const useLoginModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const loginModal = useSelector((state: RootState) => state.loginModal);

  const onOpen = () => {
    dispatch(open());
  };

  const onClose = () => {
    dispatch(close());
  };

  return {
    //PROPERTIES
    ...loginModal,
    //METHODS
    onClose,
    onOpen,
  };
};

export { useLoginModal };
