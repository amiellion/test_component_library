import { sortBy } from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as AUTH_SLICE from '@/store/auth/authSlice';

import { Button } from 'antd';
import style from './index.module.scss';
import { confirm } from '@/utils/alertModal';
import { notif_info, notif_success } from '@/utils/notifications';
import ROLE_ID, { RoleDisplayName } from '@/constants/role_id';
import { isUrlArcs } from '@/constants/';

const mapStateToProps = ({ dispatch, auth }) => ({
    dispatch,
    auth
});

const RoleButtons = ({ dispatch, auth, hideModal }) => {
    useEffect(() => {
        console.log({ button_roles: auth.roles });
    });
    // const mapRoles = auth.roles.map((role, index) => (
    const isRolesValidArray = Array.isArray(auth?.roles);
    const arrangedRoles = isRolesValidArray ? sortBy(auth?.roles) : [];
    const mapRoles = arrangedRoles.map((role, index) => (
        <>
            <Button
                key={`item_${role}_${index}`}
                type={role.toLowerCase() === "member" && 'primary'}
                size='large'
                onClick={() => {
                    confirm({
                        title: 'Confirm',
                        content: `Login as ${RoleDisplayName[role.toLowerCase()]}?`,
                        onOk: () => {
                            notif_success({ title: `Success!`, description: `Logged in as ${RoleDisplayName[role.toLowerCase()]}` });
                            dispatch(AUTH_SLICE.CHOOSE_ROLE({ role, email: auth.email }));
                            hideModal && hideModal();
                        },
                        onCancel: () => notif_info({ title: 'Changing of role cancelled.' })
                    });

                }}
            >
                {`${RoleDisplayName[role.toLowerCase()]}`}
            </Button>
        </>
    ));
    if (!isUrlArcs) {
        mapRoles.push(
            <Button
                key={`item_hr_employee_test`}
                type={RoleDisplayName[ROLE_ID.hr_employee].toLowerCase() === "member" && 'primary'}
                size='large'
                onClick={() => {
                    confirm({
                        title: 'Confirm',
                        content: `Login as ${RoleDisplayName[ROLE_ID.hr_employee]}?`,
                        onOk: () => {
                            notif_success({ title: `Success!`, description: `Logged in as ${RoleDisplayName[ROLE_ID.hr_employee]}` });
                            dispatch(AUTH_SLICE.CHOOSE_ROLE({ role: ROLE_ID.hr_employee, email: auth.email }));
                            hideModal && hideModal();
                        },
                        onCancel: () => notif_info({ title: 'Changing of role cancelled.' })
                    });

                }}
            >
                {`${RoleDisplayName[ROLE_ID.hr_employee.toLowerCase()]}`}
            </Button>
        );
        mapRoles.push(
            <Button
                key={`item_hr_admin_test`}
                type={RoleDisplayName[ROLE_ID.hr_admin].toLowerCase() === "member" && 'primary'}
                size='large'
                onClick={() => {
                    confirm({
                        title: 'Confirm',
                        content: `Login as ${RoleDisplayName[ROLE_ID.hr_admin]}?`,
                        onOk: () => {
                            notif_success({ title: `Success!`, description: `Logged in as ${RoleDisplayName[ROLE_ID.hr_admin]}` });
                            dispatch(AUTH_SLICE.CHOOSE_ROLE({ role: ROLE_ID.hr_admin, email: auth.email }));
                            hideModal && hideModal();
                        },
                        onCancel: () => notif_info({ title: 'Changing of role cancelled.' })
                    });

                }}
            >
                {`${RoleDisplayName[ROLE_ID.hr_admin.toLowerCase()]}`}
            </Button>
        );
    }
    return (
        <>
            <div className={style["buttonContainer"]}>
                {mapRoles}
                {/* <Button
                    // key={`item_${role}_${index}`}
                    type={'member'.toLowerCase() === "member" && 'primary'}
                    size='large'
                    onClick={() => {
                        const role = 'member'
                        confirm({
                            title: 'Confirm',
                            content: `Login as ${RoleDisplayName[role]}?`,
                            onOk: () => {
                                notif_success({ title: `Success!`, description: `Logged in as ${RoleDisplayName[role]}` })
                                dispatch(AUTH_SLICE.CHOOSE_ROLE({ role, email: auth.email }))
                                hideModal && hideModal();
                            },
                            onCancel: () => notif_info({ title: 'Log in as" action cancelled' })
                        })

                    }}
                >
                    {`${RoleDisplayName['member']}`}
                </Button> */}
            </div>
        </>
    );
};

export default connect(mapStateToProps)(RoleButtons);;