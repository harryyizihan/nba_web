import React from 'react';
import {ShotChart} from './ShotChart'
import {Slider, InputNumber, Row, Col, Radio } from 'antd'

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 1,
        chartType: "hexbin",
    }

    onChange = (value) => {
        this.setState ({
            minCount: value,
        });
    }

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value
        });
    }


    render () {
        const {minCount, chartType} = this.state;

        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    displayToolTips={true}
                    chartType={chartType}
                />
                <Row>
                    <Col span={12} offset={4}>
                        <Slider min={2} max={20} onChange={this.onChange} value={minCount}/>
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={2}
                            max={20}
                            style={{marginLeft: 16}}
                            value={minCount}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>

                <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>
            </div>
        );
    }
}