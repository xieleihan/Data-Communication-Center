import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import {china} from '../utils/china.tsx'; // 如果有自定义 GeoJSON 文件

const UserDistributed: React.FC = () => {
    useEffect(() => {
        // 初始化图表
        const chartDom = document.getElementById('china-map') as HTMLElement;
        const myChart = echarts.init(chartDom);

        // 注册中国地图
        echarts.registerMap('china', china as any);

        // 配置选项
        const option = {
            tooltip: {
                
                formatter: function (params: any) {
                    return `${params.seriesName}<br />${params.name}：${params.value || 0}`;
                },
            },
            visualMap: {
                min: 0,
                max: 1500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],
                inRange: {
                    color: ['#fbf8f3', '#94d2a5'],
                },
                show: true,
            },
            geo: {
                map: 'china',
                roam: false,
                zoom: 1.23,
                label: {
                    show: true,
                    fontSize: 10,
                    color: 'rgba(0,0,0,0.7)',
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0, 0, 0, 0.2)',
                    },
                    emphasis: {
                        areaColor: 'tomato',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
            series: [
                {
                    name: '信息量',
                    type: 'map',
                    geoIndex: 0,
                    data: dataList
                },
            ],
        };

        // 设置选项并渲染
        myChart.setOption(option);

        // 清理图表实例（避免内存泄漏）
        return () => {
            myChart.dispose();
        };
    }, []);

    const dataList = [
        { name: "南海诸岛", value: 0 },
        { name: '北京市', value: randomValue() },
        { name: '天津市', value: randomValue() },
        { name: '上海市', value: randomValue() },
        { name: '重庆市', value: randomValue() },
        { name: '河北省', value: randomValue() },
        { name: '河南省', value: randomValue() },
        { name: '云南省', value: randomValue() },
        { name: '辽宁省', value: randomValue() },
        { name: '黑龙江省', value: randomValue() },
        { name: '湖南省', value: randomValue() },
        { name: '安徽省', value: randomValue() },
        { name: '山东省', value: randomValue() },
        { name: '新疆维吾尔自治区', value: randomValue() },
        { name: '江苏省', value: randomValue() },
        { name: '浙江省', value: randomValue() },
        { name: '江西省', value: randomValue() },
        { name: '湖北省', value: randomValue() },
        { name: '广西壮族自治区', value: randomValue() },
        { name: '甘肃省', value: randomValue() },
        { name: '山西省', value: randomValue() },
        { name: '内蒙古自治区', value: randomValue() },
        { name: '陕西省', value: randomValue() },
        { name: '吉林省', value: randomValue() },
        { name: '福建省', value: randomValue() },
        { name: '贵州省', value: randomValue() },
        { name: '广东省', value: randomValue() },
        { name: '青海省', value: randomValue() },
        { name: '西藏自治区', value: randomValue() },
        { name: '四川省', value: randomValue() },
        { name: '宁夏回族自治区', value: randomValue() },
        { name: '海南省', value: randomValue() },
        { name: '台湾省', value: randomValue() },
        { name: '香港特别行政区', value: randomValue() },
        { name: '澳门特别行政区', value: randomValue() }
    ]

    function randomValue() {
        return Math.round(Math.random() * 1000);
    }

    return (
        <>
            <h2>用户分布</h2>
            <div className="content"
                style={{
                    display: 'flex'
                }}
            >
                <div
                    id="china-map"
                    style={{
                        width: '70%',
                        height: '500px',
                    }}
                ></div>
                <div className="list"
                    style={{
                        width: '30%',
                        height: '500px',
                        overflow: 'auto',
                        padding: '0 10px',
                        fontSize: '14px',
                        lineHeight: '30px'
                    }}
                >
                    {
                        dataList.map((item, index) => {
                            return <div key={index}>{item.name}：{item.value}</div>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default UserDistributed;