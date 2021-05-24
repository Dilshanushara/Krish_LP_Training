package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Robot r1 = Robot.GetfoodservingRobot();
        Robot r2 = Robot.GetfoodservingRobot();

        r1.ServeFood();
        System.out.println(r1);
        System.out.println(r2);
    }
}
