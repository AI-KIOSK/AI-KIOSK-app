import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalSelectorFamily } from 'recoil/common/modal/selector';

const useModal = (modalId) => {
  const [modal, setModal] = useRecoilState(modalSelectorFamily(modalId));
  const resetModal = useResetRecoilState(modalSelectorFamily(modalId));

  const openModal = () => {
    setModal((prev) => ({ ...prev, visible: true }));
  };

  const openOtherModal = () => {
    setModal((prev) => ({ ...prev, visible: true }));
  };

  const hideModal = () => {
    setModal((prev) => ({ ...prev, visible: false }));
  };

  const closeModal = () => {
    resetModal();
  };

  return { modal, setModal, openModal, openOtherModal, hideModal, closeModal };
};

export { useModal };
