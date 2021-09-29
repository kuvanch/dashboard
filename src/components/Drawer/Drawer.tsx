import { Drawer } from 'antd';
import { FC } from 'react';
import { IDrawer } from '../../interfaces';


export const DrawerComponent:FC<IDrawer> = ({children,setVisible,visible}):JSX.Element => {
    

    const onClose = () => {
        setVisible(false)
    };
    return (
      <>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          {children}
         </Drawer>
      </>
    );
}