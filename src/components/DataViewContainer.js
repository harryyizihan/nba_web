import React from 'react';
import {ShotChart} from './ShotChart'
import {Slider, InputNumber, Row, Col } from 'antd'

export class DataViewContainer extends React.Component {
    state = {
        minCount: 1,
    }

    onChange = (value) => {
        this.setState ({
            minCount: value,
        });
    }


    render () {
        const {minCount} = this.state;

        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    displayToolTips={true}
                    chartType={"hexbin"}
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
            </div>
        );
    }
}