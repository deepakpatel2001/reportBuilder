import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect'

const Management = () => {
    const [selectedCities, setSelectedCities] = useState(null);
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
              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={managerPermission} optionLabel="name"
                placeholder="Management Permissions" maxSelectedLabels={3} className="w-full md:w-22rem" />
          </div>
    </>
  )
}

export default Management