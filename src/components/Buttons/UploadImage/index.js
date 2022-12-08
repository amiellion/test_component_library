import React from 'react';
import { Upload } from 'antd';
// import Card from '@app/system/general/uploadFile/local_components/card';
import { PrimaryDashed } from '@/components/app/widgets/buttons/arcs_buttons';


const UploadImage = () => {

    return (
        <>
            <Upload>
                <p>
                    <PrimaryDashed />
                </p>
                <p className="ant-upload-hint">Click or drag file to this area to upload</p>
                
            </Upload>
        </>
    );
}

export default UploadImage;