import React from 'react'
import "./OrderStat.scss"
import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { HiShoppingCart } from 'react-icons/hi'
import { GiKnifeFork } from 'react-icons/gi'
import { SiBuymeacoffee } from 'react-icons/si'
import { Widget } from "../types/typeData"


export interface Props {
    data: Widget
}
const OrderStat: React.FC<Props> = ({ data }) => {
    return (
        <div className='widget--container '>
            <div className='widget__element-container spaceBet'>
                <h2 className=''>{data.type}</h2>
                <div className='widget__statistic-wrap display__justify-between' >
                    {data.state === "decrement" ? <GoArrowSmallDown className='widget__statistic-icon text_red' /> : <GoArrowSmallUp className='widget__statistic-icon  text_green' />}
                    <p className={`${data.state === "decrement" ? "text_red" : "text_green"}`}>{data.static}%</p>
                </div>
            </div>
            <div className='widget__element-container '>
                {data?.type === "Revenue" ?
                    <BsArrowUpRightCircleFill className='widget__statistic-icon filled text_orange' />
                    : data?.type === "Orders" ? <div className='widget__statistic-icon--wrap bg_green'><HiShoppingCart className='widget__statistic-icon ' /></div>
                        : data?.type === "Dine in" ? <div className='widget__statistic-icon--wrap bg_red'><GiKnifeFork className='widget__statistic-icon' /></div>
                            : data?.type === "Take away" ? <div className='widget__statistic-icon--wrap bg_yellow' ><SiBuymeacoffee className='widget__statistic-icon ' /></div> : ""
                }
                <h1 className='value_heading'>{data.value}</h1>


            </div>
        </div >
    )
}

export default OrderStat