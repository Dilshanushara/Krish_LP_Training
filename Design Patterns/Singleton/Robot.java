package com.company;

public class Robot {
    public static Robot RobotInstance;

    private Robot() {
        if(RobotInstance!=null){
            throw new RuntimeException("Please use GetfoodservingRobot method");
        }
    }
    public static Robot GetfoodservingRobot(){

        if (RobotInstance ==null){
            synchronized (Robot.class) {
                if (RobotInstance == null) {
                    RobotInstance = new Robot();
                }
            }
        }
        return RobotInstance;
    }

    public void ServeFood(){
        //Implementation of robot ServeFood
        System.out.println("Robot is serving food");
    }


}
