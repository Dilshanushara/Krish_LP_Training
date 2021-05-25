package com.company;

public class GoldMembership extends Memberships{
    @Override
    protected void CreateMembership() {

        MembershipFaclities.add(new WeightLifting());
        MembershipFaclities.add(new Cardio());

    }
}
