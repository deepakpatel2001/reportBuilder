import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Dialog } from 'primereact/dialog';

const CreateRole = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [displayManagementModal, setDisplayManagementModal] = useState(false);

    const roles = [
        { name: 'Department Manager', code: 'NY' },
        { name: 'Data Analyst', code: 'RM' },
        { name: 'Marketing Coordinator', code: 'LDN' },
        { name: 'Human Resources Manager', code: 'IST' },
        { name: 'IT Administrator', code: 'PRS' },
        { name: 'Sales Manager', code: 'PRS' },
        { name: 'Customer Support Specialist', code: 'PRS' },
        { name: 'Financial Analyst', code: 'PRS' },
        { name: 'Executive Manager', code: 'PRS' },
        { name: 'Operations Manager', code: 'PRS' },
    ];

    const handleRoleSelection = (e) => {
        setSelectedRole(e.value);
        if (e.value && e.value.length > 0 && e.value[0].name === 'Department Manager') {
            setDisplayManagementModal(true);
        } else {
            setDisplayManagementModal(false);
        }
    }

    const hideManagementModal = () => {
        setDisplayManagementModal(false);
    }

    return (
        <>
            <div className="card flex justify-content-center">
                <MultiSelect value={selectedRole} onChange={handleRoleSelection} options={roles} optionLabel="name"
                    placeholder="Select Role" maxSelectedLabels={3} className="w-full md:w-20rem" />
            </div>

            <Dialog visible={displayManagementModal} onHide={hideManagementModal} header="Management Permissions">
                <Management />
            </Dialog>
        </>
    );
}

const Management = () => {
    const [selectedPermission, setSelectedPermission] = useState(null);
    const managerPermission = [
        { name: 'View department-specific data', code: 'NY' },
        { name: 'Manage department data', code: 'RM' },
        { name: 'Approve department-specific data', code: 'LDN' },
        { name: 'Manage department access', code: 'IST' },
        { name: 'View organization-wide data', code: 'PRS' },
        { name: 'Export data', code: 'PRS' },
        { name: 'Manage department Specific Data', code: 'PRS' },
    ];

    return (
        <>
            <div className="card flex justify-content-center">
                <MultiSelect value={selectedPermission} onChange={(e) => setSelectedPermission(e.value)} options={managerPermission} optionLabel="name"
                    placeholder="Management Permissions" maxSelectedLabels={3} className="w-full md:w-22rem" />
            </div>
        </>
    )
}

export default CreateRole;