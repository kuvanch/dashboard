import React, { FC } from 'react';
import { Modal } from 'antd';
import { IModal } from '../../interfaces';

export const ModalComponent:FC<IModal> = ({children,loading = false,isModalVisible,setIsModalVisible,title,handleOk,width}) => {

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal confirmLoading={loading} title={title} width={width} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};
