import React from 'react';
import { Row, Col, Switch } from 'antd';

import style from './style.module.scss';

const ToggleButtons = ({
    name,
    size
}) => {
    return (
        <>
            <div className={style["switch-container"]}>
                <Row gutter={[8,8]}>
                    <Col><Switch size={size} /></Col>
                    <Col><div>{name}</div></Col>
                </Row>
            </div>
        </>
    );
}

export default ToggleButtons;