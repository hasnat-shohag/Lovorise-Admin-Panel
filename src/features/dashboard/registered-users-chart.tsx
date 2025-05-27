'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useRef } from 'react'
import Highcharts from 'highcharts'

export function RegisteredUsersChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chart = Highcharts.chart(chartRef.current, {
        chart: {
          type: 'pie',
          backgroundColor: 'transparent',
          height: 200,
        },
        title: {
          text: '',
        },
        plotOptions: {
          pie: {
            innerSize: '60%',
            dataLabels: {
              enabled: false,
            },
            showInLegend: false,
            borderWidth: 0,
            states: {
              hover: {
                halo: {
                  size: 0,
                },
              },
            },
          },
        },
        series: [
          {
            name: 'Users',
            data: [
              {
                name: 'Premium Plan',
                y: 3000,
                color: '#EC4899',
              },
              {
                name: 'Free Plan',
                y: 2000,
                color: '#1F2937',
              },
            ],
            type: 'pie',
          },
        ],
        tooltip: {
          backgroundColor: '#1F2937',
          borderColor: '#374151',
          style: {
            color: '#F9FAFB',
          },
          formatter: function () {
            return `<b>${this.point.name}</b><br/>${this.y} users`
          },
        },
        credits: {
          enabled: false,
        },
      })

      return () => {
        chart.destroy()
      }
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Registered Users
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-full h-48 mb-4">
          <div ref={chartRef} className="w-full h-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">5000</div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded"></div>
              <span className="text-sm text-gray-600">Premium Plan</span>
            </div>
            <span className="font-semibold">3000</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-800 rounded"></div>
              <span className="text-sm text-gray-600">Free Plan</span>
            </div>
            <span className="font-semibold">2000</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
