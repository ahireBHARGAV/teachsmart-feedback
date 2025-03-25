
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  PlusCircle, 
  Filter,
  MoreHorizontal,
  ArrowUpDown,
  Users
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  course: string;
  status: 'Active' | 'At Risk' | 'Excelling';
  lastActivity: string;
}

const students: Student[] = [
  {
    id: '1',
    name: 'Emma Johnson',
    email: 'emma.j@example.edu',
    studentId: 'ST100234',
    course: 'Advanced Biology 101',
    status: 'Excelling',
    lastActivity: '2 hours ago'
  },
  {
    id: '2',
    name: 'Michael Smith',
    email: 'michael.s@example.edu',
    studentId: 'ST100235',
    course: 'Linear Algebra 202',
    status: 'Active',
    lastActivity: '1 day ago'
  },
  {
    id: '3',
    name: 'Sophia Chen',
    email: 'sophia.c@example.edu',
    studentId: 'ST100236',
    course: 'World History 101',
    status: 'At Risk',
    lastActivity: '3 days ago'
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james.w@example.edu',
    studentId: 'ST100237',
    course: 'Computer Science 301',
    status: 'Active',
    lastActivity: '6 hours ago'
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    email: 'olivia.m@example.edu',
    studentId: 'ST100238',
    course: 'Business Ethics 301',
    status: 'Excelling',
    lastActivity: '1 hour ago'
  },
  {
    id: '6',
    name: 'Ethan Brown',
    email: 'ethan.b@example.edu',
    studentId: 'ST100239',
    course: 'Chemistry 202',
    status: 'At Risk',
    lastActivity: '5 days ago'
  },
  {
    id: '7',
    name: 'Ava Thompson',
    email: 'ava.t@example.edu',
    studentId: 'ST100240',
    course: 'Advanced Biology 101',
    status: 'Active',
    lastActivity: '12 hours ago'
  },
];

const Students = () => {
  const getStatusColor = (status: Student['status']) => {
    switch (status) {
      case 'Excelling':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'At Risk':
        return 'bg-red-100 text-red-700 hover:bg-red-200';
      case 'Active':
      default:
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Navbar />
        
        <section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Students</h1>
              <p className="text-muted-foreground">
                Manage your students and monitor their progress
              </p>
            </div>
            <Button className="mt-4 md:mt-0">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search students..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="shrink-0">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <div className="rounded-lg border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">
                    <div className="flex items-center">
                      Name
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Activity</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {getInitials(student.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-muted-foreground">{student.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>
                      <Badge className={`font-normal ${getStatusColor(student.status)}`}>
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{student.lastActivity}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>View Assignments</DropdownMenuItem>
                          <DropdownMenuItem>Send Message</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Students;
