package Prototype2;

import java.util.HashMap;
import java.util.Map;

public class WatchRegistry {
    private Map<WatchType, Watch> Watches = new HashMap<>();

    public WatchRegistry() {
        this.initializingTours();
    }

    public Watch getWatch(WatchType type){

        Watch tours = null;
        try {
            tours = (Watch) Watches.get(type).clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return tours;
    }

    private void initializingTours(){

        Analog analogwatch =new Analog();
        analogwatch.setModel("Casio 45");
        analogwatch.setPrice(15000);

        DigitalWatch dg1=new DigitalWatch();
        dg1.setModel("casio G-Shock");
        dg1.setPrice(30000);
        dg1.setAlarm(true);
        dg1.setStopwatch(true);

        SmartWatch sm1=new SmartWatch();
        sm1.setModel("Iwatch 6");
        sm1.setPrice(90000);
        sm1.setStorage("32GB");
        sm1.setWatchOS("OS6");

        Watches.put(WatchType.Analog,analogwatch);
        Watches.put(WatchType.Smart,sm1);
        Watches.put(WatchType.Digital,dg1);
    }
}
