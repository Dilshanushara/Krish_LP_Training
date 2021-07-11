const {ApolloServer,gql}= require ('apollo-server');
// const employees= require('./data/employees.json');
const EmployeeService=require('./datasources/file');
const ProjectService=require('./datasources/project')



const typeDefs=gql`
type Query{
    employees (
        id:ID
        firstName:String,
        lastName:String,
        designation:String,
        department:String,
        nearestCity:String

    ):[Employee]
    findEmployeeById(id:ID):Employee
    projects:[Project]
    findProjectById(id:ID):Project
}
type Employee{
    id:ID!
    firstName:String,
    lastName:String,
    designation:String,
    department:String,
    nearestCity:String,
    projects: [Project]
}
type Project{
    id:ID,
    projectName:String,
    startDate:String,
    client:String,
    employees:[Int]

}

`

const dataSources=()=>({
    employeeservice :new EmployeeService(),
    projectservice : new ProjectService()
})

const resolvers ={
    Query:{
        employees:(parent,args,{dataSources},info)=>{
            return dataSources.employeeservice.getEmployees(args);       
        }, 
        findEmployeeById:(parent,{id},{dataSources},info)=>{
            return dataSources.employeeservice.getEmployeeById(id)[0];
        },
        projects:(parent,args,{dataSources},info)=>{
            return dataSources.projectservice.getProjects();
        },
        findProjectById:(parent,{id},{dataSources,info})=>{
            return dataSources.projectservice.findProjectById(id);
        },
    },
    Employee:{
        async projects(employee,args,{dataSources},info){
            let projects=await dataSources.projectservice.getProjects(); 
            let workingprojects=projects.filter(project=>{
                return project.employees.includes(employee.id);
            });
            return workingprojects;
        }
    }
}


const gqlserver= new ApolloServer({typeDefs,resolvers,dataSources});
gqlserver.listen({port:process.env.port||4000}).then (({url})=>console.log("GraphQL server started on $(url)"))