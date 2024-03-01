import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];

export default function BasicPie() {
    return (
        <LineChart
            width={500}
            height={300}
            series={[
                { data: pData, label: 'Orders Per Week' },
                // { data: uData, label: 'uv' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
    );
}
