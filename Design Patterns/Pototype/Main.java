package Prototype2;

public class Main {

    public static void main(String[] args) {

        WatchRegistry watchRegistry =new WatchRegistry();

       SmartWatch sm1= (SmartWatch) watchRegistry.getWatch(WatchType.Smart);
       DigitalWatch dg1= (DigitalWatch) watchRegistry.getWatch(WatchType.Digital);

        System.out.println(dg1);
        System.out.println(sm1);
        sm1.setStorage("64GB");
        System.out.println(sm1);


    }
}
