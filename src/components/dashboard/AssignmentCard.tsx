
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, FileText, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface AssignmentCardProps {
  title: string;
  course: string;
  dueDate: string;
  submissionCount: number;
  gradedCount: number;
  onClick?: () => void;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  title,
  course,
  dueDate,
  submissionCount,
  gradedCount,
  onClick,
}) => {
  const percentGraded = Math.round((gradedCount / submissionCount) * 100);
  
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="border-none overflow-hidden bg-opacity-50 backdrop-blur-sm shadow-md h-full">
        <CardHeader className="pb-2">
          <div className="text-xs font-medium text-muted-foreground mb-1">{course}</div>
          <CardTitle className="text-lg font-medium leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Clock className="h-4 w-4 mr-1" />
            <span>Due: {dueDate}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col">
              <div className="text-muted-foreground text-xs">Submissions</div>
              <div className="flex items-center mt-1">
                <Users className="h-4 w-4 mr-1 text-primary" />
                <span className="font-medium">{submissionCount}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-muted-foreground text-xs">Graded</div>
              <div className="flex items-center mt-1">
                <FileText className="h-4 w-4 mr-1 text-primary" />
                <span className="font-medium">{gradedCount}/{submissionCount}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span className="font-medium">{percentGraded}%</span>
            </div>
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${percentGraded}%` }}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="ghost" 
            className="w-full justify-between hover:bg-primary/5"
            onClick={onClick}
          >
            <span>View Details</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AssignmentCard;
