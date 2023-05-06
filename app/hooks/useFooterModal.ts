import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { close, open } from "../store/footerModal/footerModalSlice";

const useFooterModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const footerModal = useSelector((state: RootState) => state.footerModal);

  const onOpen = () => {
    dispatch(open());
  };

  const onClose = () => {
    dispatch(close());
  };

  return {
    //PROPERTIES
    ...footerModal,
    //METHODS
    onClose,
    onOpen,
  };
};

export { useFooterModal };
