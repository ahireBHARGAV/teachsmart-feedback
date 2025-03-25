
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { 
  BarChart as BarChartIcon, 
  Download,
  Calendar,
  ArrowRight,
  FileText,
  User,
  Clock
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD'];

const gradeDistribution = [
  { grade: 'A', count: 42 },
  { grade: 'B', count: 78 },
  { grade: 'C', count: 56 },
  { grade: 'D', count: 24 },
  { grade: 'F', count: 8 },
];

const submissionTimeline = [
  { name: 'Week 1', onTime: 92, late: 8 },
  { name: 'Week 2', onTime: 88, late: 12 },
  { name: 'Week 3', onTime: 85, late: 15 },
  { name: 'Week 4', onTime: 82, late: 18 },
  { name: 'Week 5', onTime: 80, late: 20 },
  { name: 'Week 6', onTime: 78, late: 22 },
  { name: 'Week 7', onTime: 83, late: 17 },
  { name: 'Week 8', onTime: 87, late: 13 },
];

const studentEngagement = [
  { name: 'Mon', value: 68 },
  { name: 'Tue', value: 72 },
  { name: 'Wed', value: 80 },
  { name: 'Thu', value: 76 },
  { name: 'Fri', value: 65 },
  { name: 'Sat', value: 42 },
  { name: 'Sun', value: 38 },
];

const feedbackData = [
  { name: 'Grammar', positive: 75, negative: 25 },
  { name: 'Structure', positive: 60, negative: 40 },
  { name: 'Content', positive: 85, negative: 15 },
  { name: 'Analysis', positive: 65, negative: 35 },
  { name: 'Citations', positive: 70, negative: 30 },
];

const Analytics = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Navbar />
        
        <section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Analytics</h1>
              <p className="text-muted-foreground">
                Gain insights into student performance and feedback effectiveness
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden shadow-md border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Assignments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <div className="text-2xl font-bold">247</div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  +12% from last semester
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-md border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-primary mr-2" />
                  <div className="text-2xl font-bold">248</div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  +5% from last semester
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-md border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Grading Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <div className="text-2xl font-bold">1.2 days</div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  -30% from last semester
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="performance">
            <TabsList className="mb-6">
              <TabsTrigger value="performance">
                <BarChartIcon className="h-4 w-4 mr-1" />
                Performance
              </TabsTrigger>
              <TabsTrigger value="submissions">
                <Calendar className="h-4 w-4 mr-1" />
                Submissions
              </TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="overflow-hidden shadow-md border-none p-4 lg:col-span-2">
                  <CardHeader className="px-2">
                    <CardTitle>Grade Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={gradeDistribution}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="grade" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="count" fill="#3490dc" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden shadow-md border-none p-4">
                  <CardHeader className="px-2">
                    <CardTitle>Student Engagement by Day</CardTitle>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={studentEngagement}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#3490dc" 
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden shadow-md border-none p-4">
                  <CardHeader className="px-2">
                    <CardTitle>Performance by Course</CardTitle>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={gradeDistribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="count"
                            label={({ grade, count }) => `${grade}: ${count}`}
                          >
                            {gradeDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="submissions" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                <Card className="overflow-hidden shadow-md border-none p-4">
                  <CardHeader className="px-2">
                    <CardTitle>Submission Timeline</CardTitle>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={submissionTimeline}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="onTime" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="late" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="feedback" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                <Card className="overflow-hidden shadow-md border-none p-4">
                  <CardHeader className="px-2">
                    <CardTitle>Feedback Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="px-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={feedbackData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="positive" fill="#10b981" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="negative" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </PageTransition>
  );
};

export default Analytics;
