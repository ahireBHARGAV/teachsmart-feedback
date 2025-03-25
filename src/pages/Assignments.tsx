
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  PlusCircle, 
  Filter, 
  Clock, 
  CheckCheck, 
  AlertCircle,
  Calendar,
  FileText
} from 'lucide-react';
import AssignmentCard from '@/components/dashboard/AssignmentCard';

const Assignments = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Navbar />
        
        <section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Assignments</h1>
              <p className="text-muted-foreground">
                Manage your assignments and monitor student progress
              </p>
            </div>
            <Button className="mt-4 md:mt-0">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Assignment
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search assignments..." 
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
              <TabsTrigger value="active">
                <Clock className="h-4 w-4 mr-1" />
                Active
              </TabsTrigger>
              <TabsTrigger value="completed">
                <CheckCheck className="h-4 w-4 mr-1" />
                Completed
              </TabsTrigger>
              <TabsTrigger value="needsAttention">
                <AlertCircle className="h-4 w-4 mr-1" />
                Needs Attention
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AssignmentCard 
                  title="Final Research Paper"
                  course="Advanced Biology 101"
                  dueDate="Tomorrow at 11:59PM"
                  submissionCount={35}
                  gradedCount={12}
                />
                <AssignmentCard 
                  title="Weekly Problem Set"
                  course="Linear Algebra 202"
                  dueDate="May 20, 2023"
                  submissionCount={28}
                  gradedCount={28}
                />
                <AssignmentCard 
                  title="Case Study Analysis"
                  course="Business Ethics 301"
                  dueDate="May 25, 2023"
                  submissionCount={42}
                  gradedCount={0}
                />
                <AssignmentCard 
                  title="Midterm Essay"
                  course="World History 101"
                  dueDate="May 15, 2023"
                  submissionCount={38}
                  gradedCount={20}
                />
                <AssignmentCard 
                  title="Lab Report"
                  course="Chemistry 202"
                  dueDate="May 18, 2023"
                  submissionCount={32}
                  gradedCount={15}
                />
                <AssignmentCard 
                  title="Programming Project"
                  course="Computer Science 301"
                  dueDate="June 1, 2023"
                  submissionCount={25}
                  gradedCount={0}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="active" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AssignmentCard 
                  title="Final Research Paper"
                  course="Advanced Biology 101"
                  dueDate="Tomorrow at 11:59PM"
                  submissionCount={35}
                  gradedCount={12}
                />
                <AssignmentCard 
                  title="Midterm Essay"
                  course="World History 101"
                  dueDate="May 15, 2023"
                  submissionCount={38}
                  gradedCount={20}
                />
                <AssignmentCard 
                  title="Programming Project"
                  course="Computer Science 301"
                  dueDate="June 1, 2023"
                  submissionCount={25}
                  gradedCount={0}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AssignmentCard 
                  title="Weekly Problem Set"
                  course="Linear Algebra 202"
                  dueDate="May 20, 2023"
                  submissionCount={28}
                  gradedCount={28}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="needsAttention" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AssignmentCard 
                  title="Case Study Analysis"
                  course="Business Ethics 301"
                  dueDate="May 25, 2023"
                  submissionCount={42}
                  gradedCount={0}
                />
                <AssignmentCard 
                  title="Lab Report"
                  course="Chemistry 202"
                  dueDate="May 18, 2023"
                  submissionCount={32}
                  gradedCount={15}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </PageTransition>
  );
};

export default Assignments;
