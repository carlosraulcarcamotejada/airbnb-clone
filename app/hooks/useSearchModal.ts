import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { close, open } from "../store/searchModal/searchModalSlice";

const useSearchModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const searchModal = useSelector((state: RootState) => state.searchModal);

  const onOpen = () => {
    dispatch(open());
  };

  const onClose = () => {
    dispatch(close());
  };

  return {
    //PROPERTIES
    ...searchModal,
    //METHODS
    onClose,
    onOpen,
  };
};

export { useSearchModal };
