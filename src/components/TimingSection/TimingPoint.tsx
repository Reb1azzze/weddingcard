import React from 'react';
import { ConfigProvider, Divider} from "antd";
import "./TimingPoint.css";

interface timingPointProps {
    time: string;
    text: string;
    header: string;
}

const TimingPoint = (props: timingPointProps) => {

    return (
        <div className='timing-point'>
            <div className='timing-time'>{props.time}</div>
            <ConfigProvider
                theme={{
                    token: {
                        lineWidth: 1,
                        colorSplit: '#5e5e5e',
                        lineHeight: 10,
                    },
                }}
            ><Divider type="vertical" className='timing-divider' variant={"solid"} style={{}}/></ConfigProvider>
            <div className='timing-text-container'>
                <span className='timing-header'>{props.header}</span>
                <span className='timing-text'>{props.text}</span>
            </div>
        </div>
    );
};

export default TimingPoint;