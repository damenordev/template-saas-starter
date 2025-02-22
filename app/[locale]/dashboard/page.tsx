import { APP_SIDEBAR_ITEMS } from '@/constants'
import { AppHeader, AppSidebar } from '@/components'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'
import { ArrowUpRight, Users, DollarSign, LineChart, Activity, Calendar, BarChart } from 'lucide-react'

export default function DashboardPage() {
  return (
    <>
      <AppSidebar items={APP_SIDEBAR_ITEMS} />
      <main className="w-full p-6">
        <AppHeader />
        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Users Widget */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <Users className="size-5" />
                  </span>
                  <h3 className="font-medium">Total Users</h3>
                </div>
                <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2.5 py-0.5 rounded-full">+12%</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">2,543</p>
                <p className="text-sm text-muted-foreground">Active accounts</p>
              </div>
            </Card>

            {/* Revenue Widget */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-green-500/10 rounded-lg text-green-500">
                    <DollarSign className="size-5" />
                  </span>
                  <h3 className="font-medium">Revenue</h3>
                </div>
                <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2.5 py-0.5 rounded-full">+8%</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">$48,200</p>
                <p className="text-sm text-muted-foreground">Monthly recurring</p>
              </div>
            </Card>

            {/* Active Projects Widget */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                    <LineChart className="size-5" />
                  </span>
                  <h3 className="font-medium">Projects</h3>
                </div>
                <span className="text-xs font-medium text-red-500 bg-red-500/10 px-2.5 py-0.5 rounded-full">-4%</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">182</p>
                <p className="text-sm text-muted-foreground">Active projects</p>
              </div>
            </Card>

            {/* System Health Widget */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                    <Activity className="size-5" />
                  </span>
                  <h3 className="font-medium">System Health</h3>
                </div>
                <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2.5 py-0.5 rounded-full">99.9%</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">Optimal</p>
                <p className="text-sm text-muted-foreground">All systems running</p>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activity Chart - Large Widget */}
            <Card className="p-6 lg:col-span-2 h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary">
                    <BarChart className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold">Activity Overview</h3>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Chart Placeholder
              </div>
            </Card>

            {/* User List - Compact Widget */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <DollarSign className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold">Recent Transactions</h3>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-blue-500">
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-green-500/10 flex items-center justify-center">
                        <DollarSign className="size-4 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">Payment #{i + 1}</p>
                        <p className="text-sm text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <span className="font-medium">${(99.99 * (i + 1)).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Calendar Overview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-green-500/10 rounded-lg text-green-500">
                    <Calendar className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold">Calendar</h3>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-green-500">
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="text-center">
                      <p className="text-sm font-bold">MAR</p>
                      <p className="text-2xl">{i + 15}</p>
                    </div>
                    <div>
                      <p className="font-medium">Team Meeting</p>
                      <p className="text-sm text-muted-foreground">10:00 AM</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Resources */}
            <Card className="p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                    <DollarSign className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold">Billing Overview</h3>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-purple-500">
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Current Plan', value: 'Premium', color: 'bg-purple-500' },
                  { label: 'Next Billing', value: 'Mar 30, 2024', color: 'bg-blue-500' },
                  { label: 'Monthly Usage', value: '80%', color: 'bg-green-500' },
                  { label: 'API Calls', value: '8.5K/10K', color: 'bg-orange-500' },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="text-2xl font-bold mt-1">{item.value}</p>
                    <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full w-[80%]`} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
