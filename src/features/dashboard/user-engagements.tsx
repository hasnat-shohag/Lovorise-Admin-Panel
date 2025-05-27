'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Highcharts from 'highcharts'

const engagements = [
  { name: 'Swipe', percentage: 75, color: '#EC4899' },
  { name: 'Event', percentage: 55, color: '#F97316' },
  { name: 'Reels', percentage: 50, color: '#10B981' },
  { name: 'Chat', percentage: 45, color: '#1F2937' },
  { name: 'Others', percentage: 20, color: '#F3E8FF' },
]

export function UserEngagements() {
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
            name: 'Engagement',
            data: engagements.map((engagement) => ({
              name: engagement.name,
              y: engagement.percentage,
              color: engagement.color,
            })),
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
            return `<b>${this.point.name}</b><br/>${this.y}%`
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
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            User Engagements
          </CardTitle>
          <BarChart3 className="h-5 w-5 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-48 mb-6">
          <div ref={chartRef} className="w-full h-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">78%</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {engagements.map((engagement, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: engagement.color }}
                ></div>
                <span className="text-sm text-gray-600">{engagement.name}</span>
              </div>
              <span className="font-semibold">{engagement.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
