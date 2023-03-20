import React from 'react'
import { Widget } from "../types/typeData"
import OrderStat from './OrderStat'
import "./WidgetOrderStats.scss"
export interface Props {
    stats: [Widget]
}
const WidgetOrderStats: React.FC<Props> = ({ stats }) => {
    return (
        <div className="widget__wrap">
            {stats.map(elm =>
                <OrderStat data={elm} />
            )}
        </div>
    )
}

export default WidgetOrderStats
