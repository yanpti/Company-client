import React, { useContext, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import * as XLSX from 'xlsx';
import { Button} from 'react-bootstrap';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LineChart = observer(() => {
    const { news } = useContext(Context);
    const chartRef = useRef(null);

    const cityNames = news.city.map(city => city.name);
    const newsCounts = news.city.map(city =>
        news.news.filter(newsItem => newsItem.cityId === city.id).length
    );

    const data = {
        labels: cityNames,
        datasets: [
            {
                label: '',
                data: newsCounts,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const exportToExcel = () => {
        const sheetData = [
            ['City', 'News Count'],
            ...cityNames.map((city, index) => [city, newsCounts[index]])
        ];

        const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'News Data');
        XLSX.writeFile(workbook, 'news_data.xlsx');
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Соотношение новостей на странице по городам',
            },
        },
    };

    return (
        <div>
            <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
                <Bar ref={chartRef} data={data} options={options} />
                <Button variant='outline-dark' onClick={exportToExcel}>Export to Excel</Button>
            </div>
        </div>
    );
});

export default LineChart;