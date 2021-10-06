import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { IUpload } from '../../interfaces';
import axios from 'axios';





export const UploadComponent:FC<IUpload> = ({imgUpload,setImgUpload}) => {

    const onChange = (info?:any) => {
          if (info.file.status === 'done') {
            message.success(`${info.file.name} rasm yuklandi`);
            let fileList = [...info.fileList];
            fileList = fileList.slice(-1);
            setImgUpload({...imgUpload,photoId: fileList[0]})
            
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} rasm yuklashda xatolik`);
          }
        }
        const uploadImage = options => {

          const { onSuccess, onError, file } = options;
        
          const fmData = new FormData();
          const config = {
            headers: { "content-type": "multipart/form-data",'Authorization': `Bearer ${localStorage.getItem('token')}`},
          };
          fmData.append("image", file);
          axios
            .post("http://164.90.163.79:3698/api/attachment/upload", fmData, config)
            .then(res => {
              onSuccess(file);
              setImgUpload({...imgUpload, photoIds: res.data })
            })
            .catch(err=>{
              const error = new Error('Some error');
              onError({event:error});
            });
        }
    return (
      <Upload name='file' onChange={onChange} customRequest={uploadImage}>
        <Button icon={<UploadOutlined />}>Rasm yuklash</Button>
      </Upload>
    )
}