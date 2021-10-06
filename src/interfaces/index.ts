export interface IHeader  {
    collapsed: boolean,
    handleTrigger: () => void
}

export interface ISidebar {
    collapsed: boolean
}
export interface IAuthData {
    user_phone: string;
    user_password: string;
} 
export interface ITable {
    columns: ITableColumn[];
    dataSource?: any;
    title: string;
    value?: string;
    loading?: boolean;
    showModal?: () => void;
    onChange?: () => void
}
export interface ITableColumn {
    title: string,
    dataIndex: string,
    key: string,
}

export interface ITableDataSource {
    key: string,
    name: string,
    age: number,
    address: string,
}


export interface IInitialStateAuth {
    data: IUser;
    isloading: boolean;
    isAuth: boolean;
    message: string
}

export interface IUser {
    user_id: number;
    role_id: number;
    user_full_name: string;
    user_image?: any;
    user_phone: string;
    user_token: string;
    user_passport?: any;
    user_status: string;
    user_gender: string;
    district_id?: any;
    user_address?: any;
    user_data?: any;
    admin_id: number;
    created_at?: any;
    updated_at: string;
}


export interface IModal {
    isModalVisible: boolean;
    setIsModalVisible: any;
    title: string;
    width?: null | 1000;
    loading?: boolean;
    handleOk?: (values:any) => void
}

export interface IDrawer {
    visible: boolean;
    setVisible?: any
}

export interface IUpload {
    imgUpload?: any;
    setImgUpload?: any;
}

export interface INewsState {
    title: string;
    description: string;
    photoId: string[];
}

export interface INewsData {
    id: string;
    title: string;
    description: string;
    attachment: string[];
    views: number | null;
    createdAt: number;
    updatedAt: number;
}


export interface IMinisterData {
    id?: number;
    firstName: string;
    lastName: string;
    middleName: string;
    description: string;
    email: string;
    phoneNumber: string;
    photoIds: string[]
}