import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

const LineChart = requireNativeComponent('LineView', null);

type PropsType = {
    xValues: string[],
    yValues: number[],
};

class LineChartView extends Component<PropsType> {
    render() {
        const { xValues, yValues } = this.props;

        return (
            <LineChart
                xValues={xValues}
                yValues={yValues}
                style={{ flex: 1 }}
            />
        );
    }
}

export default LineChartView;