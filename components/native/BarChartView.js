import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

const BarChart = requireNativeComponent('BarView', null);

type PropsType = {
    xValues: string[],
    yValues: number[],
};

class BarChartView extends Component<PropsType> {
    render() {
        const { xValues, yValues } = this.props;

        return (
            <BarChart
                xValues={xValues}
                yValues={yValues}
                style={{ flex: 1 }}
            />
        );
    }
}

export default BarChartView;