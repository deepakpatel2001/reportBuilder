import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect'

const Filteration = () => {
    const [selectedCities, setSelectedCities] = useState(null);
    const filteration = [
        { name: 'Name', code: 'NY' },
        { name: 'Date', code: 'RM' },
        { name: 'Older', code: 'LDN' },
        { name: 'Newer', code: 'IST' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={filteration} optionLabel="name"
                placeholder="Filter by" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}

export default Filteration;