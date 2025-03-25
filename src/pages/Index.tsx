
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Navbar from '@/components/layout/Navbar';
import StatCard from '@/components/dashboard/StatCard';
import AssignmentCard from '@/components/dashboard/AssignmentCard';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  FileCheck, 
  Calendar, 
  User, 
  BookOpenCheck,
  PlusCircle,
  BarChart,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Dashboard = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Navbar />
        
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <motion.h1 
                className="text-3xl font-bold tracking-tight mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Welcome back, Professor
              </motion.h1>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Here's what's happening with your classes today
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Button className="mt-4 md:mt-0">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Assignment
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div custom={0} variants={fadeInUp} initial="initial" animate="animate">
              <StatCard 
                title="Total Students" 
                value="248" 
                trend={{ value: 12, isPositive: true }}
                icon={<User className="h-5 w-5" />}
              />
            </motion.div>
            <motion.div custom={1} variants={fadeInUp} initial="initial" animate="animate">
              <StatCard 
                title="Active Courses" 
                value="8" 
                trend={{ value: 0, isPositive: true }}
                icon={<BookOpen className="h-5 w-5" />}
              />
            </motion.div>
            <motion.div custom={2} variants={fadeInUp} initial="initial" animate="animate">
              <StatCard 
                title="Pending Grades" 
                value="43" 
                trend={{ value: 5, isPositive: false }}
                icon={<FileCheck className="h-5 w-5" />}
              />
            </motion.div>
            <motion.div custom={3} variants={fadeInUp} initial="initial" animate="animate">
              <StatCard 
                title="Upcoming Deadlines" 
                value="12"
                description="Next: Essay due in 2 days"
                icon={<Calendar className="h-5 w-5" />}
              />
            </motion.div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Assignments</h2>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
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
          </div>
        </section>
        
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">AI-Powered Insights</h2>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="col-span-1"
            >
              <div className="rounded-2xl border-none overflow-hidden bg-opacity-50 backdrop-blur-sm bg-card shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 p-2 text-primary">
                    <BookOpenCheck className="h-5 w-5" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium">Grading Assistant</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Speed up your grading process with AI-powered suggestions based on your past feedback patterns.
                </p>
                <Button variant="outline" className="w-full">
                  Start Grading
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="col-span-1"
            >
              <div className="rounded-2xl border-none overflow-hidden bg-opacity-50 backdrop-blur-sm bg-card shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 p-2 text-primary">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium">Student Performance Analysis</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Get insights into student performance patterns and identify areas where students might need additional support.
                </p>
                <Button variant="outline" className="w-full">
                  View Analysis
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
