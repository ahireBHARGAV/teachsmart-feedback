
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter,
  ChevronRight,
  MessageSquare,
  Clock,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface FeedbackItem {
  id: string;
  studentName: string;
  assignment: string;
  course: string;
  status: 'Pending' | 'Complete' | 'AI Suggested';
  lastUpdated: string;
  preview: string;
}

const feedbackItems: FeedbackItem[] = [
  {
    id: '1',
    studentName: 'Emma Johnson',
    assignment: 'Final Research Paper',
    course: 'Advanced Biology 101',
    status: 'AI Suggested',
    lastUpdated: '2 hours ago',
    preview: 'Good analysis of cellular structures, but could elaborate more on mitochondrial functions...'
  },
  {
    id: '2',
    studentName: 'Michael Smith',
    assignment: 'Weekly Problem Set',
    course: 'Linear Algebra 202',
    status: 'Complete',
    lastUpdated: '1 day ago',
    preview: 'Excellent work on eigenvalue problems. All matrix operations correctly performed...'
  },
  {
    id: '3',
    studentName: 'Sophia Chen',
    assignment: 'Midterm Essay',
    course: 'World History 101',
    status: 'Pending',
    lastUpdated: '3 days ago',
    preview: 'Analysis of historical context needs improvement. Consider the socio-economic factors...'
  },
  {
    id: '4',
    studentName: 'James Wilson',
    assignment: 'Programming Project',
    course: 'Computer Science 301',
    status: 'AI Suggested',
    lastUpdated: '6 hours ago',
    preview: 'Code is well-structured but lacks proper error handling. Implementation of algorithms...'
  },
  {
    id: '5',
    studentName: 'Olivia Martinez',
    assignment: 'Case Study Analysis',
    course: 'Business Ethics 301',
    status: 'Pending',
    lastUpdated: '1 hour ago',
    preview: 'Thoughtful analysis of ethical considerations. Arguments could be strengthened by...'
  },
];

const FeedbackCard: React.FC<{ item: FeedbackItem }> = ({ item }) => {
  const getStatusColor = (status: FeedbackItem['status']) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'AI Suggested':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200';
      case 'Pending':
      default:
        return 'bg-orange-100 text-orange-700 hover:bg-orange-200';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-none shadow-md bg-opacity-50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary">
                  {getInitials(item.studentName)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{item.studentName}</div>
                <div className="text-sm text-muted-foreground">{item.course}</div>
              </div>
            </div>
            <Badge className={`font-normal ${getStatusColor(item.status)}`}>
              {item.status}
            </Badge>
          </div>
          
          <div className="mt-4">
            <h3 className="font-medium">{item.assignment}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.preview}</p>
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {item.lastUpdated}
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              Review <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Feedback = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Navbar />
        
        <section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Feedback</h1>
              <p className="text-muted-foreground">
                Review and provide feedback on student submissions
              </p>
            </div>
            <Button className="mt-4 md:mt-0">
              <RefreshCw className="mr-2 h-4 w-4" />
              Generate AI Feedback
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search feedback..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="shrink-0">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">
                <Clock className="h-4 w-4 mr-1" />
                Pending
              </TabsTrigger>
              <TabsTrigger value="aiSuggested">
                <MessageSquare className="h-4 w-4 mr-1" />
                AI Suggested
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {feedbackItems.map(item => (
                  <FeedbackCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pending" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {feedbackItems
                  .filter(item => item.status === 'Pending')
                  .map(item => (
                    <FeedbackCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="aiSuggested" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {feedbackItems
                  .filter(item => item.status === 'AI Suggested')
                  .map(item => (
                    <FeedbackCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {feedbackItems
                  .filter(item => item.status === 'Complete')
                  .map(item => (
                    <FeedbackCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </PageTransition>
  );
};

export default Feedback;
