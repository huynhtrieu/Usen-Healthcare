import React, { useEffect, useRef } from "react";
import Chart from "Chart.js/auto";
import { useQuery } from "@tanstack/react-query"; 
import { useTranslation } from "react-i18next";
import { getthongke12, getthongkeTop3 } from "@/apis/auth";

import "./index.css";

interface ApiResponse {
    data: DataType[];
}

interface DataType {
    key: React.Key;
    quantity: number;
    time: string;
}
const ChartList: React.FC = () => {
    const { t } = useTranslation("common");
    const { data: data1 } = useQuery<ApiResponse>({
        queryKey: ["thongke"],
        queryFn: getthongke12,
    });
    const { data: data2 } = useQuery<ApiResponse>({
        queryKey: ["thongke2"],
        queryFn: getthongkeTop3,
    });
    //12 tháng
    const chartRef1 = useRef<HTMLCanvasElement | null>(null);
    const chartInstance1 = useRef<Chart | null>(null);
    //top3
    const chartRef2 = useRef<HTMLCanvasElement | null>(null);
    const chartInstance2 = useRef<Chart | null>(null);
//quy doi thang
const monthMapping = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };
    // 12 tháng
    useEffect(() => {
        if (chartInstance1.current) {
            chartInstance1.current.destroy();
        }
        if (chartRef1.current && data1) {
            const myCharRef1 = chartRef1.current.getContext("2d");
            if (myCharRef1) {
                const labels1 = data1.map((item: DataType) => monthMapping[item.time] || item.time);
                const values1 = data1.map((item: DataType) => item.quantity);
                const barColors = [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 0, 0, 0.2)",
                    "rgba(0, 255, 0, 0.2)",
                    "rgba(0, 0, 255, 0.2)",
                    "rgba(255, 255, 0, 0.2)",
                    "rgba(255, 0, 255, 0.2)",
                    "rgba(0, 255, 255, 0.2)",
                ];

                chartInstance1.current = new Chart(myCharRef1, {
                    type: "bar",
                    data: {
                        labels: labels1,
                        datasets: [
                            {
                                label: "Quantity",
                                data: values1,
                                backgroundColor: barColors,
                            },
                        ],
                    },
                });
            }
        }
        return () => {
            if (chartInstance1.current) {
                chartInstance1.current.destroy();
            }
        };
    },[data1]);

    // top 3 tháng có seminar mở nhiêu nhất 
    useEffect(() => {
        // 12 tháng
        if (chartInstance2.current) {
            chartInstance2.current.destroy();
        }

        if (chartRef2.current && data2) {
            const myCharRef2 = chartRef2.current.getContext("2d");
            if (myCharRef2) {
                const labels2 = data2.map((item: DataType) => monthMapping[item.time] || item.time);
                const values2 = data2.map((item: DataType) => item.quantity);
                const barColors2 = [

                    "rgba(0, 255, 0, 0.2)",
                    "rgba(0, 0, 255, 0.2)",
                    "rgba(255, 255, 0, 0.2)",

                ];
                chartInstance2.current = new Chart(myCharRef2, {
                    type: "doughnut",
                    data: {
                        labels: labels2,
                        datasets: [
                            {
                                label: "Quantity",
                                data: values2,
                                backgroundColor: barColors2,
                            },
                        ],
                    },
                });
            }
        }
        return () => {
            if (chartInstance2.current) {
                chartInstance2.current.destroy();
            }
        };
    },
        [data2]);

    return (
        <div className="chart_pt" id="chart-container">
            <div className="chart_12">
                <canvas className="chart_bb" ref={chartRef1} />
                <div className="Thongso">
                    <p className="ghichu">
                    {t("chart.text_12thang")}
                    </p>
                </div>
            </div>
            <div className="top3">
                <canvas className="chart_top3" ref={chartRef2} />
                <div className="Thongso_top3">
                    <p className="ghichu_top3">
                    {t("chart.text_top3")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChartList;
