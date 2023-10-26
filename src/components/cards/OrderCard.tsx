import React from 'react'
import { CartItem } from '../../cartComponents/Cart'
import { Order } from '../../pages/Order'

interface Props {
  order: Order
}


export const OrderCard = ({order} : Props) => {

  const image = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png'
  return (
    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
      <h2 className="text-3xl font-bold">Order Details</h2>
      <div className="mt-3 text-sm">
        Check the status of recent and old orders & discover more products
      </div>
      <div className="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row">
        <div className="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
          <div className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
              {[
                ['Order ID', order.id],
                ['Date', order.date],
                ['Total Amount', order.total],
                ['Order Status', order.status],
              ].map(([key, value]) => (
                <div key={key} className="mb-4">
                  <div className="text-sm font-semibold">{key}</div>
                  <div className="text-sm font-medium text-gray-700">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-8">
            <ul className="-my-7 divide-y divide-gray-200">
              {order.items.map((item) => (
                <li
                  key={item.meal.id}
                  className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                >
                  <div className="flex flex-1 items-stretch">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                        src={image}
                        alt={image}
                      />
                    </div>

                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">{item.meal.name}</p>
                      </div>

                      <p className="mt-4 text-sm font-medium text-gray-500">x {item.quantity}</p>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-sm font-bold text-gray-900">{item.meal.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="my-8 border-t border-t-gray-200" />
            <div className="space-x-4">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View All Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
