package com.company;

public class PlatinumMembership extends Memberships{
    @Override
    protected void CreateMembership() {

        MembershipFaclities.add(new WeightLifting());
        MembershipFaclities.add(new Cardio());
        MembershipFaclities.add(new Crossfit());
    }
}
