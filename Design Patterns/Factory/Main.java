package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Memberships m1 =MembershipFactory.CreateMembership("silver");
        System.out.println(m1);

        Memberships m2=MembershipFactory.CreateMembership("gold");
        System.out.println(m2);


    }
}
