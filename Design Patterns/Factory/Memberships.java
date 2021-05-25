package com.company;

import java.util.ArrayList;
import java.util.List;

public abstract class Memberships {

    protected List<GymFacilities> MembershipFaclities = new ArrayList<>();

    public Memberships(){
        CreateMembership();
    }
    protected abstract void CreateMembership();

    @Override
    public String toString() {
        return "Memberships{" +
                "MembershipFaclities=" + MembershipFaclities +
                '}';
    }
}
