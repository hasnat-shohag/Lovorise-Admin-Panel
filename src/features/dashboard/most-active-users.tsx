import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TrendingUp } from 'lucide-react'

const users = [
  {
    name: 'Benny Chagur',
    time: '18 hrs',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Chynita Heree',
    time: '16 hrs',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'David Yers',
    time: '15 hrs',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Hayder Jahid',
    time: '14 hrs',
    avatar: '/placeholder.svg?height=40&width=40',
  },
]

export function MostActiveUsers() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Most Active</CardTitle>
          <TrendingUp className="h-5 w-5 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={user.avatar || '/placeholder.svg'}
                  alt={user.name}
                />
                <AvatarFallback className="bg-gray-100 text-gray-600">
                  {user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-900">{user.name}</p>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">{user.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
