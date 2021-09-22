import React, { FC } from 'react';
import { Modal } from 'antd';
import { IModal } from '../../interfaces';

export const ModalComponent:FC<IModal> = ({children,isModalVisible,setIsModalVisible}) => {
  

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};
