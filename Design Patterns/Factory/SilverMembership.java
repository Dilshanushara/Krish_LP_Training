package com.company;

public class SilverMembership extends Memberships{
    @Override
    protected void CreateMembership() {
        MembershipFaclities.add(new WeightLifting());
    }
}
