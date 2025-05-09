// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string),
//  isEnabled (boolean),
//  and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false,
//  a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch
//  statements for different roles.

function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
  }
 
  FeatureToggle.prototype.canAccess = function(userRole) {
    return this.userGroupAccess.includes(userRole);
  };
  

  FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
  };
  

  FeatureToggle.prototype.simulateAccess = function(userRole) {
    if (!this.isEnabled) {
      console.log(`Feature "${this.featureName}" is disabled.`);
      return false;
    }
  
    switch (userRole) {
      case "admin":
      case "betaTester":
        console.log(`Access granted to ${userRole} for feature "${this.featureName}".`);
        return true;
      default:
        console.log(`Access denied to ${userRole} for feature "${this.featureName}".`);
        return false;
    }
  };
  

  const feature = new FeatureToggle("lightmode", false, ["admin", "betaTester"]);
  feature.toggleFeature(true);
  console.log(feature.canAccess("admin"));
  console.log(feature.canAccess("user"));
  feature.simulateAccess("user"); 


// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: 
// freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
// then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.
function TimeLog(name, project, logs) {
  this.freelancerName = name;
  this.projectDetails = project;
  this.logs = logs;
}
TimeLog.prototype.totalEarnings = function() {
  return this.logs.reduce((sum, log) => sum + log.hoursWorked * this.projectDetails.hourlyRate, 0);
};
TimeLog.prototype.filterLogs = function(start, end) {
  return this.logs.filter(log => log.date >= start && log.date <= end);
};
TimeLog.prototype.checkWeeklyHours = function() {
  const total = this.logs.reduce((t, l) => t + l.hoursWorked, 0);
  if (total > 40) console.log("Over 40 hours");
  else console.log("Within weekly limit");
};


const timeLog = new TimeLog("Mutai", { name: "Web Development", hourlyRate: 10 }, [
      { date: "2025-05-11", hoursWorked: 4 },
      { date: "2025-05-09", hoursWorked: 6 },
      { date: "2025-05-02", hoursWorked: 8 },
    ]);
    
    console.log(timeLog.totalEarnings());
    console.log(timeLog.filterLogs("2025-05-01", "2025-05-12")); 
    console.log(timeLog.checkWeeklyHours()); 
  



// You are developing a startup’s order management system where an Order 
// constructor function should contain customer (object with name and email), items (array of objects with productName, 
// quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, 
// and categorize order urgency using switch and conditional statements.


function Order(customer, items, status) {
  this.customer = customer;
  this.items = items;
  this.status = status;
}
Order.prototype.totalCost = function() {
  return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
};
Order.prototype.updateStatus = function(paid) {
  this.status = paid ? "paid" : "pending";
};
Order.prototype.categorizeUrgency = function() {
  switch (this.status) {
    case "pending":
      console.log("Urgent");
      break;
    case "paid":
      this.totalCost() > 500 ? console.log("High-value") : console.log("medium-value");
      break;
    default:
      console.log("unknown status");
  }
};

const order = new Order({name:"Mercy",email:"mercy@gmail.com"},
  [{productname:"washingPowder",Quantity:40,unitPrice:300}]
  ,"pending");


console.log(order.totalCost());
console.log(order.updateStatus(true));
order.categorizeUrgency()






// In a startup’s employee review tool, design an Employee class with properties:
//  id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and
//  feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and 
// add new feedback based on conditions.

function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback || [];
  }
  Employee.prototype.calculateAverageScore = function() {
    let total = 0;
    let count = 0;
    for (let number in this.performanceMetrics) {
      total += this.performanceMetrics[number];
      count++;
    }
    return count > 0 ? total / count : 0;
  };
  Employee.prototype.classifyPerformanceLevel = function() {
    const average = this.calculateAverageScore();
    if (average >= 10) {
      return "Highest performance";
    } else if (average >= 5) {
      return "Meets expectations";
    } else {
      return "Below expectation";
    }
  };
  Employee.prototype.addFeedback = function(newFeedback) {
    if (typeof newFeedback === "string") {
      this.feedback.push(newFeedback);
      return true;
    } else {
      console.log("No feedback");
      return false;
    }
  };
  
  const employee = new Employee(15, "Mary", { communication: 2, efficiency: 10, reliability: 18}, ["Good job!"]);
  console.log(employee.calculateAverageScore());
  console.log(employee.classifyPerformanceLevel());
  console.log( employee.addFeedback("Keep up")); 




// Build a simple e-learning system where a Course class has properties: title (string), 
//instructor (object with name and expertise), and students (array of objects with name and completionStatus), then 
// add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and 
// use control flow to output different messages for instructors with more or less than 5 students.


class Course{
    constructor(title,instructor,students){
        this.title=title;
        this.instructor=instructor;
        this.students=students;
    }
};

Course.prototype.studentcompleted = function(){
    const completed=[];
        for (const student of this.students){
            if(student.completionStatus ==="completed"){
            completed.push(student.name)
            }
        }
        return completed
    }

Course.prototype.countEnrolledStudent=function(){
    let count =0;
    for(const student of this.students){
        if(student.expertiseArea===this.instructor.expertise){
          count++;
        }
    }
    return count;

}

Course.prototype.messagesinstructor=function(){
  const studentCount = this.students.length;
  if (studentCount > 5) {
      console.log(`Instructor ${this.instructor.name}  ${studentCount} students.`);
  } else {
      console.log(`Instructor ${this.instructor.name}  ${studentCount} students.`);
  }
};

const courseInstance = new Course(
  "Java guides",{ name: "Sharon Mutai", expertise:"Mobile development" },
  [
      { name: "Koduen", completionStatus: "completed", expertiseArea: "Web Development" },
      { name: "Shabach", completionStatus: "in progress", expertiseArea: "Research"},
      { name: "Esther", completionStatus: "completed", expertiseArea: "Data Science" },
      { name: "BrightJoy", completionStatus: "completed", expertiseArea: "Web Development" },
      { name: "Ushi", completionStatus: "in progress", expertiseArea: "NYJ" },
      { name: "Magret", completionStatus: "completed", expertiseArea: "Web Development" }
  ]
);

console.log(courseInstance.studentcompleted());
console.log(courseInstance.countEnrolledStudent());
courseInstance.messagesinstructor();





          



               
  





























































