import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TimeRecords() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('/api/time-records')
            .then(response => setRecords(response.data))
            .catch(error => console.error('Error fetching records:', error));
    }, []);

    return (
        <div>
            {records.map(record => (
                <div key={record._id}>
                    {record.timeIn} - {record.timeOut}
                </div>
            ))}
        </div>
    );
}

export default TimeRecords;