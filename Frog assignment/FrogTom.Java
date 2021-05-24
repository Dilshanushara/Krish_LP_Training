import java.util.Scanner;
public class FrogTom{
public static void main(String []args){

//declare variables
int userinputdistance;
int totaldistance=0,hops=0,totalrest=0;

Scanner sc=new Scanner(System.in);

//get user input
System.out.println("Please Enter the Distance in meter to jump ");
userinputdistance=sc.nextInt();

for(int x=0;totaldistance<userinputdistance;x++){
if(totaldistance>0){
totalrest=totalrest+5;
}
totaldistance=totaldistance+5;
hops=hops+1;

if(totaldistance<userinputdistance){
totalrest=totalrest+1;
totaldistance=totaldistance+3;
hops=hops+1;
}

if(totaldistance<userinputdistance){

totalrest=totalrest+2;
totaldistance=totaldistance+1;
hops=hops+1;
}
}

System.out.println("Total Hops count= "+hops);
System.out.println("Total time taken/rest time = "+totalrest +"seconds");

}
}