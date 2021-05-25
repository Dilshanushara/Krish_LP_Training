package com.company;

public class MembershipFactory {
    public static Memberships CreateMembership(String membershiptype) {

        if (membershiptype.equalsIgnoreCase("silver")){
            return new SilverMembership();
        }
        else if (membershiptype.equalsIgnoreCase("gold")){

            return new GoldMembership();
        }
        else if(membershiptype.equalsIgnoreCase("platinum")){

            return new PlatinumMembership();
        }
        else
            return null;



    }

}
